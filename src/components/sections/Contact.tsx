import { motion } from 'framer-motion';
import { Mail, Github, BookOpen, MapPin, Send } from 'lucide-react';
import { contactInfo } from '../../data/content';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden transition-colors duration-300">
      {/* 底部装饰背景 */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* 模块标题 */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">联系我</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
          <p className="text-slate-500 dark:text-slate-400 mt-6 max-w-2xl mx-auto">
            如果你有正在寻找开发者的项目，或者只是想探讨技术问题，我的收件箱始终为你敞开！
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
          
          {/* 左侧：联系信息卡片 */}
          <motion.div 
            className="flex-1 bg-white dark:bg-slate-800 p-8 md:p-10 rounded-3xl shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 transition-colors"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8">联系方式</h3>
            
            <div className="space-y-6">
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-4 group p-4 -ml-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light rounded-full group-hover:bg-primary group-hover:text-white dark:group-hover:bg-primary dark:group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">电子邮箱</p>
                  <p className="text-lg text-slate-800 dark:text-white font-medium group-hover:text-primary dark:group-hover:text-primary transition-colors">{contactInfo.email}</p>
                </div>
              </a>

              <a 
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group p-4 -ml-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light rounded-full group-hover:bg-primary group-hover:text-white dark:group-hover:bg-primary dark:group-hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">GitHub</p>
                  <p className="text-lg text-slate-800 dark:text-white font-medium group-hover:text-primary dark:group-hover:text-primary transition-colors">github.com</p>
                </div>
              </a>

              {contactInfo.blog && (
                <a 
                  href={contactInfo.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group p-4 -ml-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light rounded-full group-hover:bg-primary group-hover:text-white dark:group-hover:bg-primary dark:group-hover:text-white transition-colors">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">技术博客</p>
                    <p className="text-lg text-slate-800 dark:text-white font-medium group-hover:text-primary dark:group-hover:text-primary transition-colors">访问我的博客</p>
                  </div>
                </a>
              )}

              <div className="flex items-center gap-4 p-4 -ml-4 rounded-xl">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light rounded-full">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">所在地区</p>
                  <p className="text-lg text-slate-800 dark:text-white font-medium">ShenZhen / China</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 右侧：快速发送邮件按钮 (视觉引导区) */}
          <motion.div 
            className="flex-1 flex flex-col justify-center items-center p-8 text-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-xl shadow-primary/10 dark:shadow-none mb-8 border border-slate-100 dark:border-slate-700 transition-colors">
              <Send className="w-10 h-10 text-primary ml-1" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">准备好开始了？</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              点击下方按钮，直接通过你的默认邮件客户端与我取得联系。我通常会在 24 小时内回复。
            </p>
            <a 
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all hover:shadow-lg hover:-translate-y-1"
            >
              发送电子邮件
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// 本地小组件补充图标
const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);
