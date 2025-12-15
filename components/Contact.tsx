import React from 'react';
import { PERSONAL_INFO, EDUCATION } from '../constants';
import { Mail, Phone, MapPin, GraduationCap, Send } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{ 
        backgroundImage: 'radial-gradient(circle at 1px 1px, #334155 1px, transparent 0)', 
        backgroundSize: '40px 40px' 
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <ScrollReveal>
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Let's Connect</h2>
              <div className="w-16 h-1 bg-primary-500 rounded-full mb-8"></div>
              <p className="text-slate-400 mb-10 max-w-md text-lg leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-5 text-slate-300 group">
                  <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-primary-500 border border-slate-800 shadow-lg group-hover:scale-110 group-hover:border-primary-500/30 transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Email</p>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg font-medium hover:text-primary-400 transition-colors">{PERSONAL_INFO.email}</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-5 text-slate-300 group">
                  <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-primary-500 border border-slate-800 shadow-lg group-hover:scale-110 group-hover:border-primary-500/30 transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Phone</p>
                    <p className="text-lg font-medium">{PERSONAL_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 text-slate-300 group">
                  <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-primary-500 border border-slate-800 shadow-lg group-hover:scale-110 group-hover:border-primary-500/30 transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Location</p>
                    <p className="text-lg font-medium">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 bg-slate-900/50 p-6 rounded-2xl border border-slate-800/50 backdrop-blur-sm">
                 <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                   <GraduationCap className="text-primary-500"/> Education
                 </h3>
                 <div className="space-y-6">
                   {EDUCATION.map((edu, idx) => (
                     <div key={idx} className="pl-4 border-l-2 border-slate-700 hover:border-primary-500 transition-colors">
                       <p className="text-white font-semibold text-lg">{edu.institution}</p>
                       <p className="text-sm text-slate-400 mt-1">{edu.degree}</p>
                     </div>
                   ))}
                 </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/5 rounded-full blur-3xl -z-10 group-hover:bg-primary-600/10 transition-colors"></div>
              
              <h3 className="text-2xl font-bold text-white mb-8">Send me a message</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs text-slate-500 uppercase font-bold tracking-wider">Name</label>
                    <input type="text" className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3.5 text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all placeholder:text-slate-600" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-slate-500 uppercase font-bold tracking-wider">Email</label>
                    <input type="email" className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3.5 text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all placeholder:text-slate-600" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-slate-500 uppercase font-bold tracking-wider">Subject</label>
                  <input type="text" className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3.5 text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all placeholder:text-slate-600" placeholder="Project Inquiry" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-slate-500 uppercase font-bold tracking-wider">Message</label>
                  <textarea rows={5} className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3.5 text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all resize-none placeholder:text-slate-600" placeholder="Hello, I'd like to discuss..."></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary-600/20 hover:shadow-primary-600/40 hover:-translate-y-1 flex items-center justify-center gap-2">
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </ScrollReveal>

        </div>
        
        <div className="border-t border-slate-800 mt-20 pt-8 text-center text-slate-600 text-sm">
          <p>© {new Date().getFullYear()} Ting Teck Chuan. Crafted with React, Gemini & Tailwind.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;