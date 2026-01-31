import { 
    ExternalLink, Menu, X, Mail, ChevronRight, 
     Code2, ShoppingCart, Book, CheckSquare, Terminal, 
     Moon, Sun,Github,Linkedin,Twitter
   } from 'lucide-react';
import { projectsData } from "../data/portfolioData";

export const Projects = () => (
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