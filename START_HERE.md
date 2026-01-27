# 🚀 V5 项目启动指引 (START HERE!)

> **新手必读** - 按照本指南 5 分钟内启动项目！

---

## 🎯 目标

在本指南的帮助下，你将：

✅ 在 5 分钟内启动项目  
✅ 在 1 分钟内使用登录功能  
✅ 在 2 分钟内浏览所有功能模块  
✅ 立即开始开发！  

---

## ⏱️ 第 1 步: 检查前置条件 (1 分钟)

### 需要什么?
- 一台能运行 Node.js 的电脑
- 网络连接 (首次下载依赖)

### 检查 Node.js

```bash
node --version
# 应该显示 v16.0.0 或更高版本

npm --version
# 应该显示 8.0.0 或更高版本
```

❌ **如果没有 Node.js?**

1. 访问 https://nodejs.org/
2. 下载 LTS 版本
3. 安装后重新打开终端

---

## ⏱️ 第 2 步: 进入项目目录 (30 秒)

```bash
# 打开终端，输入以下命令

cd /workspaces/V5-Project

# 验证你在正确的目录
pwd
# 应该显示: /workspaces/V5-Project
```

---

## ⏱️ 第 3 步: 安装依赖 (2-3 分钟)

```bash
npm install
```

**等待安装完成...**

- 🟢 绿色进度条 = 正在下载
- 🟡 黄色警告 = 可以忽略
- 🔴 红色错误 = 需要解决 (见常见问题)

✅ 看到 `added XXX packages` 表示成功！

---

## ⏱️ 第 4 步: 启动开发服务器 (10 秒)

```bash
npm run dev
```

你应该看到:
```
VITE v5.0.0  ready in 1234 ms

➜  Local:   http://localhost:5173/
➜  press h to show help
```

✅ 项目已启动！

---

## ⏱️ 第 5 步: 打开浏览器 (30 秒)

在浏览器中访问:

```
http://localhost:5173
```

或者按照终端提示的链接点击

---

## ⏱️ 第 6 步: 使用默认凭证登录 (1 分钟)

看到登录页面，输入:

```
用户名: admin
密码: 123
```

点击 **登录** 按钮

✅ 登录成功！

---

## ⏱️ 第 7 步: 探索功能 (2 分钟)

### 你可以看到的功能:

1. **仪表板** - 数据统计
2. **模型设计器** ⭐ - 拖拽设计 (最酷的功能!)
3. **模型列表** - 管理模型
4. **版本管理** - 版本控制
5. **开发对象编辑** - 对象管理
6. **字段规则** - 配置字段
7. **数据字典** - 管理枚举

**试试模型设计器**:
1. 在左侧菜单点击 "模型设计器"
2. 从左侧组件库拖拽组件到中间
3. 在右侧配置属性
4. 点击保存!

---

## 🎉 完成!

恭喜！你已经:

✅ 启动了 V5 项目  
✅ 登录了系统  
✅ 探索了功能  
✅ 准备开始开发  

---

## 📚 下一步

### 我想深入了解

📖 **推荐阅读** (按顺序):

1. [QUICK_REFERENCE.md](QUICK_REFERENCE.md) - 快速参考卡 (5 分钟)
2. [PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md) - 项目总览 (10 分钟)
3. [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md) - 开发指南 (30 分钟)

### 我想开始开发

1. 打开 VS Code
2. 打开 `/workspaces/V5-Project` 文件夹
3. 查看 `src/views/` 下的页面代码
4. 开始修改和开发！

### 我想修改功能

所有功能代码都在 `src/views/` 目录中:

```
src/views/
├── login/           # 登录
├── dashboard/       # 仪表板
├── model/
│   ├── designer/    # 模型设计器
│   ├── list/        # 模型列表
│   └── version/     # 版本管理
├── develop/
│   └── editor/      # 开发对象编辑
└── system/
    ├── field-rules/ # 字段规则
    └── dict/        # 数据字典
```

打开任何 `.vue` 文件开始编辑！

---

## ⚠️ 常见问题

### Q1: npm install 失败怎么办?

**A**:

```bash
# 1. 清除缓存
npm cache clean --force

# 2. 删除 node_modules
rm -rf node_modules

# 3. 重新安装
npm install
```

### Q2: 项目启动不了怎么办?

**A**:

```bash
# 1. 检查端口是否被占用
# 5173 端口可能被占用

# 2. 修改端口 (vite.config.ts)
# server: {
#   port: 5174,  // 改为其他端口
# }

# 3. 重新启动
npm run dev
```

### Q3: 登录后看不到功能怎么办?

**A**: 检查浏览器控制台 (F12)，查看是否有错误信息

### Q4: 修改代码后没有更新?

**A**: Vite 应该自动刷新，如果没有:

1. 按 Ctrl+Shift+R 强制刷新
2. 查看终端是否有编译错误

### Q5: 如何停止开发服务器?

**A**: 在终端按 `Ctrl+C`

