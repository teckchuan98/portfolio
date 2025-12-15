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

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Horizontal scrollable container */}
          <div className="overflow-x-auto pb-8 hide-scrollbar">
            <div className="flex items-start gap-8 min-w-max px-4">
              {[...EXPERIENCES].reverse().map((exp, index) => (
                <div key={exp.id} className="relative flex flex-col items-center w-80 group">

                  {/* Timeline Node */}
                  <div className="w-10 h-10 rounded-full bg-slate-900 border-4 border-primary-500 z-10 flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.5)] group-hover:scale-110 transition-transform duration-300 mb-4">
                    <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                  </div>

                  {/* Horizontal Line connecting nodes */}
                  {index < [...EXPERIENCES].reverse().length - 1 && (
                    <div className="absolute top-5 left-1/2 w-full h-1 bg-gradient-to-r from-primary-500 via-indigo-500 to-slate-800 opacity-30 z-0"></div>
                  )}

                  {/* Content Card */}
                  <ScrollReveal
                    delay={index * 100}
                    width="100%"
                  >
                    <div className="glass-card p-6 rounded-2xl transition-all duration-300 group-hover:border-primary-500/30 group-hover:shadow-[0_0_30px_-5px_rgba(14,165,233,0.15)] relative overflow-hidden h-full">
                      {/* Hover Glow Effect */}
                      <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl group-hover:bg-primary-500/20 transition-all duration-500"></div>

                      <div className="relative z-10">
                        <div className="flex flex-col mb-4">
                          <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors mb-2">{exp.role}</h3>
                          <div className="flex items-center text-slate-300 gap-2 text-sm font-medium mb-3">
                            <Briefcase size={14} className="text-primary-500" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center text-primary-300 text-xs font-bold font-mono bg-primary-950/50 px-3 py-1.5 rounded-full border border-primary-800/50 shadow-inner w-fit">
                            <Calendar size={12} className="mr-2" />
                            {exp.duration}
                          </div>
                        </div>

                        <ul className="space-y-2 mb-4 max-h-64 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-800">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-slate-300 text-xs leading-relaxed flex items-start group-hover:text-slate-200 transition-colors">
                              <span className="mr-2 text-primary-500 mt-0.5 text-sm">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tech Stack Chips */}
                        <div className="pt-3 border-t border-slate-700/50">
                          <div className="flex items-center gap-2 mb-2 text-xs text-slate-500 font-bold uppercase tracking-wider">
                            <Code2 size={12} />
                            Tech Stack
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.techStack.map((tech, i) => (
                              <span
                                key={i}
                                className="px-2.5 py-0.5 bg-slate-800 text-slate-300 text-xs font-medium rounded-md border border-slate-700 hover:border-primary-500/50 hover:text-primary-400 hover:bg-slate-800/80 transition-all cursor-default"
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
          <div className="text-center mt-4 text-slate-500 text-sm">
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
