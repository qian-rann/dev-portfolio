import React from 'react';
import { Github, Mail, Heart, Users, Eye } from 'lucide-react';
import { contactInfo, personalInfo } from '../../data/content';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* 左侧：版权信息 */}
        <div className="text-slate-500 dark:text-slate-400 text-sm flex flex-col items-center md:items-start gap-1">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-rose-500 fill-current" /> using React & Tailwind
          </p>
        </div>

        {/* 中间：访问量统计 */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-slate-400 dark:text-slate-500 text-sm">
          <span id="busuanzi_container_site_uv" className="flex items-center gap-2" style={{ display: 'none' }}>
            <Users className="w-4 h-4" />
            本站访客数: <span id="busuanzi_value_site_uv" className="font-medium text-slate-600 dark:text-slate-300"></span>
          </span>
          <span id="busuanzi_container_site_pv" className="flex items-center gap-2" style={{ display: 'none' }}>
            <Eye className="w-4 h-4" />
            本站总访问量: <span id="busuanzi_value_site_pv" className="font-medium text-slate-600 dark:text-slate-300"></span>
          </span>
        </div>

        {/* 右侧：社交链接 */}
        <div className="flex items-center gap-4">
          <a 
            href={contactInfo.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-primary dark:hover:text-primary hover:bg-primary-light/10 rounded-full transition-all"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href={`mailto:${contactInfo.email}`}
            className="p-2 text-slate-400 hover:text-primary dark:hover:text-primary hover:bg-primary-light/10 rounded-full transition-all"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

      </div>
    </footer>
  );
};
