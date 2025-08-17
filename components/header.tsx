"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-gray-700/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              {theme === 'dark' ? (
                <Image src="/favicon.png" alt="FiveAtech" width={40} height={40} className='rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300' />
              ) : (
                <Image src="/faviconr.png" alt="FiveAtech" width={40} height={40} className='rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300' />
              )}
            </motion.div>
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              scrolled ? 'text-gray-900 dark:text-white' : 'text-white'
            } group-hover:text-blue-600`}>
              FiveAtech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 group ${
                    pathname === item.href
                      ? scrolled
                        ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400'
                        : 'text-yellow-300 bg-white/10'
                      : scrolled
                        ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute inset-0 rounded-lg ${
                        scrolled 
                          ? 'bg-blue-100 dark:bg-blue-900/30' 
                          : 'bg-white/20'
                      }`}
                      style={{ zIndex: -1 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            
            {mounted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleTheme}
                  className={`h-10 w-10 p-0 rounded-full transition-all duration-300 hover:scale-110 ${
                    scrolled
                      ? 'hover:bg-gray-100 dark:hover:bg-gray-800'
                      : 'hover:bg-white/10'
                  }`}
                >
                  <motion.div
                    initial={false}
                    animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {theme === 'dark' ? (
                      <Sun className={`h-5 w-5 ${scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'}`} />
                    ) : (
                      <Moon className={`h-5 w-5 ${scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'}`} />
                    )}
                  </motion.div>
                </Button>
              </motion.div>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {mounted && (
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className={`h-10 w-10 p-0 rounded-full transition-all duration-300 ${
                  scrolled
                    ? 'hover:bg-gray-100 dark:hover:bg-gray-800'
                    : 'hover:bg-white/10'
                }`}
              >
                {theme === 'dark' ? (
                  <Sun className={`h-5 w-5 ${scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'}`} />
                ) : (
                  <Moon className={`h-5 w-5 ${scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'}`} />
                )}
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={`h-10 w-10 p-0 rounded-full transition-all duration-300 ${
                scrolled
                  ? 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  : 'hover:bg-white/10'
              }`}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <X className={`h-5 w-5 ${scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'}`} />
                ) : (
                  <Menu className={`h-5 w-5 ${scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'}`} />
                )}
              </motion.div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-700/50"
          >
            <div className="container mx-auto px-4 py-6 space-y-2">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-lg font-semibold rounded-xl transition-all duration-300 ${
                      pathname === item.href
                        ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 shadow-lg'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}