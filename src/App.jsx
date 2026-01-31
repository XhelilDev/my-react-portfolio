import React, { useState, useEffect } from 'react';
import { 
 ExternalLink, Menu, X, Mail, ChevronRight, 
  Code2, ShoppingCart, Book, CheckSquare, Terminal, 
  Moon, Sun,Github,Linkedin,Twitter
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Skills } from './components/Skills.';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';



import myLocalImage from './assets/my-profile.jpg'; // KJO E RREGULLON PROBLEMIN E PATH-it
const profileImage = myLocalImage; // Kjo i jep vlerën e saktë variablit tonë kryesor


// --- MAIN APPLICATION COMPONENT ---

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // FUNKSIONI I RI: Vendos klasën 'dark' menjëherë për të parandaluar FOUC-un
  const getInitialThemeState = () => {
      // Vendos Dark Mode si default (true)
      const defaultDark = true; 
      
      // Aplikimi sinkron i klasës 'dark' para renderimit të parë të React
      if (defaultDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return defaultDark;
  };

  // Përdorimi i funksionit për inicializimin e state-it
  const [isDarkMode, setIsDarkMode] = useState(getInitialThemeState);

  // useEffect tani shërben vetëm për të menaxhuar ndërrimin pas klikimit
  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans selection:bg-cyan-500 selection:text-white transition-colors duration-300">
      <Navbar 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />

      <main>
        <Hero profileImg={profileImage} />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;