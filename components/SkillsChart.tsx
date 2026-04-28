import React from 'react';
import { Gauge, Sparkles, Bot, Monitor, Brain, LucideIcon } from 'lucide-react';
import { SKILLS } from '../constants';
import ScrollReveal from './ScrollReveal';

const CATEGORY_STYLES: Record<string, string> = {
  Backend: 'bg-indigo-100 text-indigo-700',
  Frontend: 'bg-pink-100 text-pink-700',
  Tools: 'bg-orange-100 text-orange-700',
  Languages: 'bg-green-100 text-green-700',
  AI: 'bg-purple-100 text-purple-700',
};

const FALLBACK_ICONS: Record<string, LucideIcon> = {
  gauge: Gauge,
  sparkles: Sparkles,
  bot: Bot,
  monitor: Monitor,
  brain: Brain,
};

const SkillsChart: React.FC = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-24 bg-cream-100 relative">
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-gray-300/20 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6">
        <ScrollReveal width="100%">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Technical Proficiency</h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto rounded-full"></div>
            <p className="mt-3 sm:mt-4 text-gray-500 text-sm sm:text-base px-4">Technologies I work with</p>
          </div>
        </ScrollReveal>

        {(() => {
          const cols = 5;
          const main = SKILLS.slice(0, Math.floor(SKILLS.length / cols) * cols);
          const overflow = SKILLS.slice(main.length);

          const renderSkill = (skill: typeof SKILLS[0], index: number) => (
            <ScrollReveal key={skill.name} delay={index * 60} width="100%">
              <div className="flex flex-col items-center text-center p-3 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-center gap-2 mb-3">
                  {skill.icon.length > 0 ? skill.icon.map((ic) => (
                    <img
                      key={ic}
                      src={ic.startsWith('https://') || ic.startsWith('/') ? ic : `https://skillicons.dev/icons?i=${ic}&theme=light`}
                      alt={ic}
                      className="w-10 h-10 sm:w-12 sm:h-12"
                    />
                  )) : (() => {
                    const FallbackIcon = FALLBACK_ICONS[skill.fallback ?? 'gauge'] ?? Gauge;
                    return (
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                        <FallbackIcon size={24} className="text-gray-500" />
                      </div>
                    );
                  })()}
                </div>
                <h3 className="font-sans text-sm sm:text-base font-semibold text-gray-900 mb-2 leading-tight">{skill.name}</h3>
                <span className={`text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full uppercase tracking-wide font-bold ${CATEGORY_STYLES[skill.category]}`}>
                  {skill.category}
                </span>
              </div>
            </ScrollReveal>
          );

          return (
            <>
              <div className="grid grid-cols-5 gap-6 sm:gap-8">
                {main.map((skill, i) => renderSkill(skill, i))}
              </div>
              {overflow.length > 0 && (
                <div className="flex justify-center gap-6 sm:gap-8 mt-6 sm:mt-8">
                  {overflow.map((skill, i) => (
                    <div key={skill.name} className="w-[calc(20%-1.5rem)] sm:w-[calc(20%-2rem)]">
                      {renderSkill(skill, main.length + i)}
                    </div>
                  ))}
                </div>
              )}
            </>
          );
        })()}
      </div>
    </section>
  );
};

export default SkillsChart;
