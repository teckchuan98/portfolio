import React, { useRef, useState, useEffect } from 'react';
import { EXPERIENCES } from '../constants';
import { Experience } from '../types';
import { Briefcase, Calendar, Code2, X, Smartphone, Globe } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

type Tab = 'professional' | 'personal';

const ExperienceTimeline: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const personalScrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);
  const dragMoved = useRef(false);
  const [dragging, setDragging] = useState(false);
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('professional');
  const [activeSubTab, setActiveSubTab] = useState<'ios' | 'web'>('ios');

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    dragMoved.current = false;
    setDragging(true);
    dragStartX.current = e.pageX - scrollRef.current.offsetLeft;
    dragScrollLeft.current = scrollRef.current.scrollLeft;
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - dragStartX.current) * 1.2;
    if (Math.abs(walk) > 5) dragMoved.current = true;
    scrollRef.current.scrollLeft = dragScrollLeft.current - walk;
  };

  const stopDrag = () => {
    isDragging.current = false;
    setDragging(false);
  };

  const openModal = (exp: Experience) => {
    if (dragMoved.current) return;
    setSelectedExp(exp);
    setModalVisible(false);
    // defer so the element is mounted before the transition fires
    requestAnimationFrame(() => requestAnimationFrame(() => setModalVisible(true)));
  };

  const closeModal = () => {
    setModalVisible(false);
    setTimeout(() => setSelectedExp(null), 300);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal(); };
    if (selectedExp) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [selectedExp]);

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-24 relative overflow-hidden bg-cream-200">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Tab buttons */}
        <div className="flex justify-center gap-3 mb-8 sm:mb-10">
          {(['professional', 'personal'] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); if (scrollRef.current) scrollRef.current.scrollLeft = 0; }}
              className={`w-36 sm:w-40 py-2 sm:py-2.5 rounded-lg border text-xs sm:text-sm font-mono uppercase tracking-widest transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-white text-gray-900 border-gold shadow-md'
                  : 'bg-white text-gray-400 border-gray-200 hover:border-gold-light hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'professional' && (
          <ScrollReveal width="100%">
            <div className="text-center mb-10 sm:mb-16 md:mb-20">
              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">Journey</span>
              </h2>
              <div className="w-16 sm:w-24 h-1.5 bg-gradient-to-r from-gold to-gold-light mx-auto rounded-full mb-4 sm:mb-6"></div>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
                A timeline of my career growth, key projects, and technical milestones.
              </p>
            </div>
          </ScrollReveal>
        )}

        {activeTab === 'personal' && (
          <div>
            <ScrollReveal width="100%">
              <div className="text-center mb-10 sm:mb-14">
                <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
                  Personal <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">Projects</span>
                </h2>
                <div className="w-16 sm:w-24 h-1.5 bg-gradient-to-r from-gold to-gold-light mx-auto rounded-full mb-4 sm:mb-5"></div>
              </div>
            </ScrollReveal>

            {/* Sub-tabs */}
            <div className="flex justify-center gap-2 mb-8">
              {([{ key: 'ios', label: 'iOS', icon: Smartphone }, { key: 'web', label: 'Web', icon: Globe }] as const).map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setActiveSubTab(key)}
                  className={`flex items-center gap-1.5 w-28 justify-center py-1.5 rounded-md border text-xs font-mono uppercase tracking-widest transition-all duration-200 ${
                    activeSubTab === key
                      ? 'bg-white text-gray-900 border-gold shadow-sm'
                      : 'bg-transparent text-gray-400 border-gray-200 hover:border-gold-light hover:text-gray-700'
                  }`}
                >
                  <Icon size={13} />
                  {label}
                </button>
              ))}
            </div>

            {/* Cards */}
            <div
              ref={personalScrollRef}
              className={`overflow-x-auto hide-scrollbar pb-4 mb-4 select-none ${dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
              onMouseDown={e => {
                if (!personalScrollRef.current) return;
                isDragging.current = true;
                dragMoved.current = false;
                setDragging(true);
                dragStartX.current = e.pageX - personalScrollRef.current.offsetLeft;
                dragScrollLeft.current = personalScrollRef.current.scrollLeft;
              }}
              onMouseMove={e => {
                if (!isDragging.current || !personalScrollRef.current) return;
                e.preventDefault();
                const x = e.pageX - personalScrollRef.current.offsetLeft;
                const walk = (x - dragStartX.current) * 1.2;
                if (Math.abs(walk) > 5) dragMoved.current = true;
                personalScrollRef.current.scrollLeft = dragScrollLeft.current - walk;
              }}
              onMouseUp={stopDrag}
              onMouseLeave={stopDrag}
            >
            <div className="flex flex-row gap-8 px-2 sm:px-4 min-w-max">
              {EXPERIENCES.filter(e => e.platform === activeSubTab).map((exp, index) => (
                <ScrollReveal key={exp.id} delay={index * 100}>
                  {activeSubTab === 'ios' ? (
                    <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-md hover:shadow-xl hover:border-gold transition-all duration-300 flex flex-row w-[560px] sm:w-[620px] h-[420px]">
                      <a href={exp.link} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 block bg-gray-50 border-r border-gray-100 h-full">
                        <img src={exp.image} alt={exp.company} className="h-full w-auto max-w-[220px] object-contain group-hover:scale-[1.02] transition-transform duration-500" />
                      </a>
                      <div className="flex flex-col justify-between p-6 flex-1">
                        <div>
                          <h3 className="font-sans text-xl font-bold text-gray-900 group-hover:text-gold transition-colors mb-1">{exp.company}</h3>
                          <ul className="space-y-2 mb-5">
                            {exp.description.map((item, i) => (
                              <li key={i} className="text-gray-600 text-xs leading-relaxed flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" /><span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {exp.techStack.map((tech, i) => <span key={i} className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-md border border-gray-200">{tech}</span>)}
                          </div>
                          <a href={exp.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-gold hover:bg-gold-dark text-white text-xs font-mono uppercase tracking-widest rounded-lg transition-colors">View App →</a>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-md hover:shadow-xl hover:border-gold transition-all duration-300 flex flex-row w-[560px] sm:w-[620px] h-[420px]">
                      <div className="flex-shrink-0 w-[180px] bg-gradient-to-br from-gray-900 to-gray-700 flex flex-col items-center justify-center gap-3 p-6 h-full">
                        <Code2 size={32} className="text-gold" />
                        <span className="text-gold-light text-xs font-mono tracking-widest text-center">{exp.link?.replace('https://', '')}</span>
                      </div>
                      <div className="flex flex-col justify-between p-6 flex-1">
                        <div>
                          <h3 className="font-sans text-xl font-bold text-gray-900 group-hover:text-gold transition-colors mb-1">{exp.company}</h3>
                          <ul className="space-y-2 mb-5">
                            {exp.description.map((item, i) => (
                              <li key={i} className="text-gray-600 text-xs leading-relaxed flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" /><span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {exp.techStack.map((tech, i) => <span key={i} className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-md border border-gray-200">{tech}</span>)}
                          </div>
                          <a href={exp.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-gold hover:bg-gold-dark text-white text-xs font-mono uppercase tracking-widest rounded-lg transition-colors">Visit Site →</a>
                        </div>
                      </div>
                    </div>
                  )}
                </ScrollReveal>
              ))}
            </div>
            </div>
            <div className="text-center mb-8 text-gray-400 text-xs sm:text-sm">
              Drag to scroll
            </div>

            {/* Quote */}
            <ScrollReveal width="100%">
              <div className="mt-6 text-center max-w-2xl mx-auto px-4">
                {activeSubTab === 'ios' ? (
                  <>
                    <p className="font-mono text-gray-500 text-sm sm:text-base leading-relaxed italic">"Because the people who are crazy enough to think they can change the world<br />are the ones who do"</p>
                    <p className="mt-3 text-xs font-mono text-gold tracking-widest uppercase">— Steve Jobs</p>
                  </>
                ) : (
                  <>
                    <p className="font-mono text-gray-500 text-sm sm:text-base leading-relaxed italic">"Success is a lousy teacher. It seduces smart people into thinking they can't lose"</p>
                    <p className="mt-3 text-xs font-mono text-gold tracking-widest uppercase">— Bill Gates</p>
                  </>
                )}
              </div>
            </ScrollReveal>
          </div>
        )}

        {activeTab === 'professional' && (
          /* Professional tab — horizontal timeline */
          <div className="relative">
            <div
              ref={scrollRef}
              className={`overflow-x-auto pb-6 sm:pb-8 hide-scrollbar select-none ${dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={stopDrag}
              onMouseLeave={stopDrag}
            >
              <div className="flex items-start gap-6 sm:gap-8 md:gap-10 min-w-max px-2 sm:px-4">
                {(() => {
                  const filtered = [...EXPERIENCES].reverse().filter(e => e.type === 'professional');
                  return filtered.map((exp, index) => (
                    <div key={exp.id} className="relative flex flex-col items-center w-[400px] sm:w-[460px] group">

                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border-2 sm:border-4 border-gold z-10 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 mb-3 sm:mb-4">
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gold rounded-full"></div>
                      </div>

                      {index < filtered.length - 1 && (
                        <div className="absolute top-4 sm:top-5 left-1/2 w-full h-0.5 sm:h-1 bg-gradient-to-r from-gold via-gold-light to-cream-200 opacity-40 z-0"></div>
                      )}

                      <ScrollReveal delay={index * 100} width="100%">
                        <div
                          onClick={() => openModal(exp)}
                          className="bg-white border border-gray-200 p-6 sm:p-8 rounded-xl sm:rounded-2xl transition-all duration-300 group-hover:border-gold group-hover:shadow-xl group-hover:scale-[1.03] relative overflow-hidden h-full cursor-pointer"
                        >
                          <div className="absolute -right-20 -top-20 w-40 h-40 bg-gray-200/30 rounded-full blur-3xl group-hover:bg-gray-200/50 transition-all duration-500"></div>

                          <div className="relative z-10">
                            <div className="flex flex-col mb-3 sm:mb-4">
                              <h3 className="font-sans text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors mb-2">{exp.role}</h3>
                              <div className="flex items-center text-gray-600 gap-2 text-sm sm:text-base font-medium mb-2 sm:mb-3">
                                <Briefcase size={14} className="text-gray-700" />
                                <span>{exp.company}</span>
                              </div>
                              <div className="flex items-center text-gray-700 text-xs sm:text-sm font-bold font-mono bg-gray-100 px-3 py-1.5 rounded-full border border-gray-200 shadow-inner w-fit">
                                <Calendar size={12} className="mr-2" />
                                {exp.duration}
                              </div>
                            </div>

                            <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-5 max-h-56 sm:max-h-72 overflow-y-auto pr-1 sm:pr-2">
                              {exp.description.map((item, i) => (
                                <li key={i} className="text-gray-600 text-xs sm:text-sm leading-relaxed flex items-start">
                                  <span className="mr-2 text-gray-400 mt-0.5 flex-shrink-0">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>

                            <div className="pt-2 sm:pt-3 border-t border-gray-200">
                              <div className="flex items-center gap-2 mb-2 text-xs text-gray-400 font-bold uppercase tracking-wider">
                                <Code2 size={12} />
                                Tech Stack
                              </div>
                              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                {exp.techStack.map((tech, i) => (
                                  <span key={i} className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm font-medium rounded-md border border-gray-200">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </ScrollReveal>
                    </div>
                  ));
                })()}
              </div>
            </div>

            <div className="text-center mt-3 sm:mt-4 text-gray-400 text-xs sm:text-sm">
              Click a card to read more · Drag to scroll
            </div>
          </div>
        )}
      </div>

      {/* Full-screen modal */}
      {selectedExp && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 transition-all duration-300 ${modalVisible ? 'opacity-100' : 'opacity-0'}`}
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal card */}
          <div
            className={`relative bg-cream-100 rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto transition-all duration-300 ${modalVisible ? 'translate-y-0 scale-100' : 'translate-y-8 scale-95'}`}
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-cream-100/95 backdrop-blur-sm border-b border-gray-200 px-6 sm:px-10 py-5 flex items-start justify-between gap-4 rounded-t-2xl sm:rounded-t-3xl z-10">
              <div>
                <h2 className="font-sans text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{selectedExp.role}</h2>
                <div className="flex items-center gap-2 text-gray-600 text-sm sm:text-base">
                  <Briefcase size={14} />
                  <span className="font-medium">{selectedExp.company}</span>
                  <span className="text-gray-300">·</span>
                  <Calendar size={14} />
                  <span>{selectedExp.duration}</span>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="flex-shrink-0 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <X size={18} className="text-gray-600" />
              </button>
            </div>

            {/* Body */}
            <div className="px-6 sm:px-10 py-8 space-y-8">
              {/* Description */}
              <div>
                <h3 className="font-sans text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">What I Did</h3>
                <ul className="space-y-4">
                  {selectedExp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 text-sm sm:text-base leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-sans text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Code2 size={13} /> Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {selectedExp.techStack.map((tech, i) => (
                    <span key={i} className="px-3 sm:px-4 py-1.5 bg-gold text-white text-xs sm:text-sm font-medium rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default ExperienceTimeline;
