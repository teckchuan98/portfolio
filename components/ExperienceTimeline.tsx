import React from 'react';
import { EXPERIENCES } from '../constants';
import { Briefcase, Calendar, Code2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
         <ScrollReveal width="100%">
           <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-500">Journey</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-indigo-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              A timeline of my career growth, key projects, and technical milestones.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line with Gradient */}
          <div className="absolute left-[20px] md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-indigo-500 to-slate-800 rounded-full opacity-30"></div>

          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className={`relative mb-16 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-start md:items-center w-full group`}>
              
              {/* Timeline Node */}
              <div className="absolute left-[22px] md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-900 border-4 border-primary-500 z-10 flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.5)] group-hover:scale-110 transition-transform duration-300">
                <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
              </div>

              {/* Spacer */}
              <div className="flex-1 w-full md:w-auto"></div>

              {/* Content Card */}
              <div className="flex-1 w-full pl-16 md:pl-0 md:px-12">
                <ScrollReveal 
                  className={`transform transition-all duration-500 ${index % 2 === 0 ? 'origin-left' : 'origin-right'}`}
                  delay={index * 100}
                  width="100%"
                >
                  <div className="glass-card p-8 rounded-2xl transition-all duration-300 group-hover:border-primary-500/30 group-hover:shadow-[0_0_30px_-5px_rgba(14,165,233,0.15)] relative overflow-hidden">
                    {/* Hover Glow Effect */}
                    <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl group-hover:bg-primary-500/20 transition-all duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">{exp.role}</h3>
                          <div className="flex items-center text-slate-300 gap-2 text-base mt-1 font-medium">
                            <Briefcase size={16} className="text-primary-500" />
                            <span>{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex items-center text-primary-300 text-xs font-bold font-mono bg-primary-950/50 px-4 py-1.5 rounded-full border border-primary-800/50 shadow-inner">
                          <Calendar size={12} className="mr-2" />
                          {exp.duration}
                        </div>
                      </div>
                      
                      <ul className="space-y-3 mb-6">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-slate-300 text-sm leading-relaxed flex items-start group-hover:text-slate-200 transition-colors">
                            <span className="mr-3 text-primary-500 mt-1.5 text-lg">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Chips */}
                      <div className="pt-4 border-t border-slate-700/50">
                        <div className="flex items-center gap-2 mb-3 text-xs text-slate-500 font-bold uppercase tracking-wider">
                          <Code2 size={12} />
                          Tech Stack
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.techStack.map((tech, i) => (
                            <span 
                              key={i} 
                              className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-medium rounded-md border border-slate-700 hover:border-primary-500/50 hover:text-primary-400 hover:bg-slate-800/80 transition-all cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

            </div>
          ))}
          
          {/* "Start" Node at the bottom */}
           <div className="absolute left-[20px] md:left-1/2 transform -translate-x-1/2 bottom-0 w-3 h-3 bg-slate-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;