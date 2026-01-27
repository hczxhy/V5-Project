<template>
  <div class="dict-manage">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>数据字典</span>
          <el-space>
            <el-input
              v-model="searchText"
              placeholder="搜索字典..."
              style="width: 200px"
              clearable
            />
            <el-button type="primary" @click="handleNew">新建字典</el-button>
          </el-space>
        </div>
      </template>

      <el-table :data="filteredDicts" stripe default-expand-all>
        <el-table-column type="expand">
          <template #default="{ row }">
            <el-table :data="row.children" :show-header="false">
              <el-table-column prop="itemName" label="项目名称" />
              <el-table-column prop="itemValue" label="项目值" width="150" />
              <el-table-column label="操作" width="200" fixed="right">
                <template #default="{ row: child }">
                  <el-button
                    link
                    type="primary"
                    size="small"
                    @click="handleEditItem(row, child)"
                  >
                    编辑
                  </el-button>
                  <el-button
                    link
                    type="danger"
                    size="small"
                    @click="handleDeleteItem(row, child)"
                  >
                    删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>
        <el-table-column prop="type" label="字典类型" width="150" />
        <el-table-column prop="description" label="描述" />
        <el-table-column label="操作" width="200" fixed="right">
          <template #default="{ row }">
            <el-button link type="primary" size="small" @click="handleEdit(row)">
              编辑
            </el-button>
            <el-button link type="primary" size="small" @click="handleAddItem(row)">
              添加项
            </el-button>
            <el-button link type="danger" size="small" @click="handleDelete(row)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- Dictionary Edit Dialog -->
    <el-dialog v-model="dictDialogVisible" :title="editDict.id ? '编辑字典' : '新建字典'">
      <el-form v-model="editDict" label-width="100px">
        <el-form-item label="字典类型" required>
          <el-input v-model="editDict.type" placeholder="e.g., USER_STATUS" />
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="editDict.description" type="textarea" rows="3" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dictDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleSaveDict">保存</el-button>
      </template>
    </el-dialog>

    <!-- Item Edit Dialog -->
    <el-dialog v-model="itemDialogVisible" :title="editItem.id ? '编辑项' : '新建项'">
      <el-form v-model="editItem" label-width="100px">
        <el-form-item label="项目名称" required>
          <el-input v-model="editItem.itemName" />
        </el-form-item>
        <el-form-item label="项目值" required>
          <el-input v-model="editItem.itemValue" />
        </el-form-item>
        <el-form-item label="排序">
          <el-input-number v-model="editItem.sortNum" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="itemDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleSaveItem">保存</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const searchText = ref('')
const dictDialogVisible = ref(false)
const itemDialogVisible = ref(false)
const currentDict = ref<any>(null)

const dicts = ref([
  {
    id: '1',
    type: 'USER_STATUS',
    description: '用户状态',
    children: [
      { id: '1-1', itemName: '启用', itemValue: 'active', sortNum: 1 },
      { id: '1-2', itemName: '禁用', itemValue: 'inactive', sortNum: 2 },
      { id: '1-3', itemName: '已删除', itemValue: 'deleted', sortNum: 3 },
    ],
  },
  {
    id: '2',
    type: 'ORDER_STATUS',
    description: '订单状态',
    children: [
      { id: '2-1', itemName: '未付款', itemValue: 'unpaid', sortNum: 1 },
      { id: '2-2', itemName: '已付款', itemValue: 'paid', sortNum: 2 },
      { id: '2-3', itemName: '已发货', itemValue: 'shipped', sortNum: 3 },
      { id: '2-4', itemName: '已完成', itemValue: 'completed', sortNum: 4 },
    ],
  },
])

const editDict = ref({
  id: '',
  type: '',
  description: '',
  children: [],
})

const editItem = ref({
  id: '',
  itemName: '',
  itemValue: '',
  sortNum: 0,
})

const filteredDicts = computed(() => {
  return dicts.value.filter(
    (dict) =>
      dict.type.includes(searchText.value) ||
      dict.description.includes(searchText.value)
  )
})

const handleNew = () => {
  editDict.value = {
    id: '',
    type: '',
    description: '',
    children: [],
  }
  dictDialogVisible.value = true
}

const handleEdit = (row: any) => {
  editDict.value = { ...row }
  dictDialogVisible.value = true
}

const handleSaveDict = () => {
  if (!editDict.value.type) {
    ElMessage.error('请填写字典类型')
    return
  }

  if (!editDict.value.id) {
    const newDict = {
      ...editDict.value,
      id: String(dicts.value.length + 1),
    }
    dicts.value.push(newDict)
    ElMessage.success('字典创建成功')
  } else {
    const index = dicts.value.findIndex((dict) => dict.id === editDict.value.id)
    if (index > -1) {
      dicts.value[index] = { ...editDict.value }
      ElMessage.success('字典更新成功')
    }
  }
  dictDialogVisible.value = false
}

const handleAddItem = (row: any) => {
  currentDict.value = row
  editItem.value = {
    id: '',
    itemName: '',
    itemValue: '',
    sortNum: row.children.length + 1,
  }
  itemDialogVisible.value = true
}

const handleEditItem = (row: any, child: any) => {
  currentDict.value = row
  editItem.value = { ...child }
  itemDialogVisible.value = true
}

const handleSaveItem = () => {
  if (!editItem.value.itemName || !editItem.value.itemValue) {
    ElMessage.error('请填写项目名称和值')
    return
  }

  if (!editItem.value.id) {
    const newItem = {
      ...editItem.value,
      id: `${currentDict.value.id}-${Date.now()}`,
    }
    currentDict.value.children.push(newItem)
    ElMessage.success('项目创建成功')
  } else {
    const index = currentDict.value.children.findIndex(
      (item: any) => item.id === editItem.value.id
    )
    if (index > -1) {
      currentDict.value.children[index] = { ...editItem.value }
      ElMessage.success('项目更新成功')
    }
  }
  itemDialogVisible.value = false
}

const handleDelete = (row: any) => {
  ElMessageBox.confirm('确定要删除此字典吗？', '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(() => {
      const index = dicts.value.findIndex((dict) => dict.id === row.id)
      if (index > -1) {
        dicts.value.splice(index, 1)
      }
      ElMessage.success('字典删除成功')
    })
    .catch(() => {})
}

const handleDeleteItem = (row: any, child: any) => {
  ElMessageBox.confirm('确定要删除此项吗？', '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(() => {
      const index = row.children.findIndex((item: any) => item.id === child.id)
      if (index > -1) {
        row.children.splice(index, 1)
      }
      ElMessage.success('项目删除成功')
    })
    .catch(() => {})
}
</script>

<style scoped>
.dict-manage {
  padding: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
