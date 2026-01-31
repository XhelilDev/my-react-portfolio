import { skillsData } from "../data/portfolioData";
export const Skills = () => (
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