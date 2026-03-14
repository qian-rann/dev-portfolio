import { PersonalInfo, Project, Skill, ContactInfo } from '../types';

export const personalInfo: PersonalInfo = {
  name: "张三", // 请修改为你的名字
  headline: "专注于高效后端架构的开发者",
  shortBio: "热爱开源技术，擅长构建高可用、可扩展的后端服务系统。",
  fullBio: "我是一名拥有多年经验的后端开发工程师。我喜欢将复杂的业务逻辑转化为简洁、高效的代码。在日常开发中，我不仅关注代码质量，更注重系统的整体架构和性能优化。我相信优秀的技术可以驱动业务的快速增长。",
  avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop", // 占位图，后续可替换
};

export const skills: Skill[] = [
  { name: "Java", category: "core" },
  { name: "Spring Boot", category: "core" },
  { name: "Go", category: "core" },
  { name: "MySQL", category: "core" },
  { name: "Redis", category: "core" },
  { name: "Docker", category: "tools" },
  { name: "Kubernetes", category: "tools" },
  { name: "Git", category: "tools" },
  { name: "React", category: "frontend" }, // 因为你自己在做这个作品集，可以加上
  { name: "TypeScript", category: "frontend" },
];

export const projects: Project[] = [
  {
    id: "project-1",
    title: "高并发分布式电商后台系统",
    description: "基于 Spring Cloud 构建的微服务架构电商后台，支持高并发秒杀场景，使用 Redis 缓存和 RabbitMQ 进行消息削峰。",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop", // 替换为有效的编码/服务器主题图片
    tags: ["Java", "Spring Cloud", "Redis", "RabbitMQ"],
    githubUrl: "https://github.com/",
  },
  {
    id: "project-2",
    title: "轻量级高性能图床服务",
    description: "使用 Go 语言开发的轻量级图床服务，支持快速图片上传、WebP 自动转换和 CDN 分发拦截，单机 QPS 达 10k+。",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=800&auto=format&fit=crop", // 占位图
    tags: ["Go", "Gin", "Docker", "Nginx"],
    githubUrl: "https://github.com/",
    demoUrl: "https://demo.com",
  },
  {
    id: "project-3",
    title: "个人开发者作品集",
    description: "一个现代化、响应式的个人作品集网站，采用蓝绿色调的清爽设计，通过 Framer Motion 实现丝滑的交互动画。",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop", // 占位图
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/",
  }
];

export const contactInfo: ContactInfo = {
  email: "developer@example.com", // 请修改为你的邮箱
  github: "https://github.com/",
  blog: "https://blog.example.com", // 可选
};

// 导航栏配置数组，方便后续渲染
export const navLinks = [
  { name: "首页", href: "#home" },
  { name: "关于我", href: "#about" },
  { name: "项目", href: "#projects" },
  { name: "联系方式", href: "#contact" },
];
