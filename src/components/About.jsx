import { motion } from 'framer-motion';
import { useLang } from '../context/LangContext.jsx';

const stats = [
  { key: 'experience', value: '1+' },
  { key: 'projects', value: '5+' },
  { key: 'clients', value: '10+' },
];

export default function About() {
  const { t } = useLang();
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          <span className="gradient-text">{t.about.title}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-12"
        >
          {t.about.body}
        </motion.p>

        <div className="grid grid-cols-3 gap-4 md:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <div className="text-3xl md:text-4xl font-extrabold gradient-text">{s.value}</div>
              <div className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-2">{t.about[s.key]}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
