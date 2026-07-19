# Front-End Developer Portfolio

A modern, animated portfolio built with **React + Vite + JavaScript** (no TypeScript).

## ✨ Features
- ⚡ Vite + React 18
- 🎨 TailwindCSS with gradient design system
- 🎬 Framer Motion animations
- 🌙 Dark / Light mode (with system preference + localStorage)
- 🌍 Arabic & English with full RTL support
- ✉️ Working contact form via EmailJS
- 📱 Fully responsive

## 🚀 Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## ✉️ Configure EmailJS

Open `src/components/Contact.jsx` and replace:

```js
const SERVICE_ID = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
```

with your own credentials from https://www.emailjs.com.

Template variables expected: `user_name`, `user_email`, `message`.

## 🖼️ Customize
- Replace `src/assets/avatar.jpg` with your own photo.
- Edit texts in `src/i18n.js` (both `en` and `ar`).
- Edit skills in `src/i18n.js` → `skillsList`.
- Tweak colors in `tailwind.config.js` and `src/index.css`.

## 📦 Build for production

```bash
npm run build
npm run preview
```
