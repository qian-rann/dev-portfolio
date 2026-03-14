import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { personalInfo } from '../../data/content';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* 背景装饰元素 */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-light/20 dark:bg-primary-dark/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-emerald-200/20 dark:bg-emerald-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* 左侧：文字内容 */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-primary font-semibold tracking-wide uppercase mb-4">
                你好，我是 {personalInfo.name} 👋
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-white leading-tight mb-6">
                {personalInfo.headline}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto md:mx-0">
                {personalInfo.shortBio}
              </p>
            </motion.div>

            {/* 行动呼吁按钮 (CTA) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
            >
              <a 
                href="#projects" 
                className="group flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto justify-center"
              >
                查看我的项目
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#about" 
                className="group flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium rounded-full border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary transition-all w-full sm:w-auto justify-center"
              >
                了解更多
              </a>
            </motion.div>
          </div>

          {/* 右侧：图片/3D元素展示 */}
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              {/* 图片外部的装饰环 */}
              <div className="absolute inset-0 border-2 border-primary/20 dark:border-primary/40 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 border-2 border-dashed border-primary-light/40 dark:border-primary-light/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              
              {/* 头像/图片本体 */}
              <img 
                src={personalInfo.avatarUrl} 
                alt="Profile" 
                className="absolute inset-8 w-[calc(100%-4rem)] h-[calc(100%-4rem)] object-cover rounded-full shadow-2xl ring-4 ring-white dark:ring-slate-800"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
