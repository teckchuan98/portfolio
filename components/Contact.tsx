import React from 'react';
import { PERSONAL_INFO, EDUCATION } from '../constants';
import { Mail, Phone, MapPin, GraduationCap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-cream-200 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #D1D5DB 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">

          <ScrollReveal direction="down">
            <div>
              <h2 className="font-sans text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Let's Connect</h2>
              <div className="w-12 sm:w-16 h-1 bg-gold rounded-full mb-6 sm:mb-8"></div>
              <p className="text-gray-500 mb-8 sm:mb-10 max-w-md text-sm sm:text-base md:text-lg leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>

              <div className="space-y-5 sm:space-y-8">
                <div className="flex items-center gap-3 sm:gap-5 text-gray-700 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center text-gray-800 border border-gray-200 shadow-sm group-hover:scale-110 group-hover:border-gold transition-all duration-300">
                    <Mail size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-bold mb-0.5 sm:mb-1">Email</p>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm sm:text-base md:text-lg font-medium hover:text-gray-500 transition-colors break-all">{PERSONAL_INFO.email}</a>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-5 text-gray-700 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center text-gray-800 border border-gray-200 shadow-sm group-hover:scale-110 group-hover:border-gold transition-all duration-300">
                    <Phone size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-bold mb-0.5 sm:mb-1">Phone</p>
                    <p className="text-sm sm:text-base md:text-lg font-medium">{PERSONAL_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-5 text-gray-700 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center text-gray-800 border border-gray-200 shadow-sm group-hover:scale-110 group-hover:border-gold transition-all duration-300">
                    <MapPin size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-bold mb-0.5 sm:mb-1">Location</p>
                    <p className="text-sm sm:text-base md:text-lg font-medium">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} direction="down">
            <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-200 shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gray-100/50 rounded-full blur-3xl -z-10 group-hover:bg-gray-200/50 transition-colors"></div>

              <h3 className="font-sans text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                <GraduationCap className="text-gray-800 sm:w-8 sm:h-8" size={24} />
                Education
              </h3>
              <div className="space-y-6 sm:space-y-8">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="relative pl-6 sm:pl-8 border-l-2 sm:border-l-4 border-gray-300 hover:border-gold transition-all duration-300 py-3 sm:py-4 group/edu">
                    <div className="absolute -left-2 sm:-left-3 top-5 sm:top-6 w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full bg-gold border-2 sm:border-4 border-[#FAF8F3] group-hover/edu:scale-125 transition-transform"></div>
                    <p className="font-sans text-gray-900 font-bold text-base sm:text-lg md:text-xl mb-1.5 sm:mb-2 group-hover/edu:text-gray-600 transition-colors">{edu.institution}</p>
                    <p className="text-sm sm:text-base text-gray-500 leading-relaxed">{edu.degree}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>

        <div className="border-t border-gray-200 mt-12 sm:mt-16 md:mt-20 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
          <p>© 2025 Ting Teck Chuan</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
