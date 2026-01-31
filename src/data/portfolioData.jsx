import { 
    Github, ExternalLink, Menu, X, Mail, ChevronRight, 
    Code2, ShoppingCart, Book, CheckSquare, Terminal, 
    Moon, Sun, Linkedin, Twitter ,Rocket
  } from 'lucide-react';


export const skillsData = [
    { name: "HTML5", color: "bg-orange-500" },
    { name: "CSS3", color: "bg-blue-500" },
    { name: "JavaScript", color: "bg-yellow-400" },
    { name: "React JS", color: "bg-cyan-400" },
    { name: "Tailwind CSS", "color": "bg-teal-400" },
    { name: "GitHub", color: "bg-gray-700 dark:bg-gray-600" },
  ];
  
 export const projectsData = [
  {
    id: 1,
    title: "HTML & CSS Collection",
    description: "A collection of my foundational projects including landing pages, static websites, and layout experiments using Flexbox and CSS Grid.",
    tags: ["HTML5", "CSS3", "Responsive Design"],
    icon: <Code2 size={24} className="text-orange-600 dark:text-orange-400" />,
    link: "https://xhelildev.github.io/Webdev-Akademi/",
    github: "https://github.com/XhelilDev/Webdev-Akademi"
  },
  {
    id: 2,
    title: "Modern Landing Page",
    description: "A high-performance, SEO-optimized landing page with a focus on modern UI/UX. Built for speed using Vite and styled with a bold, mobile-first responsive design.",
    tags: ["Vite", "React 18", "Tailwind CSS", "SEO", "Responsive"],
    // Përdorim 'Rocket' për të simbolizuar shpejtësinë dhe teknologjinë moderne
    icon: <Rocket size={24} className="text-purple-600 dark:text-purple-400" />,
    link: "https://coachflow-bay.vercel.app/", // Zëvendësoje me linkun tënd live
    github: "https://github.com/XhelilDev/coachflow-landing" // Zëvendësoje me linkun tënd në GitHub
  },
    {
      id: 3,
      title: "JS Shopping Cart",
      description: "Functional shopping cart logic built with Vanilla JavaScript. Features dynamic price calculation, item removal, and DOM manipulation without any frameworks.",
      tags: ["JavaScript", "CSS3", "DOM Manipulation"],
      icon: <ShoppingCart size={24} className="text-yellow-600 dark:text-yellow-400" />,
      link: "https://xhelildev.github.io/shoping-cart/",
      github: "https://github.com/XhelilDev/shoping-cart"
    },
  {
      id: 4,
      title: "Appointment-Manager ",
      description: "A simple appointment and attendance management web application built with React",
      tags: ["React","Context API", "Tailwind CSS", "Local Storage"],
      icon: <Book size={24} className="text-cyan-600 dark:text-cyan-400" />,
      link: "https://xhelildev.github.io/appointment-manager/",
      github: "https://github.com/XhelilDev/appointment-manager"
    }
  ];