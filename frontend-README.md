# V5 模型开发平台 - 前端项目

## 项目概述

这是一个基于 Vue3 + TypeScript 的 V5 模型开发平台前端项目，包含模型设计、版本管理、字段编辑等核心功能。

## 技术栈

- **框架**: Vue 3
- **状态管理**: Pinia
- **路由**: Vue Router 4
- **UI 框架**: Element Plus
- **HTTP 客户端**: Axios
- **构建工具**: Vite
- **语言**: TypeScript
- **样式**: SCSS

## 项目结构

```
src/
├── api/                    # API 接口定义
│   ├── http.ts            # Axios 实例和拦截器
│   └── index.ts           # 业务接口定义
├── components/             # 全局组件
│   ├── AppHeader.vue       # 应用头部
│   └── AppSidebar.vue      # 应用侧边栏
├── layouts/                # 布局组件
│   └── default.vue         # 默认布局
├── router/                 # 路由配置
│   └── index.ts
├── stores/                 # Pinia 状态存储
│   ├── user.ts            # 用户状态
│   └── model.ts           # 模型状态
├── styles/                 # 全局样式
│   └── index.scss
├── views/                  # 页面组件
│   ├── login/             # 登录页
│   ├── dashboard/         # 仪表板
│   ├── model/
│   │   ├── designer/      # 模型设计器
│   │   ├── list/          # 模型列表
│   │   └── version/       # 版本管理
│   ├── develop/
│   │   └── editor/        # 开发对象编辑
│   └── system/
│       ├── field-rules/   # 字段编辑规则
│       └── dict/          # 数据字典
├── App.vue                # 根组件
└── main.ts                # 入口文件
```

## 功能模块

### 1. 仪表板 (Dashboard)
- 显示关键指标统计
- 最近操作记录

### 2. 模型管理
- **模型设计器**: 拖拽式模型可视化设计
- **模型列表**: 模型的增删改查
- **版本管理**: 模型版本控制和发布

### 3. 开发工具
- **开发对象编辑**: 创建和管理开发对象
- 支持属性和方法定义

### 4. 系统设置
- **属性字段编辑规则**: 定义字段验证规则
- **数据字典**: 枚举值管理

## 快速开始

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 开发环境启动

```bash
npm run dev
# 或
yarn dev
```

项目将在 `http://localhost:5173` 启动

### 构建生产版本

```bash
npm run build
# 或
yarn build
```

### 预览生产构建

```bash
npm run preview
```

## API 配置

API 接口配置在 `.env` 文件中：

```env
VITE_API_BASE_URL=http://localhost:8080
```

## 使用说明

### 登录

- 默认用户名: `admin`
- 默认密码: `123`

### 模型设计

1. 进入"模型设计器"
2. 从左侧组件库拖拽组件到中间画布
3. 右侧配置组件属性
4. 点击"保存设计"保存

### 版本管理

1. 进入"版本管理"
2. 创建新版本
3. 编辑版本信息
4. 发布版本

### 字段规则管理

1. 进入"属性字段编辑规则"
2. 创建新规则
3. 设置验证规则、默认值等
4. 保存规则

## API 接口

所有 API 接口定义在 `src/api/index.ts` 中，包括：

- 认证接口 (`authApi`)
- 文件上传接口 (`fileApi`)
- 字典接口 (`dictApi`)
- 模型接口 (`modelApi`)
- 开发对象接口 (`developApi`)

## 环境变量

创建 `.env.local` 文件来配置本地环境变量：

```env
VITE_API_BASE_URL=http://localhost:8080
```

## 常见问题

### 如何连接真实的 API？

修改 `src/api/http.ts` 中的 baseURL 配置，或在 `.env` 中设置 `VITE_API_BASE_URL`。

### 如何自定义主题？

编辑 `src/styles/index.scss` 全局样式，或在 Element Plus 文档中查找主题定制方法。

### 如何添加新页面？

1. 在 `src/views` 中创建新文件夹
2. 创建 `.vue` 文件
3. 在 `src/router/index.ts` 中添加路由配置

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 许可证

MIT

## 贡献指南

欢迎提交 Issue 和 Pull Request！

## 联系方式

如有问题，请联系项目团队。
