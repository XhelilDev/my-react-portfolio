import React, { useState, useEffect } from 'react';
import { 
  Github, ExternalLink, Menu, X, Mail, ChevronRight, 
  Code2, ShoppingCart, Book, CheckSquare, Terminal, 
  Moon, Sun, Linkedin, Twitter 
} from 'lucide-react';

// --- NDRYSHIMI KRYESOR PËR FOTON TUAJ LOKALE (Lexoni me Kujdes) ---

// 1. PËR KËTË MJEDIS (Canvas):
// Përdorim një URL placeholder për të lejuar kompilimin pa gabime.
// MOS E NDRYSHONI KËTË LINJË KËTU.
// const profileImage = "https://placehold.co/320x320/22d3ee/ffffff?text=FOTO+JUAJ"; 


//2. PËR PROJEKTIN TUAJ LOKAL (VETËM KËTU):
//Ju duhet të përdorni dy linjat e mëposhtme në vend të asaj të mësipërme (duke fshirë URL-në placeholder):

import myLocalImage from './assets/my-profile.jpg'; // KJO E RREGULLON PROBLEMIN E PATH-it
const profileImage = myLocalImage; // Kjo i jep vlerën e saktë variablit tonë kryesor

//Në kodin e mëposhtëm, ne përdorim direkt variablin 'profileImage' të deklaruar më lart.


// --- DATA CONFIGURATION ---

const skillsData = [
  { name: "HTML5", color: "bg-orange-500" },
  { name: "CSS3", color: "bg-blue-500" },
  { name: "JavaScript", color: "bg-yellow-400" },
  { name: "React JS", color: "bg-cyan-400" },
  { name: "Tailwind CSS", "color": "bg-teal-400" },
  { name: "GitHub", color: "bg-gray-700 dark:bg-gray-600" },
];

const projectsData = [
  {
    id: 1,
    title: "Online Library",
    description: "A digital platform for book management created with React. Users can browse books, view details, and manage inventory. Demonstrates complex state management and component architecture.",
    tags: ["React", "CSS Modules", "API Integration"],
    icon: <Book size={24} className="text-cyan-600 dark:text-cyan-400" />,
    link: "https://github.com/XhelilDev/online-library-react",
    github: "https://github.com/XhelilDev/online-library-react"
  },
  {
    id: 2,
    title: "Todo List App",
    description: "Task management application featuring add, delete, and completion toggle functionalities. Fully responsive design using Tailwind CSS and persists data using Local Storage.",
    tags: ["React", "Tailwind CSS", "Local Storage"],
    icon: <CheckSquare size={24} className="text-teal-600 dark:text-teal-400" />,
    link: "https://xhelildev.github.io/react-todo-list-app/",
    github: "https://github.com/XhelilDev/react-todo-list-app"
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
    title: "HTML & CSS Collection",
    description: "A collection of my foundational projects including landing pages, static websites, and layout experiments using Flexbox and CSS Grid.",
    tags: ["HTML5", "CSS3", "Responsive Design"],
    icon: <Code2 size={24} className="text-orange-600 dark:text-orange-400" />,
    link: "https://xhelildev.github.io/Webdev-Akademi/",
    github: "https://github.com/XhelilDev/Webdev-Akademi"
  }
];

// --- SUB-COMPONENTS ---

