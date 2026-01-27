<template>
  <div class="develop-editor">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>开发对象编辑</span>
          <el-space>
            <el-input
              v-model="searchText"
              placeholder="搜索对象..."
              style="width: 200px"
              clearable
            />
            <el-button type="primary" @click="handleNew">新建对象</el-button>
          </el-space>
        </div>
      </template>

      <el-table :data="filteredObjects" stripe>
        <el-table-column prop="id" label="ID" width="150" />
        <el-table-column prop="name" label="对象名称" />
        <el-table-column prop="type" label="对象类型" width="120" />
        <el-table-column prop="status" label="状态" width="100">
          <template #default="{ row }">
            <el-tag :type="row.status === 'active' ? 'success' : 'danger'">
              {{ row.status === 'active' ? '启用' : '禁用' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="updatedAt" label="更新时间" width="180" />
        <el-table-column label="操作" width="200" fixed="right">
          <template #default="{ row }">
            <el-button link type="primary" size="small" @click="handleEdit(row)">
              编辑
            </el-button>
            <el-button link type="primary" size="small" @click="handleClone(row)">
              复制
            </el-button>
            <el-button link type="danger" size="small" @click="handleDelete(row)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- Edit Dialog -->
    <el-dialog v-model="dialogVisible" :title="editForm.id ? '编辑对象' : '新建对象'" width="60%">
      <el-form v-model="editForm" label-width="120px">
        <el-form-item label="对象名称" required>
          <el-input v-model="editForm.name" />
        </el-form-item>
        <el-form-item label="对象类型" required>
          <el-select v-model="editForm.type">
            <el-option label="实体对象" value="entity" />
            <el-option label="视图对象" value="view" />
            <el-option label="业务对象" value="business" />
            <el-option label="服务对象" value="service" />
          </el-select>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="editForm.description" type="textarea" rows="4" />
        </el-form-item>
        <el-form-item label="属性定义">
          <el-input
            v-model="editForm.properties"
            type="textarea"
            rows="6"
            placeholder="JSON格式属性定义"
          />
        </el-form-item>
        <el-form-item label="方法定义">
          <el-input
            v-model="editForm.methods"
            type="textarea"
            rows="6"
            placeholder="定义对象的方法"
          />
        </el-form-item>
        <el-form-item label="状态">
          <el-radio-group v-model="editForm.status">
            <el-radio label="active">启用</el-radio>
            <el-radio label="inactive">禁用</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleSave">保存</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const searchText = ref('')
const dialogVisible = ref(false)

const objects = ref([
  {
    id: 'user_001',
    name: '用户对象',
    type: 'entity',
    status: 'active',
    description: '用户信息实体对象',
    properties: '{}',
    methods: '{}',
    createdAt: '2025-01-20',
    updatedAt: '2025-01-25',
  },
  {
    id: 'order_001',
    name: '订单对象',
    type: 'entity',
    status: 'active',
    description: '订单信息实体对象',
    properties: '{}',
    methods: '{}',
    createdAt: '2025-01-22',
    updatedAt: '2025-01-26',
  },
])

const editForm = ref({
  id: '',
  name: '',
  type: 'entity',
  status: 'active',
  description: '',
  properties: '',
  methods: '',
})

const filteredObjects = computed(() => {
  return objects.value.filter(
    (obj) =>
      obj.name.includes(searchText.value) ||
      obj.id.includes(searchText.value) ||
      obj.description.includes(searchText.value)
  )
})

const handleNew = () => {
  editForm.value = {
    id: '',
    name: '',
    type: 'entity',
    status: 'active',
    description: '',
    properties: '',
    methods: '',
  }
  dialogVisible.value = true
}

const handleEdit = (row: any) => {
  editForm.value = { ...row }
  dialogVisible.value = true
}

const handleSave = () => {
  if (!editForm.value.name || !editForm.value.type) {
    ElMessage.error('请填写必填项')
    return
  }

  if (!editForm.value.id) {
    // Create new
    const newObj = {
      ...editForm.value,
      id: `${editForm.value.type}_${Date.now()}`,
      createdAt: new Date().toLocaleDateString(),
      updatedAt: new Date().toLocaleDateString(),
    }
    objects.value.push(newObj)
    ElMessage.success('对象创建成功')
  } else {
    // Update existing
    const index = objects.value.findIndex((obj) => obj.id === editForm.value.id)
    if (index > -1) {
      objects.value[index] = {
        ...objects.value[index],
        ...editForm.value,
        updatedAt: new Date().toLocaleDateString(),
      }
      ElMessage.success('对象更新成功')
    }
  }
  dialogVisible.value = false
}

const handleClone = (row: any) => {
  const newObj = {
    ...row,
    id: `${row.type}_${Date.now()}`,
    name: `${row.name} (副本)`,
  }
  objects.value.push(newObj)
  ElMessage.success('对象复制成功')
}

const handleDelete = (row: any) => {
  ElMessageBox.confirm('确定要删除此对象吗？', '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(() => {
      const index = objects.value.findIndex((obj) => obj.id === row.id)
      if (index > -1) {
        objects.value.splice(index, 1)
      }
      ElMessage.success('对象删除成功')
    })
    .catch(() => {})
}
</script>

<style scoped>
.develop-editor {
  padding: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
