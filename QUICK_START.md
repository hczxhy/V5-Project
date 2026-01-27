# V5 前端项目快速开始

## 📋 项目概述

V5 模型开发平台前端项目是一个完整的、生产级别的 Vue3 应用，包含：

- ✅ 模型可视化设计器 (Drag & Drop)
- ✅ 版本管理功能
- ✅ 开发对象编辑器
- ✅ 属性字段编辑规则
- ✅ 数据字典管理
- ✅ 用户认证系统
- ✅ 完整的 API 集成

## 🚀 快速启动

### 前置要求

- Node.js >= 16.0.0
- npm >= 8.0.0 (或 yarn >= 1.22.0)

### 安装步骤

1. **安装依赖**

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

2. **启动开发服务器**

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

3. **打开浏览器**

访问 `http://localhost:5173` 查看应用

4. **登录凭证**

```
用户名: admin
密码: 123
```

## 📁 项目结构说明

```
V5-Project/
├── src/
│   ├── api/              # API 接口层
│   │   ├── http.ts      # HTTP 客户端配置
│   │   └── index.ts     # 业务接口定义
│   ├── components/       # 可复用组件
│   │   ├── AppHeader.vue
│   │   └── AppSidebar.vue
│   ├── layouts/          # 布局组件
│   │   └── default.vue
│   ├── router/           # 路由配置
│   │   └── index.ts
│   ├── stores/           # 状态管理 (Pinia)
│   │   ├── user.ts
│   │   └── model.ts
│   ├── styles/           # 全局样式
│   │   └── index.scss
│   ├── views/            # 页面组件
│   │   ├── login/        # 登录页面
│   │   ├── dashboard/    # 仪表板
│   │   ├── model/
│   │   │   ├── designer/ # 模型设计器
│   │   │   ├── list/     # 模型列表
│   │   │   └── version/  # 版本管理
│   │   ├── develop/
│   │   │   └── editor/   # 开发对象编辑
│   │   └── system/
│   │       ├── dict/     # 数据字典
│   │       └── field-rules/ # 字段规则
│   ├── App.vue           # 根组件
│   └── main.ts           # 应用入口
├── index.html            # HTML 入口
├── package.json          # 项目依赖配置
├── vite.config.ts        # Vite 配置
├── tsconfig.json         # TypeScript 配置
└── .env                  # 环境变量
```

## 🔧 主要功能模块

### 1. 登录认证 (`/login`)

- 用户登录界面
- Token 管理
- 会话持久化

### 2. 仪表板 (`/dashboard`)

- 关键指标展示
- 最近操作记录
- 数据概览

### 3. 模型管理 (`/model/*`)

#### 3.1 模型设计器 (`/model/designer`)

**功能**:
- 拖拽式组件设计
- 实时属性编辑
- 设计保存/重置

**使用流程**:
1. 从左侧组件库拖拽组件
2. 在中间画布看到预览
3. 右侧配置组件属性
4. 点击保存设计

#### 3.2 模型列表 (`/model/list`)

**功能**:
- 模型的增删改查
- 模型搜索和过滤
- 版本查看

#### 3.3 版本管理 (`/model/version`)

**功能**:
- 版本创建和编辑
- 版本发布
- 版本历史记录

### 4. 开发工具 (`/develop/*`)

#### 开发对象编辑 (`/develop/editor`)

**功能**:
- 实体对象管理
- 业务对象编辑
- 属性和方法定义
- 对象复制

### 5. 系统设置 (`/system/*`)

#### 5.1 属性字段编辑规则 (`/system/field-rules`)

**功能**:
- 字段验证规则定义
- 必填项设置
- 编辑权限管理

#### 5.2 数据字典 (`/system/dict`)

**功能**:
- 字典类型管理
- 字典项管理
- 排序设置

## 📚 API 接口集成

### 认证接口

```typescript
authApi.login({ username, password, captcha })
authApi.logout()
authApi.heartbeat()
authApi.thirdLogin({ username, secretSalt })
```

### 文件接口

```typescript
fileApi.upload(file)
fileApi.uploadBatch(files)
fileApi.downloadZip(ids)
```

### 模型接口

```typescript
modelApi.list(params)
modelApi.create(data)
modelApi.update(id, data)
modelApi.delete(id)
modelApi.getVersions(modelId)
modelApi.publishVersion(modelId, versionId)
```

更多接口详见 [src/api/index.ts](src/api/index.ts)

## 🎨 自定义和扩展

### 添加新页面

1. 在 `src/views` 创建新文件夹
2. 创建 `.vue` 组件
3. 在 `src/router/index.ts` 添加路由

### 修改主题颜色

编辑 `src/styles/index.scss` 中的变量

### 添加新的 API

在 `src/api/index.ts` 中添加新接口定义

## 🛠️ 常用命令

```bash
# 开发模式
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview

# 代码检查
npm run lint

# 类型检查
npm run type-check
```

## 📦 生产构建

```bash
npm run build
```

构建后的文件在 `dist` 目录中，可部署到任何静态文件服务器。

## 🌐 环境配置

### 开发环境

在 `.env.local` 配置开发 API：

```env
VITE_API_BASE_URL=http://localhost:8080
```

### 生产环境

在构建时配置生产 API：

```bash
VITE_API_BASE_URL=https://api.production.com npm run build
```

## 🔒 认证和授权

- 使用 Pinia 管理用户状态
- Token 存储在 localStorage
- 自动 token 过期处理
- 请求拦截器添加认证信息

## 📱 浏览器兼容性

- Chrome (推荐)
- Firefox
- Safari 13+
- Edge 79+

## ⚠️ 常见问题

### Q: 登录后仍然看到登录页面？

A: 检查 API 是否正确连接，查看浏览器控制台错误信息。

### Q: 模型保存不成功？

A: 确保后端 API 服务正在运行，检查网络标签中的请求。

### Q: 页面样式错乱？

A: 清除浏览器缓存，重新启动开发服务器。

## 📞 技术支持

如有问题，请查阅：
- [Vue 3 文档](https://vuejs.org/)
- [Element Plus 文档](https://element-plus.org/)
- [Vite 文档](https://vitejs.dev/)
- [Pinia 文档](https://pinia.vuejs.org/)

## 📄 许可证

MIT License

---

**最后更新**: 2025-01-27
