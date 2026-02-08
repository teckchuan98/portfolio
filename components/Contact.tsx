import React from 'react';
import { PERSONAL_INFO, EDUCATION } from '../constants';
import { Mail, Phone, MapPin, GraduationCap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #334155 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">

          <ScrollReveal>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Let's Connect</h2>
              <div className="w-12 sm:w-16 h-1 bg-primary-500 rounded-full mb-6 sm:mb-8"></div>
              <p className="text-slate-400 mb-8 sm:mb-10 max-w-md text-sm sm:text-base md:text-lg leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>

              <div className="space-y-5 sm:space-y-8">
                <div className="flex items-center gap-3 sm:gap-5 text-slate-300 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-900 rounded-xl sm:rounded-2xl flex items-center justify-center text-primary-500 border border-slate-800 shadow-lg group-hover:scale-110 group-hover:border-primary-500/30 transition-all duration-300">
                    <Mail size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider font-bold mb-0.5 sm:mb-1">Email</p>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm sm:text-base md:text-lg font-medium hover:text-primary-400 transition-colors break-all">{PERSONAL_INFO.email}</a>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-5 text-slate-300 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-900 rounded-xl sm:rounded-2xl flex items-center justify-center text-primary-500 border border-slate-800 shadow-lg group-hover:scale-110 group-hover:border-primary-500/30 transition-all duration-300">
                    <Phone size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider font-bold mb-0.5 sm:mb-1">Phone</p>
                    <p className="text-sm sm:text-base md:text-lg font-medium">{PERSONAL_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-5 text-slate-300 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-900 rounded-xl sm:rounded-2xl flex items-center justify-center text-primary-500 border border-slate-800 shadow-lg group-hover:scale-110 group-hover:border-primary-500/30 transition-all duration-300">
                    <MapPin size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider font-bold mb-0.5 sm:mb-1">Location</p>
                    <p className="text-sm sm:text-base md:text-lg font-medium">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-slate-900 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/5 rounded-full blur-3xl -z-10 group-hover:bg-primary-600/10 transition-colors"></div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                <GraduationCap className="text-primary-500 sm:w-8 sm:h-8" size={24} />
                Education
              </h3>
              <div className="space-y-6 sm:space-y-8">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="relative pl-6 sm:pl-8 border-l-2 sm:border-l-4 border-primary-500/30 hover:border-primary-500 transition-all duration-300 py-3 sm:py-4 group/edu">
                    <div className="absolute -left-2 sm:-left-3 top-5 sm:top-6 w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full bg-primary-500 border-2 sm:border-4 border-slate-900 group-hover/edu:scale-125 transition-transform"></div>
                    <p className="text-white font-bold text-base sm:text-lg md:text-xl mb-1.5 sm:mb-2 group-hover/edu:text-primary-400 transition-colors">{edu.institution}</p>
                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed">{edu.degree}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>

        <div className="border-t border-slate-800 mt-12 sm:mt-16 md:mt-20 pt-6 sm:pt-8 text-center text-slate-600 text-xs sm:text-sm">
          <p>© 2025 Ting Teck Chuan</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;