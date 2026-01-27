<template>
  <div class="version-manage">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>版本管理</span>
          <el-button type="primary" @click="handleNewVersion">新建版本</el-button>
        </div>
      </template>

      <el-table :data="versions" stripe>
        <el-table-column prop="version" label="版本号" width="100" />
        <el-table-column prop="status" label="状态" width="100">
          <template #default="{ row }">
            <el-tag :type="row.status === 'published' ? 'success' : 'warning'">
              {{ row.status === 'published' ? '已发布' : '草稿' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="changelog" label="更新说明" />
        <el-table-column prop="createdBy" label="创建人" width="100" />
        <el-table-column prop="createdAt" label="创建时间" width="180" />
        <el-table-column label="操作" width="200" fixed="right">
          <template #default="{ row }">
            <el-button link type="primary" size="small" @click="handleView(row)">
              查看
            </el-button>
            <el-button
              v-if="row.status === 'draft'"
              link
              type="primary"
              size="small"
              @click="handlePublish(row)"
            >
              发布
            </el-button>
            <el-button link type="danger" size="small" @click="handleDelete(row)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- Version Detail Dialog -->
    <el-dialog v-model="detailVisible" title="版本详情">
      <el-descriptions :column="1" border>
        <el-descriptions-item label="版本号">
          {{ currentVersion?.version }}
        </el-descriptions-item>
        <el-descriptions-item label="状态">
          <el-tag :type="currentVersion?.status === 'published' ? 'success' : 'warning'">
            {{ currentVersion?.status === 'published' ? '已发布' : '草稿' }}
          </el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="创建人">
          {{ currentVersion?.createdBy }}
        </el-descriptions-item>
        <el-descriptions-item label="创建时间">
          {{ currentVersion?.createdAt }}
        </el-descriptions-item>
        <el-descriptions-item label="更新说明">
          {{ currentVersion?.changelog }}
        </el-descriptions-item>
      </el-descriptions>
    </el-dialog>

    <!-- New Version Dialog -->
    <el-dialog v-model="newVersionVisible" title="新建版本">
      <el-form v-model="newVersionForm">
        <el-form-item label="版本号" required>
          <el-input v-model="newVersionForm.version" placeholder="e.g., 1.0.1" />
        </el-form-item>
        <el-form-item label="更新说明">
          <el-input
            v-model="newVersionForm.changelog"
            type="textarea"
            rows="4"
            placeholder="描述此版本的主要变化"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="newVersionVisible = false">取消</el-button>
        <el-button type="primary" @click="handleCreateVersion">创建</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const versions = ref([
  {
    id: '1',
    version: '1.0.0',
    status: 'published',
    changelog: '初始版本发布',
    createdBy: 'admin',
    createdAt: '2025-01-20 10:00:00',
  },
  {
    id: '2',
    version: '1.0.1',
    status: 'draft',
    changelog: '修复字段验证问题',
    createdBy: 'admin',
    createdAt: '2025-01-25 14:30:00',
  },
  {
    id: '3',
    version: '1.1.0',
    status: 'draft',
    changelog: '添加新字段支持',
    createdBy: 'admin',
    createdAt: '2025-01-26 09:15:00',
  },
])

const detailVisible = ref(false)
const newVersionVisible = ref(false)
const currentVersion = ref<any>(null)

const newVersionForm = ref({
  version: '',
  changelog: '',
})

const handleNewVersion = () => {
  newVersionForm.value = { version: '', changelog: '' }
  newVersionVisible.value = true
}

const handleCreateVersion = () => {
  const version = {
    id: String(versions.value.length + 1),
    version: newVersionForm.value.version,
    status: 'draft',
    changelog: newVersionForm.value.changelog,
    createdBy: 'admin',
    createdAt: new Date().toLocaleString(),
  }
  versions.value.push(version)
  newVersionVisible.value = false
  ElMessage.success('版本创建成功')
}

const handleView = (row: any) => {
  currentVersion.value = row
  detailVisible.value = true
}

const handlePublish = (row: any) => {
  ElMessageBox.confirm('确定要发布此版本吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
  })
    .then(() => {
      row.status = 'published'
      ElMessage.success('版本发布成功')
    })
    .catch(() => {})
}

const handleDelete = (row: any) => {
  ElMessageBox.confirm('确定要删除此版本吗？', '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(() => {
      const index = versions.value.findIndex((v) => v.id === row.id)
      if (index > -1) {
        versions.value.splice(index, 1)
      }
      ElMessage.success('版本删除成功')
    })
    .catch(() => {})
}
</script>

<style scoped>
.version-manage {
  padding: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
