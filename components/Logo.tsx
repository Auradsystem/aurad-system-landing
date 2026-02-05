import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
        {/* Abstract "AS" circuit representation */}
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-aurad-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
            <path d="M30 80 L50 20 L70 80" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M40 50 L60 50" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            {/* Circuit nodes */}
            <circle cx="30" cy="80" r="6" fill="#020617" stroke="currentColor" strokeWidth="3" />
            <circle cx="50" cy="20" r="6" fill="#020617" stroke="currentColor" strokeWidth="3" />
            <circle cx="70" cy="80" r="6" fill="#020617" stroke="currentColor" strokeWidth="3" />
            {/* S curve abstract */}
            <path d="M60 50 C 80 50, 80 80, 60 80 L 40 80" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="opacity-70"/>
        </svg>
    </div>
  );
};