# V5 前端开发指南

## 📖 目录

1. [项目架构](#项目架构)
2. [开发规范](#开发规范)
3. [API 集成](#api-集成)
4. [组件开发](#组件开发)
5. [状态管理](#状态管理)
6. [常见问题](#常见问题)

## 项目架构

### 分层设计

```
UI Layer (Vue Components)
    ↓
State Management (Pinia Stores)
    ↓
API Layer (Axios)
    ↓
Backend Services
```

### 核心模块说明

#### 1. API 层 (`src/api/`)

**http.ts** - HTTP 客户端配置
```typescript
// 特性：
// - 自动添加认证 token
// - 统一错误处理
// - 请求/响应拦截
// - 自动登出处理
```

**index.ts** - 业务接口定义
```typescript
// 组织方式：
// - authApi     - 认证接口
// - fileApi     - 文件接口
// - dictApi     - 字典接口
// - modelApi    - 模型接口
// - developApi  - 开发对象接口
```

#### 2. 状态管理 (`src/stores/`)

**user.ts** - 用户状态
```typescript
// 管理内容：
// - 用户信息
// - 认证 token
// - 登录状态
// - 本地存储持久化
```

**model.ts** - 模型状态
```typescript
// 管理内容：
// - 模型列表
// - 当前模型
// - 版本列表
// - 加载状态
```

## 开发规范

### 目录结构规范

```
src/views/
├── [module]/
│   ├── [feature]/
│   │   └── index.vue          # 主页面
│   ├── components/            # 模块专用组件
│   │   └── [ComponentName].vue
│   └── composables/           # 模块专用 Composable
│       └── use[Function].ts
└── index.vue                  # 模块入口（可选）
```

### Vue 组件规范

```vue
<template>
  <div class="module-name">
    <!-- 模板内容 -->
  </div>
</template>

<script setup lang="ts">
// 导入
import { ref, computed } from 'vue'
import type { PropType } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'
import { useStore } from '@/stores'
import { api } from '@/api'

// 类型定义
interface IData {
  id: string
  name: string
}

// Props
interface Props {
  id?: string
}

const props = withDefaults(defineProps<Props>(), {
  id: '',
})

// Emits
const emit = defineEmits<{
  change: [value: IData]
}>()

// 响应式数据
const data = ref<IData>({
  id: '',
  name: '',
})

// 计算属性
const isValid = computed(() => data.value.id && data.value.name)

// 方法
const handleSubmit = async () => {
  // 实现逻辑
}

// 生命周期
onMounted(() => {
  // 初始化
})
</script>

<style scoped>
.module-name {
  /* 样式 */
}
</style>
```

### TypeScript 规范

```typescript
// 类型定义文件
// src/types/index.ts

export interface IUser {
  id: string
  username: string
  email: string
}

export interface IModel {
  id: string
  name: string
  version: string
  status: 'draft' | 'published'
}

export type TStatus = 'active' | 'inactive' | 'deleted'

export const STATUS_MAP = {
  active: '启用',
  inactive: '禁用',
  deleted: '已删除',
}
```

## API 集成

### 添加新接口

1. **定义接口类型**

```typescript
// src/types/api.ts
export interface ILoginRequest {
  username: string
  password: string
  captcha?: string
}

export interface ILoginResponse {
  token: string
  user: IUser
}
```

2. **添加 API 方法**

```typescript
// src/api/index.ts
export const authApi = {
  login: (data: ILoginRequest): Promise<ILoginResponse> =>
    api.post('/auth/login', data),
}
```

3. **在页面中使用**

```vue
<script setup lang="ts">
import { authApi } from '@/api'
import type { ILoginRequest } from '@/types/api'

const handleLogin = async (data: ILoginRequest) => {
  try {
    const response = await authApi.login(data)
    // 处理响应
  } catch (error) {
    // 处理错误
  }
}
</script>
```

### 处理 API 响应

```typescript
// 标准响应格式
interface IApiResponse<T = any> {
  code: number
  message: string
  data: T
  extra?: Record<string, any>
}

// 使用示例
const response = await modelApi.list(params)
if (response.code === 200) {
  // 成功
  handleSuccess(response.data)
} else {
  // 错误
  ElMessage.error(response.message)
}
```

### 错误处理

```typescript
// 全局错误处理在 http.ts
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      // 未授权 - 自动登出
      userStore.logout()
      router.push('/login')
    } else if (error.response?.status === 403) {
      // 无权限
      ElMessage.error('没有权限执行此操作')
    } else if (error.response?.status === 500) {
      // 服务器错误
      ElMessage.error('服务器出错，请稍后重试')
    }
    return Promise.reject(error)
  }
)
```

## 组件开发

### 创建可复用组件

```vue
<!-- src/components/DataTable.vue -->
<template>
  <el-table :data="data" stripe>
    <el-table-column
      v-for="col in columns"
      :key="col.prop"
      :prop="col.prop"
      :label="col.label"
    />
    <el-table-column fixed="right" label="操作">
      <template #default="{ row }">
        <el-button link size="small" @click="handleEdit(row)">
          编辑
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

interface IColumn {
  prop: string
  label: string
}

const props = defineProps<{
  data: any[]
  columns: IColumn[]
}>()

const emit = defineEmits<{
  edit: [row: any]
}>()

const handleEdit = (row: any) => {
  emit('edit', row)
}
</script>
```

### 在页面中使用

```vue
<script setup lang="ts">
const columns = [
  { prop: 'id', label: 'ID' },
  { prop: 'name', label: '名称' },
]

const handleEdit = (row: any) => {
  // 处理编辑
}
</script>

<template>
  <DataTable :data="models" :columns="columns" @edit="handleEdit" />
</template>
```

## 状态管理

### Pinia 使用规范

```typescript
// src/stores/example.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useExampleStore = defineStore('example', () => {
  // 状态
  const items = ref([])
  const loading = ref(false)
  const currentItem = ref(null)

  // 计算属性
  const itemCount = computed(() => items.value.length)
  const isLoading = computed(() => loading.value)

  // 方法
  function setItems(data) {
    items.value = data
  }

  function setLoading(state) {
    loading.value = state
  }

  function addItem(item) {
    items.value.push(item)
  }

  return {
    // 公开状态
    items,
    loading,
    currentItem,
    // 公开计算属性
    itemCount,
    isLoading,
    // 公开方法
    setItems,
    setLoading,
    addItem,
  }
})
```

### 在组件中使用

```vue
<script setup lang="ts">
import { useExampleStore } from '@/stores/example'

const store = useExampleStore()

// 使用状态
console.log(store.items)
console.log(store.itemCount)

// 调用方法
store.addItem({ id: 1, name: 'test' })
</script>
```

## 常见问题

### Q1: 如何在开发环境中测试 API？

**A**: 使用 Vite 的代理功能

```typescript
// vite.config.ts
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
```

### Q2: 如何调试 Pinia 状态？

**A**: 使用 Vue Devtools 扩展

1. 安装 [Vue DevTools](https://devtools.vuejs.org/)
2. 打开 Chrome DevTools
3. 选择 "Pinia" 标签
4. 查看和修改状态

### Q3: 如何处理长列表性能问题？

**A**: 使用虚拟滚动

```vue
<script setup lang="ts">
import { ElVirtualList } from 'element-plus'

const items = ref(generateManyItems()) // 大量数据
</script>

<template>
  <el-virtual-list :items="items" height="400">
    <template #default="{ item }">
      <div>{{ item.name }}</div>
    </template>
  </el-virtual-list>
</template>
```

### Q4: 如何实现权限控制？

**A**: 添加权限检查中间件

```typescript
// src/router/index.ts
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()

  if (to.meta.requiresAuth && !userStore.isLoggedIn) {
    next('/login')
  } else if (to.meta.roles && !userStore.hasRole(to.meta.roles)) {
    next('/forbidden')
  } else {
    next()
  }
})
```

### Q5: 如何集成第三方组件库？

**A**: 在 main.ts 中注册

```typescript
// src/main.ts
import MyCustomLibrary from 'my-custom-library'

app.use(MyCustomLibrary)
```

## 部署指南

### 构建优化

```bash
# 分析包体积
npm run build -- --report

# 启用压缩
# vite.config.ts
import compression from 'vite-plugin-compression'

export default {
  plugins: [
    compression({
      ext: '.gz',
    }),
  ],
}
```

### 环境配置

```bash
# 开发环境
VITE_API_BASE_URL=http://localhost:8080 npm run dev

# 生产环境
VITE_API_BASE_URL=https://api.production.com npm run build

# 预发布
VITE_API_BASE_URL=https://api.staging.com npm run build
```

### 部署到云服务

```bash
# 构建
npm run build

# 上传 dist 目录到服务器
scp -r dist/* user@server:/var/www/v5

# 配置 Nginx
location / {
  root /var/www/v5;
  try_files $uri /index.html;
}
```

## 资源链接

- [核心模块 API 文档](./核心模块api.md)
- [功能需求清单](./V5功能清单-new.xlsx)
- [原型设计](./模型设计器-模型20260115.pdf)

---

**最后更新**: 2025-01-27
