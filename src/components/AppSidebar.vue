<template>
  <div class="app-sidebar">
    <div class="logo-section">
      <h1>V5平台</h1>
    </div>
    <el-menu
      :default-active="activeMenu"
      class="el-menu-vertical-demo"
      :router="true"
      background-color="#001529"
      text-color="#fff"
      active-text-color="#409eff"
    >
      <el-menu-item index="/dashboard">
        <span>仪表板</span>
      </el-menu-item>
      <el-sub-menu index="1">
        <template #title>
          <span>模型管理</span>
        </template>
        <el-menu-item index="/model/designer">模型设计器</el-menu-item>
        <el-menu-item index="/model/list">模型列表</el-menu-item>
        <el-menu-item index="/model/version">版本管理</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <span>开发工具</span>
        </template>
        <el-menu-item index="/develop/editor">对象编辑</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <span>系统设置</span>
        </template>
        <el-menu-item index="/system/field-rules">字段规则</el-menu-item>
        <el-menu-item index="/system/dict">数据字典</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const activeMenu = ref(route.path)
</script>

<style scoped>
.app-sidebar {
  height: 100%;
  overflow-y: auto;
}

.logo-section {
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #1f3a5d;
}

.logo-section h1 {
  margin: 0;
  font-size: 20px;
  color: #fff;
}

.el-menu {
  border-right: none;
}
</style>