const Navbar = ({ isMenuOpen, setIsMenuOpen, isDarkMode, toggleTheme }) => (
  <nav className="fixed w-full z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0 font-bold text-2xl text-cyan-600 dark:text-cyan-400 cursor-pointer">
          Xhelil Xhelili<span className="text-slate-800 dark:text-white"></span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-baseline space-x-6">
            {['Home', 'Skills', 'Projects'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-gray-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all border border-transparent dark:border-slate-700"
            aria-label="Toggle Theme"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a href="#contact" className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-md hover:shadow-lg">
            Contact Me
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-yellow-400 border border-transparent dark:border-slate-700"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 dark:text-slate-300 p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </div>

    {/* Mobile Menu Dropdown */}
    {isMenuOpen && (
      <div className="md:hidden bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-xl transition-colors duration-300">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsMenuOpen(false)} 
              className="text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    )}
  </nav>
);

const Hero = ({ profileImg }) => (
  <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
    <div className="md:w-1/2 space-y-6 text-center md:text-left">
      <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 text-sm font-medium border border-cyan-200 dark:border-cyan-500/20 transition-colors">
        <Terminal size={16} className="mr-2" /> Web Developer
      </div>
      <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900 dark:text-white transition-colors">
        Building Digital <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">Experiences</span> that matter.
      </h1>
      <p className="text-slate-600 dark:text-slate-400 text-lg max-w-lg mx-auto md:mx-0 transition-colors">
        Hi, I'm a passionate developer specializing in React, Tailwind CSS, and building modern, interactive web applications.
      </p>
      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 justify-center md:justify-start">
        <a href="#projects" className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center shadow-lg shadow-cyan-500/20">
          View Work <ChevronRight size={20} className="ml-1" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="border border-slate-300 dark:border-slate-600 hover:border-slate-400 text-slate-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center">
          <Github size={20} className="mr-2" /> GitHub
        </a>
      </div>
    </div>
    
    <div className="md:w-1/2 flex justify-center relative">
      <div className="absolute top-0 right-10 w-64 h-64 bg-cyan-400/30 rounded-full blur-3xl dark:bg-cyan-500/20 mix-blend-multiply dark:mix-blend-normal"></div>
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-blue-400/30 rounded-full blur-3xl dark:bg-blue-500/20 mix-blend-multiply dark:mix-blend-normal"></div>
      
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl transition-all">
            <img 
              src={profileImg} 
              alt="Profile" 
              className="w-full h-full object-cover object-[50%_20%] bg-slate-100 dark:bg-slate-700"
              // Shtimi i një funksioni për menaxhimin e gabimeve në rast se imazhi nuk ngarkohet
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/320x320/a1a1aa/ffffff?text=Placeholder" }}
            />
            <div className="absolute inset-0 bg-black/10 dark:bg-black/30 mix-blend-multiply rounded-full pointer-events-none transition-colors"></div>
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="py-20 bg-gray-50 dark:bg-slate-800/50 transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Technical Skills</h2>
        <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full"></div>
        <p className="mt-4 text-slate-600 dark:text-slate-400 transition-colors">The tools and technologies I use to bring ideas to life.</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {skillsData.map((skill, index) => (
          <div key={index} className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 p-6 rounded-xl flex flex-col items-center justify-center hover:border-cyan-500 dark:hover:border-cyan-500/50 shadow-sm hover:shadow-md transition-all group">
            <div className={`w-12 h-12 rounded-full ${skill.color} mb-4 flex items-center justify-center bg-opacity-20 text-white group-hover:scale-110 transition-transform duration-300`}>
              <div className={`w-3 h-3 rounded-full ${skill.color}`}></div>
            </div>
            <h3 className="font-semibold text-slate-800 dark:text-slate-200 transition-colors">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-20 transition-colors duration-300 bg-white dark:bg-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Featured Projects</h2>
        <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full"></div>
        <p className="mt-4 text-slate-600 dark:text-slate-400 transition-colors">A selection of my work, ranging from static HTML to dynamic React apps.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <div key={project.id} className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-700 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10 group flex flex-col h-full">
            <div className="p-8 flex-grow">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-gray-100 dark:bg-slate-700/50 rounded-lg group-hover:bg-cyan-500/10 transition-colors">
                  {project.icon}
                </div>
                <div className="flex space-x-3">
                  <a href={project.github} className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-white transition-colors" title="View Code">
                    <Github size={20} />
                  </a>
                  <a href={project.link} className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-white transition-colors" title="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed transition-colors">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-xs font-medium px-3 py-1 rounded-full bg-cyan-50 dark:bg-slate-700 text-cyan-700 dark:text-cyan-400 border border-cyan-100 dark:border-slate-600 transition-colors">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20 bg-gray-50 dark:bg-slate-800/50 transition-colors duration-300">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Get In Touch</h2>
        <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full"></div>
        <p className="mt-4 text-slate-600 dark:text-slate-400 transition-colors">Have a project idea or want to collaborate? Send me a message!</p>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-slate-700 shadow-xl transition-colors">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 transition-colors">Name</label>
              <input type="text" id="name" className="w-full bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 transition-colors">Email</label>
              <input type="email" id="email" className="w-full bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors" placeholder="email@example.com" />
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 transition-colors">Message</label>
            <textarea id="message" rows="4" className="w-full bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors" placeholder="Write your message here..."></textarea>
          </div>

          <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white font-bold py-4 rounded-lg transition-all transform hover:-translate-y-1 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Mail size={20} className="mr-2" /> Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
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