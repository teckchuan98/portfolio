import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '../constants';
import { Download, ChevronDown } from 'lucide-react';
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cream-100">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gray-400/10 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gray-300/10 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cream-200/40 rounded-full blur-[100px] animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        <div className="space-y-4 sm:space-y-6 flex-1">
          <ScrollReveal delay={100}>
            <div className="flex items-center gap-4 sm:gap-6">
              <img src="/pixel.png" alt="" className="h-16 sm:h-20 md:h-24 lg:h-32 w-auto object-contain flex-shrink-0" />
              <h1 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light text-glow">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="h-6 sm:h-8">
              <p className="text-base sm:text-lg md:text-xl text-gray-500 font-mono">
                <span className="text-gray-900 mr-2">{'>'}</span>
                {typedText}
                <span className="animate-pulse bg-gray-900 w-2 h-5 inline-block ml-1 align-middle"></span>
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="max-w-2xl space-y-3 sm:space-y-4 border-l-2 sm:border-l-4 border-gray-200 pl-4 sm:pl-6">
              {PERSONAL_INFO.summary.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-relaxed text-sm sm:text-base text-justify">
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="text-[10px] sm:text-xs px-6 sm:px-8 py-3 sm:py-3.5 bg-gold hover:bg-gold-dark text-white rounded-xl transition-all shadow-lg hover:shadow-gold/20 transform hover:-translate-y-1 text-center"
              >
                Contact Me
              </button>
              <a href="/TeckChuan陳德权.pdf" download className="text-[10px] sm:text-xs px-6 sm:px-8 py-3 sm:py-3.5 bg-white hover:bg-gray-50 border border-gray-300 hover:border-gold text-gray-700 hover:text-gray-900 rounded-xl transition-all flex items-center justify-center gap-2 group">
                <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
                <span>Download CV</span>
              </a>
            </div>
          </ScrollReveal>

        </div>

        {/* Visual Element */}
        <ScrollReveal delay={600} className="hidden lg:block relative flex-1 lg:-mr-6">
          <div className="relative z-10 animate-float">
            <div className="glass-card rounded-2xl p-0 shadow-2xl overflow-hidden">
              {/* Fake IDE Header */}
              <div className="bg-gray-800/95 px-4 py-3 border-b border-gray-700 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-gray-400 font-mono">Profile.java</div>
                <div className="w-16"></div>
              </div>

              {/* Code Content */}
              <div className="p-6 bg-gray-900/95 font-mono text-sm leading-6 overflow-x-auto">
                <div className="flex">
                  <div className="text-gray-600 select-none text-right pr-4 border-r border-gray-700 mr-4">
                    1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12<br/>13<br/>14
                  </div>
                  <div>
                    <span className="text-purple-400">public class</span> <span className="text-yellow-200">Developer</span> <span className="text-gray-300">{`{`}</span><br/>
                    &nbsp;&nbsp;<span className="text-purple-400">private</span> <span className="text-yellow-200">String</span> <span className="text-blue-300">name</span> <span className="text-gray-300">=</span> <span className="text-green-400">"{PERSONAL_INFO.name}"</span><span className="text-gray-300">;</span><br/>
                    &nbsp;&nbsp;<span className="text-purple-400">private</span> <span className="text-yellow-200">String</span><span className="text-gray-300">[]</span> <span className="text-blue-300">coreSkills</span> <span className="text-gray-300">= {`{`}</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"Java"</span><span className="text-gray-300">,</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"Spring Boot"</span><span className="text-gray-300">,</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"PostgreSQL"</span><br/>
                    &nbsp;&nbsp;<span className="text-gray-300">{`}`};</span><br/>
                    <br/>
                    &nbsp;&nbsp;<span className="text-purple-400">public void</span> <span className="text-blue-400">work</span><span className="text-gray-300">{"() {"}</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">while</span><span className="text-gray-300">(</span><span className="text-blue-300">alive</span><span className="text-gray-300">{") {"}</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-300">code();</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-300">debug();</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-300">innovate();</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-300">{`}`}</span><br/>
                    &nbsp;&nbsp;<span className="text-gray-300">{`}`}</span><br/>
                    <span className="text-gray-300">{`}`}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute -top-10 -right-10 bg-white p-4 rounded-xl border border-gray-200 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-4xl">☕</div>
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white p-3 rounded-xl border border-gray-200 shadow-xl animate-float" style={{ animationDelay: '2s' }}>
              <div className="text-4xl">🚀</div>
            </div>
          </div>

          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-gray-400/10 to-gray-300/10 blur-3xl -z-10 rounded-full"></div>
        </ScrollReveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 text-gray-400 animate-bounce">
        <ChevronDown size={20} className="sm:w-6 sm:h-6" />
      </div>
    </section>
  );
};

export default Hero;
