import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone } from 'lucide-react';

const MobileBlock: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream-100 flex flex-col items-center justify-center px-8 text-center">
      <div className="space-y-6">
        <img
          src="/profile2.png"
          alt={PERSONAL_INFO.name}
          className="w-24 h-24 rounded-full object-cover mx-auto ring-2 ring-gray-300"
        />
        <h1 className="text-2xl font-bold text-gray-900">
          Hi, I'm {PERSONAL_INFO.name}
        </h1>
        <p className="text-gray-500 leading-relaxed">
          This website is best previewed on desktop. Come back on a larger screen for the full experience!
        </p>
        <p className="text-gray-400 text-sm">In the meantime, feel free to reach me at:</p>
        <div className="space-y-3">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center justify-center gap-3 text-gray-700 hover:text-gray-500 transition-colors"
          >
            <Mail size={18} />
            <span>{PERSONAL_INFO.email}</span>
          </a>
          <a
            href={`tel:${PERSONAL_INFO.phone}`}
            className="flex items-center justify-center gap-3 text-gray-700 hover:text-gray-500 transition-colors"
          >
            <Phone size={18} />
            <span>{PERSONAL_INFO.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileBlock;
