import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceTimeline from './components/ExperienceTimeline';
import SkillsChart from './components/SkillsChart';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 selection:bg-primary-500/30">
      <Navbar />
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
