import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiSend } from 'react-icons/fi';
import { useLang } from '../context/LangContext.jsx';

// TODO: replace with your own EmailJS credentials
// Sign up at https://www.emailjs.com — create a service + template,
// then paste the IDs and public key h
// ere.
const SERVICE_ID = 'service_oaasl98';
const TEMPLATE_ID = 'template_1ha9tv9';
const PUBLIC_KEY = '-8gkF6DTdaHN35ovD';

export default function Contact() {
  const { t } = useLang();
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setStatus('success');
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          <span className="gradient-text">{t.contact.title}</span>
        </motion.h2>
        <p className="text-slate-600 dark:text-slate-400 mb-10">{t.contact.subtitle}</p>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-6 md:p-8 text-start space-y-4"
        >
          <input
            required
            type="text"
            name="user_name"
            placeholder={t.contact.name}
            className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            required
            type="email"
            name="user_email"
            placeholder={t.contact.email}
            className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            required
            name="message"
            rows={5}
            placeholder={t.contact.message}
            className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button type="submit" disabled={status === 'sending'} className="btn-primary w-full">
            <FiSend /> {status === 'sending' ? t.contact.sending : t.contact.send}
          </button>

          {status === 'success' && <p className="text-green-500 text-center">{t.contact.success}</p>}
          {status === 'error' && <p className="text-red-500 text-center">{t.contact.error}</p>}
        </motion.form>
      </div>
    </section>
  );
}
