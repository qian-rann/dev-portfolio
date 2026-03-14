# AGENTS.md：AI 开发规范与指令

## 1. 项目背景与目标
*   **项目名称**: 个人作品集网站 (Personal Portfolio)
*   **目标**: 为后端开发人员创建一个清爽、现代化、具备“高级感”的单页作品集应用。
*   **核心审美**: 蓝绿色调 (Teal/Aqua)、大量留白、平滑动画。

## 2. 技术栈标准
*   **核心框架**: React 18 + TypeScript + Vite
*   **样式**: Tailwind CSS (原子化类优先)
*   **动画**: Framer Motion (用于板块进入和交互反馈)
*   **图标**: Lucide React
*   **类型安全**: 所有组件属性 (Props) 和数据结构必须定义 TypeScript 接口。

## 3. 目录结构规范
AI 在创建新文件时可以参考以下结构：
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

## 4. 开发准则 (AI 指令)
1.  **数据驱动**: 禁止在组件内硬编码长文本。请先在 `src/data/` 中定义数据，再在组件中引用。
2.  **响应式优先**: 始终使用 Tailwind 的响应式前缀 (`md:`, `lg:`) 确保移动端体验。
3.  **视觉统一**: 
    *   主色调使用 `primary` (Teal-500)。
    *   项目卡片统一使用 `aspect-video` 比例。
    *   按钮和卡片应带有 `rounded-xl` 或 `rounded-2xl` 的圆角。
4.  **交互增强**:
    *   板块进入视口时使用 Framer Motion 的 `whileInView` 动画。
    *   所有交互元素 (Button, Link) 必须有明显的 `hover` 状态。
5.  **Clean Code**:
    *   优先使用函数式组件和 Hooks。
    *   逻辑复杂的子模块应拆分为更小的子组件。

## 5. 常用配置参考
*   **自定义颜色**: `primary: #14b8a6` (Teal-500)。
*   **平滑滚动**: 全局应用 `scroll-behavior: smooth`。
*   **图片规范**: 优先使用 WebP 格式，确保预览图比例一致。

## 6. 注意事项
- 不要过度设计
- 注意性能优化
- 确保所有链接可点击

---
