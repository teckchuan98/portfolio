import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '../constants';
import { Download, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Building robust backends & scalable solutions.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.substring(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-900">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-800/20 rounded-full blur-[100px] animate-pulse-slow"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.9),rgba(15,23,42,0.9)),linear-gradient(#1e293b_1px,transparent_1px),linear-gradient(90deg,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="space-y-6 flex-1">
          <ScrollReveal delay={100}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-sky-300 to-indigo-500 text-glow">
                {PERSONAL_INFO.name}
              </span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="h-8">
              <p className="text-xl text-slate-400 font-mono">
                <span className="text-primary-500 mr-2">{'>'}</span>
                {typedText}
                <span className="animate-pulse bg-primary-500 w-2 h-5 inline-block ml-1 align-middle"></span>
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="max-w-2xl space-y-4 border-l-4 border-slate-700 pl-6">
              {PERSONAL_INFO.summary.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-slate-300 leading-relaxed text-base text-justify">
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="px-8 py-3.5 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-semibold rounded-xl transition-all shadow-lg shadow-primary-600/20 hover:shadow-primary-600/40 transform hover:-translate-y-1">
                Contact Me
              </a>
              <button className="px-8 py-3.5 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600 hover:border-slate-500 text-slate-200 hover:text-white font-medium rounded-xl transition-all flex items-center gap-2 group backdrop-blur-sm">
                <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                <span>Download CV</span>
              </button>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={500}>
            <div className="flex gap-6 pt-8 text-slate-400">
              <a href="#" className="hover:text-primary-400 transition-colors transform hover:scale-110"><Github size={24} /></a>
              <a href="#" className="hover:text-primary-400 transition-colors transform hover:scale-110"><Linkedin size={24} /></a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-primary-400 transition-colors transform hover:scale-110"><Mail size={24} /></a>
            </div>
          </ScrollReveal>
        </div>

        {/* Visual Element */}
        <ScrollReveal delay={600} className="hidden lg:block relative flex-1 lg:-mr-6">
          <div className="relative z-10 animate-float">
            <div className="glass-card rounded-2xl p-0 shadow-2xl overflow-hidden">
              {/* Fake IDE Header */}
              <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-slate-500 font-mono">Profile.java</div>
                <div className="w-16"></div>
              </div>
              
              {/* Code Content */}
              <div className="p-6 bg-slate-800/80 font-mono text-sm leading-6 overflow-x-auto">
                <div className="flex">
                  <div className="text-slate-600 select-none text-right pr-4 border-r border-slate-700 mr-4">
                    1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12<br/>13<br/>14
                  </div>
                  <div>
                    <span className="text-purple-400">public class</span> <span className="text-yellow-200">Developer</span> <span className="text-slate-300">{`{`}</span><br/>
                    &nbsp;&nbsp;<span className="text-purple-400">private</span> <span className="text-yellow-200">String</span> <span className="text-blue-300">name</span> <span className="text-slate-300">=</span> <span className="text-green-400">"{PERSONAL_INFO.name}"</span><span className="text-slate-300">;</span><br/>
                    &nbsp;&nbsp;<span className="text-purple-400">private</span> <span className="text-yellow-200">String</span><span className="text-slate-300">[]</span> <span className="text-blue-300">coreSkills</span> <span className="text-slate-300">= {`{`}</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"Java"</span><span className="text-slate-300">,</span><br/> 
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"Spring Boot"</span><span className="text-slate-300">,</span><br/> 
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"PostgreSQL"</span><br/>
                    &nbsp;&nbsp;<span className="text-slate-300">{`}`};</span><br/>
                    <br/>
                    &nbsp;&nbsp;<span className="text-purple-400">public void</span> <span className="text-blue-400">work</span><span className="text-slate-300">{"() {"}</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">while</span><span className="text-slate-300">(</span><span className="text-blue-300">alive</span><span className="text-slate-300">{") {"}</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-300">code();</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-300">debug();</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-300">innovate();</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-300">{`}`}</span><br/>
                    &nbsp;&nbsp;<span className="text-slate-300">{`}`}</span><br/>
                    <span className="text-slate-300">{`}`}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Badges behind */}
            <div className="absolute -top-10 -right-10 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-4xl">☕</div>
            </div>
            <div className="absolute -bottom-5 -left-5 bg-slate-800 p-3 rounded-xl border border-slate-700 shadow-xl animate-float" style={{ animationDelay: '2s' }}>
              <div className="text-4xl">🚀</div>
            </div>
          </div>
          
          {/* Background Glows for visual */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary-500/20 to-indigo-500/20 blur-3xl -z-10 rounded-full"></div>
        </ScrollReveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 animate-bounce">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default Hero;