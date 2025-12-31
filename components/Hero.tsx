
import React from 'react';
import { TrendingUp } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 px-4 md:px-8 max-w-7xl mx-auto overflow-visible min-h-[90vh] flex items-center">
      {/* Purple gradient background - simplified to avoid color conflicts */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Subtle grid lines only */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(167, 92, 246, 0.3)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Diagonal lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-64 h-px bg-gradient-to-r from-transparent via-purple-300/40 to-transparent rotate-45 origin-left"></div>
          <div className="absolute top-20 right-20 w-96 h-px bg-gradient-to-r from-transparent via-purple-300/30 to-transparent -rotate-45 origin-right"></div>
        </div>
      </div>

      {/* Right side bottom */}
      <div className="absolute bottom-24 right-[5%] md:right-[8%] animate-float z-20" style={{ animationDelay: '1.5s' }}>
        <div className="w-14 h-14 md:w-18 md:h-18 bg-[#7C3AED] rounded-xl -rotate-6 flex items-center justify-center shadow-2xl shadow-purple-600/50">
          <span className="text-2xl md:text-3xl">📊</span>
        </div>
      </div>

      {/* Purple decorative rectangles */}
      <div className="absolute top-28 right-12 md:right-20 animate-pulse-glow z-0">
        <div className="w-40 h-32 md:w-56 md:h-40 bg-[#7C3AED] rounded-[2rem] rotate-12 shadow-2xl shadow-purple-600/50"></div>
      </div>

      <div className="absolute bottom-28 right-32 md:right-48 animate-pulse-glow z-0" style={{ animationDelay: '0.8s' }}>
        <div className="w-32 h-32 md:w-44 md:h-44 bg-[#9333EA] rounded-[2rem] -rotate-6 shadow-2xl shadow-purple-600/40"></div>
      </div>

      <div className="absolute top-1/2 right-[60%] md:right-[55%] animate-float z-0" style={{ animationDelay: '1.5s' }}>
        <div className="w-28 h-36 md:w-36 md:h-44 bg-[#A855F7] rounded-[2rem] rotate-6 shadow-xl shadow-purple-500/40"></div>
      </div>

      <div className="absolute bottom-20 right-[8%] md:right-[12%] animate-pulse-glow z-0" style={{ animationDelay: '0.5s' }}>
        <div className="w-24 h-24 md:w-32 md:h-32 bg-[#7C3AED] rounded-2xl -rotate-12 shadow-lg shadow-purple-600/40"></div>
      </div>

      {/* Main content grid */}
      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <div className="text-left space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Controle seu <span className="text-purple-400">DINHEIRO</span> de forma simples e inteligente.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-lg leading-relaxed">
            Veja para onde seu dinheiro vai e tome decisões melhores todos os meses, sem complicação.
          </p>
          <a href="https://pay.kiwify.com.br/lTezrlP" target="_blank" rel="noopener noreferrer">
            <button className="cta-button py-5 px-10 rounded-xl text-lg md:text-xl font-bold uppercase tracking-wider shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transition-all">
              Quero organizar meu dinheiro
            </button>
          </a>
        </div>

        <div className="relative">
          {/* Large purple sphere/circle underneath laptop */}
          <div className="absolute -bottom-32 -right-16 md:-right-24 w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-purple-600/30 to-purple-900/20 rounded-full blur-xl -z-10"></div>
          <div className="absolute -bottom-28 -right-12 md:-right-20 w-72 h-72 md:w-88 md:h-88 bg-gradient-to-br from-purple-700/40 to-purple-800/30 rounded-full -z-10"></div>

          {/* Main Laptop Mockup Image */}
          <div className="relative z-10 bg-zinc-900/90 p-2 md:p-3 rounded-[2rem] md:rounded-[2.5rem] border border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <img
              src="principal.png"
              alt="FlashFlow Dashboard"
              className="rounded-[1.5rem] md:rounded-[2rem] w-full object-cover"
            />
          </div>

          {/* Small purple shape near laptop */}
          <div className="absolute -top-6 -right-6 md:-top-8 md:-right-8 animate-float z-0" style={{ animationDelay: '1.5s' }}>
            <div className="w-20 h-20 md:w-24 md:h-24 bg-purple-600/25 backdrop-blur-sm rounded-2xl rotate-12 border border-purple-500/30 shadow-lg shadow-purple-600/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
