<template>
  <div class="login-container">
    <div class="login-box">
      <h1 class="login-title">V5 模型开发平台</h1>
      <el-form ref="formRef" :model="loginForm" @keyup.enter="handleLogin">
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="请输入用户名"
            clearable
          />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="请输入密码"
            clearable
            show-password
          />
        </el-form-item>
        <el-button type="primary" class="login-btn" @click="handleLogin">
          登录
        </el-button>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/user'
import { authApi } from '@/api'

const router = useRouter()
const userStore = useUserStore()

const loginForm = reactive({
  username: 'admin',
  password: '123',
})

const handleLogin = async () => {
  try {
    const response: any = await authApi.login({
      username: loginForm.username,
      password: loginForm.password,
      captcha: '-1',
    })

    if (response && response.data) {
      const { token, user } = response.data
      userStore.setToken(token)
      userStore.setUserInfo(user)
      ElMessage.success('登录成功')
      router.push('/dashboard')
    }
  } catch (error) {
    ElMessage.error('登录失败，请检查用户名和密码')
    console.error('Login error:', error)
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.login-box {
  width: 400px;
  padding: 40px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.login-title {
  text-align: center;
  margin: 0 0 30px 0;
  font-size: 24px;
  color: #333;
}

.login-btn {
  width: 100%;
  height: 40px;
  font-size: 16px;
}
</style>
