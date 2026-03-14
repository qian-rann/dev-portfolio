# 技术设计文档 (TDD)：个人作品集网站

## 1. 项目概述
本项目是一个响应式的单页应用 (SPA)，用于展示后端开发者的个人作品、技能和联系方式。核心目标是实现高性能、易维护且具备高级感的视觉效果。

## 2. 技术栈选择
*   **构建工具**: [Vite](https://vitejs.dev/) (极速的热更新与构建体验)
*   **前端框架**: [React 18](https://react.dev/) (基于 Hook 的组件化开发)
*   **编程语言**: [TypeScript](https://www.typescriptlang.org/) (增强代码健壮性与类型安全)
*   **样式处理**: [Tailwind CSS](https://tailwindcss.com/) (原子化 CSS，便于快速实现蓝绿色调与响应式设计)
*   **动画库**: [Framer Motion](https://www.framer.com/motion/) (实现高级感的过渡动画)
*   **图标库**: [Lucide React](https://lucide.dev/) (简洁、现代的图标集)

---

## 3. 核心架构设计

### 3.1 目录结构
```text
src/
├── assets/             # 静态资源（图片、字体）
├── components/         # 通用 UI 组件
│   ├── layout/         # 布局组件（Navbar, Footer）
│   ├── sections/       # 页面各大板块（Hero, About, Projects, Contact）
│   └── ui/             # 基础原子组件（Button, Card, Badge）
├── data/               # 静态内容配置文件 (Content as Data)
├── hooks/              # 自定义 React Hooks
├── styles/             # 全局样式与 Tailwind 配置
├── types/              # TypeScript 类型定义
└── App.tsx             # 根组件与页面组合
```

### 3.2 数据驱动设计
为了方便后续维护（如更新项目或修改简介），建议将所有文本内容抽离到 `src/data/` 目录下的配置文件中。

```typescript:src/types/index.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface Skill {
  name: string;
  icon?: string;
  category: 'core' | 'tools';
}
```

---

## 4. 关键模块设计

### 4.1 视觉风格实现 (Tailwind CSS)
在 `tailwind.config.js` 中定义自定义色值以匹配“蓝绿色”主调：
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#5eead4', // Teal 300
          DEFAULT: '#14b8a6', // Teal 500
          dark: '#0f766e', // Teal 700
        },
        background: '#f8fafc',
        surface: '#ffffff',
      },
    },
  },
}
```

### 4.2 动画与交互 (Framer Motion)
为“高级感”定制进入动画：
*   **渐显 + 位移**: 页面各板块在滚动进入视口时触发。
*   **悬浮反馈**: 项目卡片 `whileHover={{ scale: 1.02, translateY: -5 }}`。

### 4.3 响应式导航
*   **PC 端**: 顶部固定透明导航栏，随滚动改变背景色。
*   **移动端**: 右上角汉堡菜单，侧边抽屉式导航。

---

## 5. 功能实现细节

### 5.1 平滑滚动
利用 CSS 原生属性 `scroll-behavior: smooth`，配合 React 的 `id` 锚点链接实现：
```html
<nav>
  <a href="#projects">项目展示</a>
</nav>
<section id="projects">...</section>
```

### 5.2 项目卡片组件 (ProjectCard)
*   使用 `aspect-video` 保持图片比例统一。
*   技术栈标签使用 `Badge` 组件。
*   利用 CSS 遮罩或 `group-hover` 实现图片上的链接覆盖层。

### 5.3 暗黑模式 (Dark Mode)
通过 Tailwind 的 `dark:` 类实现。利用 `localStorage` 存储用户偏好，并结合 `useEffect` 在根节点切换 `.dark` 类名。

---

## 6. 性能与部署

### 6.1 性能优化
*   **图片优化**: 使用 WebP 格式，并利用 Vite 的插件进行构建时压缩。
*   **按需加载**: 对非首屏渲染的板块（如 Contact）可考虑使用 `React.lazy` 进行代码拆分。

### 6.2 部署流程
*   **平台**: 推荐使用 Vercel 或 Cloudflare Pages（支持直接关联 GitHub 自动部署）。
*   **CI/CD**: 每次 Push 到 main 分支时自动触发 Lint 检查与 Production Build。

---

## 7. 待办事项 (Next Steps)
1.  初始化 Vite 项目并配置 TypeScript 和 Tailwind CSS。
2.  在 `src/data/` 中准备好个人项目和技能的 JSON 数据。
3.  实现基础布局（Navbar/Footer）。
4.  逐个开发 Section 组件（Hero -> About -> Projects -> Contact）。
5.  注入 Framer Motion 动画提升交互质感。

---
