import React, { useState } from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { SKILLS } from '../constants';
import ScrollReveal from './ScrollReveal';

const SkillsChart: React.FC = () => {
  const [visibleSkills, setVisibleSkills] = useState<Set<string>>(
    new Set(SKILLS.map(skill => skill.name))
  );

  const toggleSkill = (skillName: string) => {
    setVisibleSkills(prev => {
      const newSet = new Set(prev);
      if (newSet.has(skillName)) {
        newSet.delete(skillName);
      } else {
        newSet.add(skillName);
      }
      return newSet;
    });
  };

  const filteredSkills = SKILLS.filter(skill => visibleSkills.has(skill.name));

  return (
    <section id="skills" className="py-24 bg-slate-900 relative">
       {/* Decorative blob */}
       <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary-900/20 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6">
        <ScrollReveal width="100%">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technical Proficiency</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-indigo-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-400">A visual overview of my technical arsenal. Click to toggle skills.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Chart */}
          <ScrollReveal delay={200} className="w-full" width="100%">
            <div className="h-[450px] w-full glass-card rounded-2xl p-6 border border-slate-700/50 shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent rounded-2xl pointer-events-none"></div>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={filteredSkills}>
                  <PolarGrid stroke="#334155" strokeDasharray="3 3" />
                  <PolarAngleAxis 
                    dataKey="name" 
                    tick={{ fill: '#94a3b8', fontSize: 13, fontWeight: 500 }} 
                  />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Skill Level"
                    dataKey="level"
                    stroke="#0ea5e9"
                    strokeWidth={3}
                    fill="#0ea5e9"
                    fillOpacity={0.4}
                    isAnimationActive={true}
                    dot={{ r: 4, fill: "#0ea5e9", strokeWidth: 2, stroke: "#0f172a" }}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc', borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)' }}
                    itemStyle={{ color: '#38bdf8' }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </ScrollReveal>

          {/* List View */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             {SKILLS.map((skill, index) => {
               const isVisible = visibleSkills.has(skill.name);
               return (
                 <ScrollReveal key={skill.name} delay={300 + (index * 50)} width="100%">
                   <div
                     onClick={() => toggleSkill(skill.name)}
                     className={`p-5 rounded-xl border transition-all duration-300 group hover:transform hover:-translate-y-1 hover:shadow-lg cursor-pointer ${
                       isVisible
                         ? 'bg-slate-800/50 border-slate-700 hover:border-primary-500/50 hover:bg-slate-800'
                         : 'bg-slate-800/20 border-slate-700/30 opacity-40'
                     }`}
                   >
                     <div className="flex justify-between items-center mb-3">
                       <h3 className={`font-semibold transition-colors ${
                         isVisible ? 'text-white group-hover:text-primary-400' : 'text-slate-500 line-through'
                       }`}>
                         {skill.name}
                       </h3>
                       <span className={`text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wide font-bold ${
                         skill.category === 'Backend' ? 'bg-indigo-900/50 text-indigo-300' :
                         skill.category === 'Frontend' ? 'bg-pink-900/50 text-pink-300' :
                         skill.category === 'Tools' ? 'bg-orange-900/50 text-orange-300' :
                         'bg-green-900/50 text-green-300'
                       }`}>
                         {skill.category}
                       </span>
                     </div>
                     <div className="flex items-center gap-3">
                        <div className="flex-1 bg-slate-700 h-2 rounded-full overflow-hidden">
                          <div
                              className={`bg-gradient-to-r from-primary-600 to-primary-400 h-full rounded-full transition-all duration-1000 ease-out ${
                                isVisible ? 'group-hover:animate-pulse' : ''
                              }`}
                              style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <span className={`text-xs font-mono w-8 text-right ${
                          isVisible ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                          {skill.level}%
                        </span>
                     </div>
                   </div>
                 </ScrollReveal>
               );
             })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsChart;