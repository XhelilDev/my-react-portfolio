import { 
    ExternalLink, Menu, X, Mail, ChevronRight, 
     Code2, ShoppingCart, Book, CheckSquare, Terminal, 
     Moon, Sun,Github,Linkedin,Twitter
   } from 'lucide-react';

export const Contact = () => (
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