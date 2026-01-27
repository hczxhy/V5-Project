<template>
  <div class="default-layout">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

onMounted(() => {
  userStore.loadFromStorage()
})
</script>

<style scoped>
.default-layout {
  width: 100%;
  height: 100%;
}
</style>
