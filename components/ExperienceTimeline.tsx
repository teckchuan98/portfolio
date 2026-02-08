import React from 'react';
import { EXPERIENCES } from '../constants';
import { Briefcase, Calendar, Code2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 md:py-24 relative overflow-hidden bg-slate-950">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
         <ScrollReveal width="100%">
           <div className="text-center mb-10 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-500">Journey</span>
            </h2>
            <div className="w-16 sm:w-24 h-1.5 bg-gradient-to-r from-primary-500 to-indigo-500 mx-auto rounded-full mb-4 sm:mb-6"></div>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
              A timeline of my career growth, key projects, and technical milestones.
            </p>
          </div>
        </ScrollReveal>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Horizontal scrollable container */}
          <div className="overflow-x-auto pb-6 sm:pb-8 hide-scrollbar">
            <div className="flex items-start gap-4 sm:gap-6 md:gap-8 min-w-max px-2 sm:px-4">
              {[...EXPERIENCES].reverse().map((exp, index) => (
                <div key={exp.id} className="relative flex flex-col items-center w-72 sm:w-80 group">

                  {/* Timeline Node */}
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-900 border-2 sm:border-4 border-primary-500 z-10 flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.5)] group-hover:scale-110 transition-transform duration-300 mb-3 sm:mb-4">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full"></div>
                  </div>

                  {/* Horizontal Line connecting nodes */}
                  {index < [...EXPERIENCES].reverse().length - 1 && (
                    <div className="absolute top-4 sm:top-5 left-1/2 w-full h-0.5 sm:h-1 bg-gradient-to-r from-primary-500 via-indigo-500 to-slate-800 opacity-30 z-0"></div>
                  )}

                  {/* Content Card */}
                  <ScrollReveal
                    delay={index * 100}
                    width="100%"
                  >
                    <div className="glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 group-hover:border-primary-500/30 group-hover:shadow-[0_0_30px_-5px_rgba(14,165,233,0.15)] relative overflow-hidden h-full">
                      {/* Hover Glow Effect */}
                      <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl group-hover:bg-primary-500/20 transition-all duration-500"></div>

                      <div className="relative z-10">
                        <div className="flex flex-col mb-3 sm:mb-4">
                          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary-400 transition-colors mb-2">{exp.role}</h3>
                          <div className="flex items-center text-slate-300 gap-2 text-xs sm:text-sm font-medium mb-2 sm:mb-3">
                            <Briefcase size={12} className="text-primary-500 sm:w-3.5 sm:h-3.5" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center text-primary-300 text-[10px] sm:text-xs font-bold font-mono bg-primary-950/50 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-primary-800/50 shadow-inner w-fit">
                            <Calendar size={10} className="mr-1.5 sm:mr-2 sm:w-3 sm:h-3" />
                            {exp.duration}
                          </div>
                        </div>

                        <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4 max-h-48 sm:max-h-64 overflow-y-auto pr-1 sm:pr-2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-800">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-slate-300 text-[11px] sm:text-xs leading-relaxed flex items-start group-hover:text-slate-200 transition-colors">
                              <span className="mr-1.5 sm:mr-2 text-primary-500 mt-0.5 text-xs sm:text-sm">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tech Stack Chips */}
                        <div className="pt-2 sm:pt-3 border-t border-slate-700/50">
                          <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2 text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider">
                            <Code2 size={10} className="sm:w-3 sm:h-3" />
                            Tech Stack
                          </div>
                          <div className="flex flex-wrap gap-1 sm:gap-1.5">
                            {exp.techStack.map((tech, i) => (
                              <span
                                key={i}
                                className="px-1.5 sm:px-2.5 py-0.5 bg-slate-800 text-slate-300 text-[10px] sm:text-xs font-medium rounded border sm:rounded-md border-slate-700 hover:border-primary-500/50 hover:text-primary-400 hover:bg-slate-800/80 transition-all cursor-default"
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
              ))}
            </div>
          </div>

          {/* Scroll hint */}
          <div className="text-center mt-3 sm:mt-4 text-slate-500 text-xs sm:text-sm">
            ← Scroll horizontally to explore →
          </div>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ExperienceTimeline;
