import { useState, useEffect } from 'react';
import { Menu, X, Code2, Moon, Sun } from 'lucide-react';
import { navLinks } from '../../data/content';
import { useTheme } from '../../hooks/useTheme';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // 监听滚动事件，改变导航栏背景
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo / 品牌名 */}
        <a href="#home" className="flex items-center gap-2 group">
          <Code2 className="w-8 h-8 text-primary group-hover:text-primary-light transition-colors" />
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-xl tracking-tight text-slate-800 dark:text-white">
              Dev<span className="text-primary">Portfolio</span>
            </span>
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400 hidden sm:inline-block">
              | 个人作品集
            </span>
          </div>
        </a>

        {/* 桌面端导航 */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          {/* 深浅色模式切换按钮 */}
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <a 
            href="#contact" 
            className="px-5 py-2 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary-dark transition-colors shadow-sm hover:shadow"
          >
            与我联系
          </a>
        </nav>

        {/* 移动端控件区 */}
        <div className="flex items-center gap-4 md:hidden">
          {/* 移动端深浅色切换 */}
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-500 dark:text-slate-400"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          {/* 移动端菜单按钮 */}
          <button 
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 移动端下拉菜单 */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-lg border-t border-slate-100 dark:border-slate-800 py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary py-2"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
