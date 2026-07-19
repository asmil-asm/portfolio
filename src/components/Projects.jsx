import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { useLang } from '../context/LangContext.jsx';

const gradients = [
  'from-indigo-500 to-pink-500',
  'from-cyan-400 to-indigo-500',
  'from-pink-500 to-orange-400',
];

export default function Projects() {
  const { t } = useLang();
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center"
        >
          <span className="gradient-text">{t.projects.title}</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {t.projects.items.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl overflow-hidden group"
            >
              <div className={`h-44 bg-gradient-to-br relative`}>
                <div className="absolute inset-0 flex items-center justify-center text-white text-5xl font-extrabold opacity-90">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-3 text-slate-500">  
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition"><FiExternalLink /></a>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition"><FiGithub /></a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
