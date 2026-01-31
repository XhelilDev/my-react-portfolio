import {  ChevronRight,Terminal,Github } from 'lucide-react';

export const Hero = ({ profileImg }) => (
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