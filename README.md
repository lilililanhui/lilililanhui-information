# 个人简历网站

一个采用报纸风格设计的个人简历网站，使用 Next.js 15 + React 19 + TypeScript + Tailwind CSS 构建。

## ✨ 特性

- 📰 **报纸风格 UI** - 独特的复古报纸排版设计
- 💬 **AI 聊天助手** - 集成智能对话功能
- 📱 **响应式设计** - 完美适配桌面端和移动端
- ⚡ **高性能** - 基于 Next.js 15 App Router
- 🎨 **Tailwind CSS** - 现代化的样式解决方案

## 🛠️ 技术栈

- **框架**: [Next.js 15](https://nextjs.org/)
- **前端**: [React 19](https://react.dev/)
- **语言**: [TypeScript](https://www.typescriptlang.org/)
- **样式**: [Tailwind CSS](https://tailwindcss.com/)
- **图标**: [Lucide React](https://lucide.dev/)
- **Markdown**: [React Markdown](https://remarkjs.github.io/react-markdown/)

## 📁 项目结构

```
resume/
├── app/                    # Next.js App Router
│   ├── api/               # API 路由
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 首页
├── components/            # React 组件
│   ├── Header.tsx         # 页头组件
│   ├── Hero.tsx           # 主要展示区
│   ├── Sidebar.tsx        # 侧边栏
│   ├── Articles.tsx       # 文章列表
│   ├── ChatBubble.tsx     # 聊天气泡
│   ├── ChatPanel.tsx      # 聊天面板
│   ├── GitHubContributions.tsx  # GitHub 贡献图
│   └── Footer.tsx         # 页脚组件
├── data/                  # 数据文件
│   ├── resume.ts          # 简历数据
│   └── knowledgeBase.ts   # 知识库数据
├── services/              # 服务层
└── public/                # 静态资源
```

## 🚀 快速开始

### 环境要求

- Node.js 18.17 或更高版本
- pnpm / npm / yarn

### 安装依赖

```bash
pnpm install
# 或
npm install
# 或
yarn install
```

### 启动开发服务器

```bash
pnpm dev
# 或
npm run dev
# 或
yarn dev
```

打开浏览器访问 [http://localhost:3000](http://localhost:3000) 查看效果。

### 构建生产版本

```bash
pnpm build
# 或
npm run build
```

### 启动生产服务器

```bash
pnpm start
# 或
npm run start
```

## 📝 自定义配置

### 修改简历内容

编辑 `data/resume.ts` 文件来更新你的个人简历信息。

### 修改知识库

编辑 `data/knowledgeBase.ts` 文件来配置 AI 聊天助手的知识库内容。

## 📄 许可证

MIT License
