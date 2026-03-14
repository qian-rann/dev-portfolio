# Developer Portfolio | 个人作品集网站

[![Built with React](https://img.shields.io/badge/Built%20with-React-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Bundled%20with-Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

这是一个专为后端开发工程师量身打造的、现代化且高性能的个人作品集网站。采用 **React + TypeScript + Vite** 构建，具备清爽的设计风格和丝滑的交互体验。

## ✨ 核心特性

- 🎨 **清爽现代的 UI 设计**：以蓝绿色 (Teal) 为主色调，追求极简主义与高级感的平衡。
- 🌓 **深浅色模式切换**：支持用户手动切换或随系统主题自动调整，保护视力且极具科技感。
- 📱 **完美的响应式适配**：从桌面端到移动端，提供一致且流畅的浏览体验。
- 🚀 **高性能交互**：基于 Vite 构建，利用 Framer Motion 实现细腻的滚动渐显与悬浮动画。
- 📊 **数据驱动设计**：内容与 UI 分离，只需修改 `src/data/content.ts` 即可快速更新个人信息、技能和项目。
- 📧 **便捷联系**：集成了一键唤起邮件、GitHub 跳转及社交媒体入口。

## 🛠️ 技术栈

- **核心框架**: React 18
- **构建工具**: Vite 5
- **样式**: Tailwind CSS (原子化 CSS)
- **动画**: Framer Motion
- **图标**: Lucide React
- **语言**: TypeScript (严格类型检查)

## 📁 项目结构

```text
src/
├── components/
│   ├── layout/    # Navbar, Footer
│   ├── sections/  # Hero, About, Projects, Contact (核心板块)
│   └── ui/        # Button, Card, Badge (基础原子组件)
├── data/          # 静态内容配置文件 (Content as Data)
├── hooks/         # 自定义 React Hooks (如 useTheme)
├── types/         # TypeScript 类型定义
└── App.tsx        # 根组件
```

## 🚀 快速开始

### 1. 克隆并安装依赖
```bash
git clone https://github.com/qian-rann/dev-portfolio.git
cd dev-portfolio
npm install
```

### 2. 启动开发服务器
```bash
npm run dev
```
访问 `http://localhost:5173` 即可预览。

### 3. 构建生产版本
```bash
npm run build
```

## ⚙️ 自定义内容

该项目采用了内容分离的设计，你不需要修改任何 React 组件即可完成内容更新：

1. 打开 `src/data/content.ts`。
2. 修改 `personalInfo` (个人信息)、`skills` (技能数组)、`projects` (项目数组) 以及 `contactInfo` (联系方式)。
3. 保存后，网站内容将自动更新。

---

## 📄 开源协议

本项目采用 [MIT](LICENSE) 协议开源。
