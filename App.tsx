import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import ExperienceTimeline from './components/ExperienceTimeline';
import SkillsChart from './components/SkillsChart';
import Contact from './components/Contact';
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
    <div className="bg-cream-100 min-h-screen text-gray-900 selection:bg-gray-900/20">
      <main>
        <Hero />
        <ExperienceTimeline />
        <SkillsChart />
        <Contact />
      </main>
    </div>
  );
};

export default App;
