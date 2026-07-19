// Translations for the portfolio (Arabic & English)
import image1 from "./assets/E-commerce.png";
import image2 from "./assets/hotels.png";
import image3 from "./assets/website-university.png";
import image4 from "./assets/Dashboard.png";
export const translations = {
  en: {
    nav: { home: 'Home', about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
    hero: {
      greeting: "Hi, I'm",
      name: 'Asmail Shaheen',
      role: 'Front-End Developer',
      tagline: 'I craft fast, accessible and beautiful web experiences with React & modern tooling.',
      cta: 'Get in touch',
      ctaGhost: 'View projects',
    },
    about: {
      title: 'About me',
      body: "I'm a passionate front-end developer focused on building delightful user interfaces. I love clean code, smooth animations and pixel-perfect designs that work everywhere.",
      experience: 'Years of experience',
      projects: 'Projects shipped',
      clients: 'Happy clients',
    },
    skills: { title: 'Skills & Tools' },
    projects: {
      title: 'Selected Projects',
      view: 'View',
      items: [
 { 
      name: 'Hotel Booking Interface', 
      desc: 'Fully responsive booking platform with Context API for global state, dynamic search, property grid, and room selection flow.', 
      tags: ['React', 'Tailwind', 'Context API'],
      link: 'https://asmil-asm.github.io/Booking-Hotels/',
      img: image2,
      github:'https://github.com/asmil-asm/Booking-Hotels.git'
    },     
   { 
      name: 'E-Commerce Platform', 
      desc: 'Full-featured e-commerce app with cart/wishlist management, product filtering, search, and localStorage persistence via Context API.', 
      tags: ['React', 'Tailwind', 'REST API'],
      link: 'https://asmil-asm.github.io/e-commerce/',
      img: image1,
      github:'https://github.com/asmil-asm/e-commerce.git'
    },
{ 
      name: 'University Website', 
      desc: 'Public university website with dynamic search, filtering, and college/department management.', 
      tags: ['React', 'Tailwind', 'Context API'],
      link: 'https://web-university.netlify.app/',
      img: image3,
      github:'https://github.com/asmil-asm/University-website.git'

    },
     { 
      name: 'University Admin Dashboard', 
      desc: 'Admin dashboard with full CRUD operations, interactive tables, sorting/pagination, forms with validation, and real-time charts.', 
      tags: ['React', 'Tailwind', 'Recharts', 'React Hook Form'],
      link: 'https://dashboard2-university.netlify.app/',
      img: image4 ,
      github:'https://github.com/asmil-asm/Dashboard-University.git'
    },
        ],
    },
    contact: {
      title: 'Let’s work together',
      subtitle: 'Have a project in mind? Send me a message.',
      name: 'Your name',
      email: 'Your email',
      message: 'Your message',
      send: 'Send message',
      sending: 'Sending…',
      success: 'Message sent successfully!',
      error: 'Something went wrong. Please try again.',
    },
    footer: 'Built with React, Tailwind & Framer Motion.',
  },
  ar: {
    nav: { home: 'الرئيسية', about: 'نبذة', skills: 'المهارات', projects: 'المشاريع', contact: 'تواصل' },
    hero: {
      greeting: 'مرحبًا، أنا',
      name: 'اسماعيل شاهين',
      role: 'مطوّر واجهات أمامية',
      tagline: 'أصمّم وأطوّر واجهات ويب سريعة وجميلة وسهلة الاستخدام باستخدام React وأحدث الأدوات.',
      cta: 'تواصل معي',
      ctaGhost: 'استعرض المشاريع',
    },
    about: {
      title: 'نبذة عني',
      body: 'مطوّر واجهات أمامية شغوف ببناء تجارب مستخدم رائعة. أحبّ الكود النظيف والحركات السلسة والتصاميم الدقيقة التي تعمل على جميع الأجهزة.',
      experience: 'سنوات الخبرة',
      projects: 'مشاريع منجزة',
      clients: 'عملاء سعداء',
    },
    skills: { title: 'المهارات والأدوات' },
    projects: {
      title: 'مشاريع مختارة',
      view: 'عرض',
   
  "items": [
    {
      "name": "واجهة حجز الفنادق",
      "desc": "منصة حجز متجاوبة بالكامل، تستخدم Context API لإدارة الحالة العامة، مع بحث ديناميكي، وشبكة عرض للعقارات، وتدفق لاختيار الغرف.",
      "tags": ["React", "Tailwind", "Context API"],
      "link": "https://asmil-asm.github.io/Booking-Hotels/",
      "img": "image2",
            github:'https://github.com/asmil-asm/Booking-Hotels.git'

    },
    {
      "name": "منصة التجارة الإلكترونية",
      "desc": "تطبيق تجارة إلكترونية متكامل يشمل إدارة سلة التسوق وقائمة الرغبات، وتصفية المنتجات، والبحث، وحفظ البيانات محلياً باستخدام localStorage عبر Context API.",
      "tags": ["React", "Tailwind", "REST API"],
      "link": "https://asmil-asm.github.io/e-commerce/",
      "img": "image1",
            github:'https://github.com/asmil-asm/e-commerce.git'

    },
    {
      "name": "موقع الجامعة",
      "desc": "موقع رسمي لجامعة حكومية يشمل بحثاً ديناميكياً، وتصفية، وإدارة الكليات والأقسام.",
      "tags": ["React", "Tailwind", "Context API"],
      "link": "https://web-university.netlify.app/",
      "img": "image3",
            github:'https://github.com/asmil-asm/University-website.git'

    },
    {
      "name": "لوحة تحكم إدارة الجامعة",
      "desc": "لوحة تحكم إدارية تدعم عمليات الإضافة والتعديل والحذف (CRUD)، وجداول تفاعلية، وترتيب وتصفح صفحات، ونماذج مع التحقق من الصحة، ورسوم بيانية لحظية.",
      "tags": ["React", "Tailwind", "Recharts", "React Hook Form"],
      "link": "https://dashboard2-university.netlify.app/",
      "img": "image4",
         github:'https://github.com/asmil-asm/Dashboard-University.git'


    }
  ],
    },
    contact: {
      title: 'هيا نعمل معًا',
      subtitle: 'هل لديك مشروع في بالك؟ أرسل لي رسالة.',
      name: 'اسمك',
      email: 'بريدك الإلكتروني',
      message: 'رسالتك',
      send: 'إرسال الرسالة',
      sending: 'جارٍ الإرسال…',
      success: 'تم إرسال الرسالة بنجاح!',
      error: 'حدث خطأ ما. حاول مرة أخرى.',
    },
    footer: 'صُنع باستخدام React وTailwind وFramer Motion.',
  },
};

export const skillsList = [
  { name: 'React', level: 95 },
  { name: 'JavaScript', level: 92 },
  { name: 'TypeScript', level: 92 },
  { name: 'TailwindCSS', level: 94 },
  { name: 'HTML5 / CSS3', level: 96 },
  { name: 'Framer Motion', level: 85 },
  {name: 'Context API', level: 95 },
  { name: 'Redux', level: 80 },
{ name: 'Zustand', level: 88 },
  { name: 'Git & GitHub & GitLab', level: 88 },
  { name: 'REST APIs', level: 86 },
  { name: 'Figma', level: 80 },
];
