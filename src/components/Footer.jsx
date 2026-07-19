import { useLang } from '../context/LangContext.jsx';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="py-8 px-6 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} — {t.footer}
    </footer>
  );
}
