import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMoon, FiSun, FiGlobe, FiDownload, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext.jsx';
import { useLang } from '../context/LangContext.jsx';
import CV from '../assets/cv.pdf';

export default function Navbar() {
  const { theme, toggle: toggleTheme } = useTheme();
  const { lang, toggle: toggleLang, t } = useLang();
  const [open, setOpen] = useState(false);

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
          <a
            href={CV}
            download
              target="_blank"

            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white
                       bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                       shadow-md shadow-indigo-500/30 hover:shadow-pink-500/40
                       transition-all duration-300 hover:-translate-y-0.5"
          >
            <FiDownload /> {t.nav.cv}
          </a>

          <button onClick={toggleLang} className="p-2 rounded-full hover:bg-slate-200/60 dark:hover:bg-slate-700/60 transition flex items-center gap-1 text-sm font-semibold">
            <FiGlobe /> {lang === 'en' ? 'AR' : 'EN'}
          </button>
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-200/60 dark:hover:bg-slate-700/60 transition">
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden p-2 rounded-full hover:bg-slate-200/60 dark:hover:bg-slate-700/60 transition"
            aria-label="Toggle menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="glass md:hidden mx-4 mt-2 rounded-2xl p-4 flex flex-col gap-3 text-sm font-medium"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="hover:text-indigo-500 transition"
              >
                {l.label}
              </a>
            ))}
            <a
              href={CV}
              download
                target="_blank"

              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white
                         bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            >
              <FiDownload /> {t.nav.cv}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}