# V5 前端项目 - 快速参考卡

## 🎯 一句话总结

**生产级别的 Vue3 + TypeScript 完整前端项目，包含 8 个功能模块，30+ 个 API 接口，即插即用！**

## ⚡ 5 分钟快速启动

```bash
# 1. 安装 (需要 Node.js 16+)
npm install

# 2. 启动开发
npm run dev

# 3. 打开浏览器访问
http://localhost:5173

# 4. 登录
用户名: admin
密码: 123
```

## 📁 核心文件位置

```
项目根目录: /workspaces/V5-Project/

关键文件:
├── package.json              # 项目配置和依赖
├── vite.config.ts            # Vite 构建配置
├── src/
│   ├── main.ts              # 应用入口
│   ├── api/index.ts         # 所有 API 接口定义 (30+)
│   ├── router/index.ts      # 路由配置 (8 个页面)
│   ├── stores/              # Pinia 状态管理 (user.ts, model.ts)
│   └── views/               # 8 个功能页面

文档:
├── QUICK_START.md           # 快速开始 (新手必读) ⭐
├── PROJECT_COMPLETION_SUMMARY.md  # 完成总结
├── DEVELOPMENT_GUIDE.md     # 深度开发指南
├── IMPLEMENTATION_CHECKLIST.md # 完整清单
└── frontend-README.md       # 项目详细说明
```

## 🗂️ 8 个功能模块

| # | 模块 | 路由 | 功能 |
|---|------|------|------|
| 1 | 登录 | /login | 用户认证 |
| 2 | 仪表板 | /dashboard | 数据概览 |
| 3 | **模型设计器** ⭐ | /model/designer | 可视化拖拽设计 |
| 4 | 模型列表 | /model/list | 模型管理 (增删改查) |
| 5 | 版本管理 | /model/version | 版本控制和发布 |
| 6 | 开发对象编辑 | /develop/editor | 对象管理 |
| 7 | 字段规则 | /system/field-rules | 字段验证配置 |
| 8 | 数据字典 | /system/dict | 枚举值管理 |

## 🔌 API 接口快速查询

### 认证
```typescript
authApi.login({ username, password })
authApi.logout()
```

### 模型
```typescript
modelApi.list(params)        // 模型列表
modelApi.create(data)        // 创建模型
modelApi.update(id, data)    // 更新模型
modelApi.getVersions(id)     // 获取版本
```

### 字典
```typescript
dictApi.getTree(params)      // 获取树形字典
dictApi.getRelated(types)    // 获取相关字典
```

更多接口见 `src/api/index.ts`

## 📝 核心概念速览

### 项目结构
```
MVC 架构:
Views (页面)
  ↓
Stores (Pinia 状态)
  ↓
API (Axios 请求)
  ↓
Backend Services
```

### 关键技术栈
- **Vue 3** - 前端框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具
- **Pinia** - 状态管理
- **Vue Router** - 路由管理
- **Axios** - HTTP 客户端
- **Element Plus** - UI 组件库

### 文件命名规范
```
组件:        MyComponent.vue
TypeScript:  myFunction.ts
Store:       myStore.ts
API:         myApi
页面:        views/module/feature/index.vue
```

## 🎨 常用组件

```vue
<!-- 表格 -->
<el-table :data="list">
  <el-table-column prop="name" label="名称" />
</el-table>

<!-- 表单 -->
<el-form :model="form">
  <el-form-item label="名称">
    <el-input v-model="form.name" />
  </el-form-item>
</el-form>

<!-- 按钮 -->
<el-button type="primary" @click="handleSave">保存</el-button>

<!-- 对话框 -->
<el-dialog v-model="visible" title="编辑">
  <!-- 内容 -->
</el-dialog>

<!-- 消息 -->
ElMessage.success('成功')
ElMessageBox.confirm('确认?')
```

## 🔧 常用命令

```bash
npm run dev          # 启动开发服务器
npm run build        # 构建生产版本
npm run preview      # 预览生产版本
npm run lint         # 代码检查
npm run type-check   # 类型检查
```

## 🐛 常见问题解决

| 问题 | 解决方案 |
|------|---------|
| 依赖安装失败 | 清除 node_modules，重新 npm install |
| 端口被占用 | 修改 vite.config.ts 中的 port 值 |
| API 连接失败 | 检查 .env 中的 API 地址 |
| 样式错乱 | 清除浏览器缓存，重启服务器 |
| 编译错误 | 检查 TypeScript 类型定义 |

## 🌟 核心功能使用

### 1. 使用模型设计器

```
1. 打开 /model/designer
2. 从左侧组件库拖拽组件
3. 在中间画布看到预览
4. 右侧配置属性
5. 点击"保存设计"
```

### 2. 管理模型版本

```
1. 打开 /model/version
2. 创建新版本
3. 填写版本号和说明
4. 发布版本
```

### 3. 配置字段规则

```
1. 打开 /system/field-rules
2. 新建规则
3. 设置验证条件
4. 保存规则
```

## 💾 数据存储

### localStorage (浏览器本地存储)
```typescript
// 自动保存的数据
- token          (用户认证令牌)
- userInfo       (用户信息)
```

### Pinia Store (内存状态)
```typescript
// user store    (用户状态)
// model store   (模型状态)
```

## 🔐 认证流程

```
登录页面 (/login)
    ↓
发送 POST /auth/login
    ↓
获得 token 和 user info
    ↓
保存到 Pinia store 和 localStorage
    ↓
重定向到仪表板
```

## 📊 API 请求示例

### 获取模型列表
```typescript
const response = await modelApi.list({
  pageIndex: 1,
  pageSize: 10,
  sortBy: 'updatedAt'
})
```

### 创建新模型
```typescript
const response = await modelApi.create({
  name: '新模型',
  description: '模型描述',
  fields: []
})
```

## 🚀 部署

### 开发环境
```bash
npm run dev
# http://localhost:5173
```

### 生产构建
```bash
npm run build
# 生成 dist 目录
```

### 部署到服务器
```bash
# 1. 上传 dist 目录到服务器
# 2. 配置 Nginx
# 3. 启动服务器
```

## 📞 获取帮助

### 文档
- 快速开始: [QUICK_START.md](QUICK_START.md)
- 开发指南: [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md)
- 完整清单: [IMPLEMENTATION_CHECKLIST.md](IMPLEMENTATION_CHECKLIST.md)

### 官方文档
- Vue 3: https://vuejs.org/
- Element Plus: https://element-plus.org/
- Pinia: https://pinia.vuejs.org/

## ✨ 功能亮点

✅ 企业级项目结构  
✅ 30+ API 接口预定义  
✅ 完整的错误处理  
✅ 响应式设计  
✅ TypeScript 类型安全  
✅ 即插即用  

## 🎯 下一步

```bash
# 1. 安装依赖
npm install

# 2. 启动开发
npm run dev

# 3. 打开浏览器
http://localhost:5173

# 4. 登录体验 (admin / 123)

# 5. 开始开发!
```

---

**🎉 准备好开始了吗？**

立即运行 `npm install && npm run dev`！

---

**最后更新**: 2025-01-27
**项目状态**: ✅ 生产就绪
**支持版本**: Node.js 16+
