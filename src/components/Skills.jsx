import { motion } from 'framer-motion';
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiFramer,
  SiRedux,
  SiGit,
  SiFigma,
  SiReactquery
} from 'react-icons/si';
import { FaCss3 } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { GiBearFace } from 'react-icons/gi';
import { FiBox } from 'react-icons/fi';
import { useLang } from '../context/LangContext.jsx';
import { skillsList } from '../i18n.js';

const iconMap = {
  React: { icon: SiReact, color: '#61DAFB' },
  JavaScript: { icon: SiJavascript, color: '#F7DF1E' },
  TypeScript: { icon: SiTypescript, color: '#3178C6' },
  TailwindCSS: { icon: SiTailwindcss, color: '#38BDF8' },
  'HTML5 / CSS3': { icon: SiHtml5, color: '#E34F26', icon2: FaCss3, color2: '#1572B6' },
  'Framer Motion': { icon: SiFramer, color: '#0055FF' },
  'Context API': { icon: FiBox, color: '#61DAFB' },
  'Redux-toolkit': { icon: SiRedux, color: '#764ABC' },
  'Tanstack Query': { icon:SiReactquery , color: '#06B6D4' },
  Zustand: { icon: GiBearFace, color: '#443E38' },
  'Git & GitHub & GitLab': { icon: SiGit, color: '#F05032' },
  'REST APIs': { icon: TbApi, color: '#06B6D4' },
  Figma: { icon: SiFigma, color: '#F24E1E' },
};

export default function Skills() {
  const { t } = useLang();
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center"
        >
          <span className="gradient-text">{t.skills.title}</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillsList.map((s, i) => {
            const meta = iconMap[s.name] || { icon: FiBox, color: '#6366f1' };
            const Icon = meta.icon;
            const Icon2 = meta.icon2;

            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex items-center justify-center w-10 h-10 rounded-xl text-xl shrink-0"
                      style={{ backgroundColor: `${meta.color}1A`, color: meta.color }}
                    >
                      <Icon />
                      {Icon2 && <Icon2 className="-ms-1" style={{ color: meta.color2 }} />}
                    </span>
                    <span className="font-semibold">{s.name}</span>
                  </div>
                  <span className="text-indigo-500 font-semibold">{s.level}%</span>
                </div>
                <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.05 }}
                    className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}