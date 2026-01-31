import { 
    ExternalLink, Menu, X, Mail, ChevronRight, 
     Code2, ShoppingCart, Book, CheckSquare, Terminal, 
     Moon, Sun,Github,Linkedin,Twitter
   } from 'lucide-react';
export const Footer = () => (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-slate-600 dark:text-slate-500 text-sm transition-colors">
          © {new Date().getFullYear()} Web Developer Portfolio. Built with React & Tailwind CSS.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors"><Github size={20} /></a>
          <a href="#" className="text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors"><Twitter size={20} /></a>
        </div>
      </div>
    </footer>
  );