---

## 🎯 开发工作流

### 1. 启动项目

```bash
npm run dev
```

### 2. 打开代码编辑器

```bash
code /workspaces/V5-Project
```

### 3. 修改代码

编辑 `src/views/` 中的任何 `.vue` 文件

### 4. 自动刷新

浏览器会自动刷新显示变化

### 5. 进行版本控制

```bash
git add .
git commit -m "描述你的改动"
git push
```

---

## 🔧 常用命令

```bash
# 启动开发服务器 (开发时用这个)
npm run dev

# 构建生产版本 (上线前用这个)
npm run build

# 预览生产版本 (构建后用这个)
npm run preview

# 代码检查 (检查代码规范)
npm run lint

# 类型检查 (检查 TypeScript)
npm run type-check
```

---

## 💾 项目文件说明

### 重要文件位置

```
/workspaces/V5-Project/
│
├── src/                        # 源代码目录 (90% 时间在这里工作)
│   ├── views/                 # 页面组件 (修改功能从这里开始)
│   ├── components/            # 可复用组件
│   ├── api/                   # API 接口
│   ├── stores/                # 状态管理
│   ├── router/                # 路由配置
│   └── styles/                # 全局样式
│
├── package.json               # 依赖配置 (不要改)
├── vite.config.ts            # Vite 配置 (一般不改)
├── index.html                # HTML 入口 (一般不改)
│
└── 文档/                      # 所有文档都在项目根目录
    ├── QUICK_REFERENCE.md    # ⭐ 快速参考
    ├── PROJECT_OVERVIEW.md   # ⭐ 项目总览
    ├── DEVELOPMENT_GUIDE.md  # 开发指南
    └── ... 其他文档
```

---

## 🎓 学习路径

### 初学者路线 (1-2 天)

1. ✅ 阅读本文件 (START_HERE.md)
2. ✅ 启动项目，探索所有功能
3. ✅ 阅读 QUICK_REFERENCE.md
4. ✅ 查看 src/views/dashboard/index.vue
5. ✅ 尝试修改一个页面的标题

### 中级开发者路线 (3-5 天)

1. ✅ 阅读 PROJECT_OVERVIEW.md
2. ✅ 阅读 DEVELOPMENT_GUIDE.md
3. ✅ 研究 src/api/index.ts
4. ✅ 研究 src/stores/ 状态管理
5. ✅ 添加新页面或修改现有功能

### 高级开发者路线 (1 周)

1. ✅ 了解整个项目架构
2. ✅ 性能优化
3. ✅ 集成真实 API
4. ✅ 定制化开发
5. ✅ 生产环境部署

---

## 🌟 重要提示

### ✅ 做这些

- ✅ 在 `src/` 目录中修改代码
- ✅ 添加新的页面和功能
- ✅ 修改样式和 UI
- ✅ 集成 API 接口

### ❌ 不要做这些

- ❌ 删除 package.json
- ❌ 删除 node_modules (需要时重新 npm install)
- ❌ 随意修改构建配置
- ❌ 在 node_modules 中修改文件

---

## 🆘 需要帮助?

### 问题 | 解决方案
---|---
启动失败 | 检查 Node.js 版本，运行 `npm install` 清除缓存
代码错误 | 查看终端错误信息或浏览器 F12 控制台
样式不正常 | 清除浏览器缓存 (Ctrl+Shift+Delete)
API 失败 | 检查后端是否运行，查看 .env 配置
找不到文件 | 检查文件路径是否正确，大小写敏感

---

## 📞 获取更多帮助

### 查看文档

```bash
# 查看所有可用的 markdown 文档
ls -la *.md

# 打开某个文档
cat QUICK_REFERENCE.md
```

### 官方资源

- Vue 3 官方文档: https://vuejs.org/
- Vite 官方文档: https://vitejs.dev/
- Element Plus 文档: https://element-plus.org/
- TypeScript 文档: https://www.typescriptlang.org/

---

## 🚀 最后一步: 开始开发!

现在你已经：

✅ 理解了项目结构  
✅ 启动了开发服务器  
✅ 登录了系统  
✅ 探索了功能  

**现在就开始修改代码吧！** 🎉

### 快速测试修改

1. 打开 `src/views/dashboard/index.vue`
2. 找到这一行: `<span>仪表板</span>`
3. 改成: `<span>我的仪表板</span>`
4. 保存文件
5. 在浏览器中看到自动更新！

**就是这么简单！**

---

## 💡 提示

### 使用 VS Code 插件提升开发体验

推荐安装:
- Vetur (Vue 支持)
- TypeScript Vue Plugin
- ESLint (代码检查)

---

## 🎊 恭喜!

你已经准备好开发 V5 项目了！

```bash
npm run dev
```

**享受开发过程！** 🚀

---

**文档**: START_HERE.md  
**创建时间**: 2025-01-27  
**版本**: 1.0  

**下一步**: 打开浏览器，享受 V5 平台！
