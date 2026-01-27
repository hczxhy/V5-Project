<template>
  <div class="model-list">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>模型列表</span>
          <el-space>
            <el-input
              v-model="searchText"
              placeholder="搜索模型..."
              style="width: 200px"
              clearable
            />
            <el-button type="primary" @click="handleNew">新建模型</el-button>
          </el-space>
        </div>
      </template>

      <el-table :data="filteredModels" stripe loading={isLoading}>
        <el-table-column prop="id" label="ID" width="120" />
        <el-table-column prop="name" label="模型名称" />
        <el-table-column prop="version" label="版本" width="100" />
        <el-table-column prop="status" label="状态" width="100">
          <template #default="{ row }">
            <el-tag :type="row.status === 'active' ? 'success' : 'info'">
              {{ row.status === 'active' ? '已发布' : '草稿' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="updatedAt" label="更新时间" width="180" />
        <el-table-column label="操作" width="150" fixed="right">
          <template #default="{ row }">
            <el-button link type="primary" size="small" @click="handleEdit(row)">
              编辑
            </el-button>
            <el-button link type="primary" size="small" @click="handleVersion(row)">
              版本
            </el-button>
            <el-button link type="danger" size="small" @click="handleDelete(row)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 50]"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        style="margin-top: 20px; text-align: right"
      />
    </el-card>

    <!-- Edit Dialog -->
    <el-dialog v-model="dialogVisible" title="编辑模型">
      <el-form v-model="editForm">
        <el-form-item label="模型名称">
          <el-input v-model="editForm.name" />
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="editForm.description" type="textarea" />
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
import { useModelStore } from '@/stores/model'

const modelStore = useModelStore()
const searchText = ref('')
const currentPage = ref(1)
const pageSize = ref(10)
const isLoading = ref(false)
const dialogVisible = ref(false)

const models = ref([
  {
    id: '1',
    name: '用户模型',
    description: '用户信息模型',
    version: '1.0.0',
    status: 'active',
    createdAt: '2025-01-20',
    updatedAt: '2025-01-25',
  },
  {
    id: '2',
    name: '订单模型',
    description: '订单信息模型',
    version: '1.0.0',
    status: 'draft',
    createdAt: '2025-01-22',
    updatedAt: '2025-01-26',
  },
])

const editForm = ref({
  name: '',
  description: '',
})

const filteredModels = computed(() => {
  return models.value.filter(
    (model) =>
      model.name.includes(searchText.value) ||
      model.description.includes(searchText.value)
  )
})

const total = computed(() => filteredModels.value.length)

const handleNew = () => {
  editForm.value = { name: '', description: '' }
  dialogVisible.value = true
}

const handleEdit = (row: any) => {
  editForm.value = { ...row }
  dialogVisible.value = true
}

const handleSave = () => {
  ElMessage.success('模型保存成功')
  dialogVisible.value = false
}

const handleVersion = (row: any) => {
  ElMessage.info('跳转到版本管理')
}

const handleDelete = (row: any) => {
  ElMessageBox.confirm('确定要删除该模型吗？', '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(() => {
      ElMessage.success('删除成功')
    })
    .catch(() => {
      ElMessage.info('已取消删除')
    })
}
</script>

<style scoped>
.model-list {
  padding: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
