<template>
  <div id="app">
    <el-container class="app-container">
      <el-aside width="200px" class="app-aside">
        <AppSidebar />
      </el-aside>
      <el-container>
        <el-header class="app-header">
          <AppHeader />
        </el-header>
        <el-main class="app-main">
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import AppSidebar from '@/components/AppSidebar.vue'
</script>

<style scoped>
#app {
  width: 100%;
  height: 100vh;
}

.app-container {
  height: 100%;
}

.app-aside {
  background-color: #001529;
  color: #fff;
  border-right: 1px solid #ddd;
}

.app-header {
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  padding: 0;
  display: flex;
  align-items: center;
}

.app-main {
  background-color: #f5f7fa;
  padding: 20px;
}
</style>
