import { motion } from 'framer-motion';
import { FiMoon, FiSun, FiGlobe } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext.jsx';
import { useLang } from '../context/LangContext.jsx';

export default function Navbar() {
  const { theme, toggle: toggleTheme } = useTheme();
  const { lang, toggle: toggleLang, t } = useLang();

  const links = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <nav className="glass mx-auto mt-4 max-w-6xl rounded-full px-5 py-3 flex items-center justify-between">
        <a href="#home" className="font-extrabold text-lg gradient-text">{'<DEV/>'}</a>

        <ul className="hidden md:flex items-center gap-7 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-indigo-500 transition">{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button onClick={toggleLang} className="p-2 rounded-full hover:bg-slate-200/60 dark:hover:bg-slate-700/60 transition flex items-center gap-1 text-sm font-semibold">
            <FiGlobe /> {lang === 'en' ? 'AR' : 'EN'}
          </button>
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-200/60 dark:hover:bg-slate-700/60 transition">
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
