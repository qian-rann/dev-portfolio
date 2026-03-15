import { motion } from 'framer-motion';
import { Terminal, Wrench, Layout } from 'lucide-react';
import { personalInfo, skills } from '../../data/content';

export const About = () => {
  // 按类别过滤技能
  const coreSkills = skills.filter(skill => skill.category === 'core');
  const toolSkills = skills.filter(skill => skill.category === 'tools');
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* 模块标题 */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">关于我</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* 左侧：详细介绍 */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
              我的<span className="text-primary">开发哲学</span>
            </h3>
            <div className="prose text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              <p>{personalInfo.fullBio}</p>
              <p className="mt-4">
                在我看来，优秀的后端代码不仅要能够跑通业务，更要具备良好的可读性、可维护性以及在高并发场景下的健壮性。
              </p>
            </div>
            
            {/* 个人特质小卡片展示 */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 border-l-4 border-l-primary transition-colors">
                <p className="font-bold text-slate-800 dark:text-white">架构设计</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">高可用 / 微服务</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 border-l-4 border-l-primary-light transition-colors">
                <p className="font-bold text-slate-800 dark:text-white">性能优化</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">数据库 / 缓存</p>
              </div>
            </div>
          </motion.div>

          {/* 右侧：技能列表 */}
          <motion.div 
            className="lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* 核心技能组 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 transition-colors">
              <div className="flex items-center gap-2 mb-6">
                <Terminal className="w-5 h-5 text-primary" />
                <h4 className="text-xl font-bold text-slate-800 dark:text-white">核心开发栈</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {coreSkills.map(skill => (
                  <span 
                    key={skill.name} 
                    className="px-4 py-2 bg-primary/10 dark:bg-primary/20 text-primary-dark dark:text-primary-light font-medium rounded-lg hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-colors cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* 工具与基础设施 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 transition-colors">
              <div className="flex items-center gap-2 mb-6">
                <Wrench className="w-5 h-5 text-primary" />
                <h4 className="text-xl font-bold text-slate-800 dark:text-white">基础设施 & 工具</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {toolSkills.map(skill => (
                  <span 
                    key={skill.name} 
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-medium rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* 前端能力 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 transition-colors">
              <div className="flex items-center gap-2 mb-6">
                <Layout className="w-5 h-5 text-primary" />
                <h4 className="text-xl font-bold text-slate-800 dark:text-white">拓展技能 (前端)</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {frontendSkills.map(skill => (
                  <span 
                    key={skill.name} 
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-medium rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
