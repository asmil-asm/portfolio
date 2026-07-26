import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi';
import { useLang } from '../context/LangContext.jsx';
import avatar from '../assets/avatar.jpg';
import image from '../assets/person.jpg'

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="home" className="relative pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto flex max-md:flex-col-reverse gap-12 items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-indigo-500 font-semibold tracking-wide mb-3">{t.hero.greeting}</p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            <span className="gradient-text">{t.hero.name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-600 dark:text-slate-300 mb-6">
            {t.hero.role}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg">{t.hero.tagline}</p>

          <div className="flex flex-wrap gap-3 mb-8">
            <a href="#contact" className="btn-primary">{t.hero.cta}</a>
            <a href="#projects" className="btn-ghost">{t.hero.ctaGhost}</a>
          </div>

          <div className="flex gap-4 text-xl text-slate-500 dark:text-slate-400">
            <a href="https://github.com/asmil-asm/Asmail-Shaheen.git" target="_blank" rel="noreferrer" className="hover:text-indigo-500 transition"><FiGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-indigo-500 transition"><FiLinkedin /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative animate-float">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-pink-500 to-cyan-400 blur-2xl opacity-60" />
            <div className="relative w-75 h-64 md:w-90 md:h-80 rounded-full p-1 bg-gradient-to-tr from-indigo-500 via-pink-500 to-cyan-400">
              <img
                src={image}
                alt="Person"
                className="w-full h-full rounded-full object-cover border-4 border-white dark:border-slate-950"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-2xl text-slate-400"
      >
        <FiArrowDown />
      </motion.a>
    </section>
  );
}
