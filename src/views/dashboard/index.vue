<template>
  <div class="dashboard-container">
    <el-row :gutter="20" class="row-card">
      <el-col :xs="24" :sm="12" :md="6">
        <div class="stat-card">
          <div class="stat-title">模型总数</div>
          <div class="stat-value">{{ stats.modelCount }}</div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6">
        <div class="stat-card">
          <div class="stat-title">版本数</div>
          <div class="stat-value">{{ stats.versionCount }}</div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6">
        <div class="stat-card">
          <div class="stat-title">字段总数</div>
          <div class="stat-value">{{ stats.fieldCount }}</div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6">
        <div class="stat-card">
          <div class="stat-title">开发对象</div>
          <div class="stat-value">{{ stats.objectCount }}</div>
        </div>
      </el-col>
    </el-row>

    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>最近操作</span>
        </div>
      </template>
      <el-table :data="recentActivities" stripe>
        <el-table-column prop="type" label="类型" width="100" />
        <el-table-column prop="name" label="名称" />
        <el-table-column prop="operator" label="操作人" width="120" />
        <el-table-column prop="time" label="时间" width="180" />
      </el-table>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const stats = reactive({
  modelCount: 0,
  versionCount: 0,
  fieldCount: 0,
  objectCount: 0,
})

const recentActivities = reactive([
  {
    type: '模型',
    name: '用户模型',
    operator: 'admin',
    time: '2025-01-27 10:30:00',
  },
  {
    type: '版本',
    name: 'v1.0.0',
    operator: 'admin',
    time: '2025-01-27 09:15:00',
  },
  {
    type: '字段',
    name: '添加字段',
    operator: 'admin',
    time: '2025-01-26 14:20:00',
  },
])
</script>

<style scoped>
.dashboard-container {
  padding: 20px;
}

.row-card {
  margin-bottom: 20px;
}

.stat-card {
  background: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.stat-title {
  color: #909399;
  font-size: 14px;
  margin-bottom: 10px;
}

.stat-value {
  font-size: 32px;
  font-weight: bold;
  color: #409eff;
}

.box-card {
  margin-top: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
