import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import ExperienceTimeline from './components/ExperienceTimeline';
import SkillsChart from './components/SkillsChart';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';
import MobileBlock from './components/MobileBlock';

const MOBILE_BREAKPOINT = 1024;

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BREAKPOINT);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  if (isMobile) return <MobileBlock />;

  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 selection:bg-primary-500/30">
      <main>
        <Hero />
        <ExperienceTimeline />
        <SkillsChart />
        <Contact />
      </main>
      <ChatBot />
    </div>
  );
};

export default App;
