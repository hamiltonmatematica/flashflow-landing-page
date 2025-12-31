
import React from 'react';
import { TrendingUp } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 px-4 md:px-8 max-w-7xl mx-auto overflow-visible min-h-[90vh] flex items-center">
      {/* Purple gradient background with geometric lines */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Purple gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-800/20 to-transparent"></div>

        {/* Geometric grid lines */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Diagonal lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-64 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent rotate-45 origin-left"></div>
          <div className="absolute top-20 right-20 w-96 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent -rotate-45 origin-right"></div>
        </div>
      </div>

      {/* Floating decorative elements - Green spreadsheet icons */}
      <div className="absolute top-32 left-10 md:left-20 animate-float z-0">
        <div className="w-20 h-20 md:w-24 md:h-24 bg-emerald-500/30 backdrop-blur-md rounded-3xl rotate-12 flex items-center justify-center border border-emerald-400/40 shadow-2xl shadow-emerald-500/30">
          <span className="text-4xl md:text-5xl blur-[0.5px]">📊</span>
        </div>
      </div>

      <div className="absolute bottom-20 left-8 md:left-16 animate-float z-0" style={{ animationDelay: '1.2s' }}>
        <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-500/30 backdrop-blur-md rounded-2xl -rotate-12 flex items-center justify-center border border-emerald-400/40 shadow-2xl shadow-emerald-500/30">
          <span className="text-3xl md:text-4xl blur-[0.5px]">📊</span>
        </div>
      </div>

      {/* Large Purple 3D rectangular shapes */}
      <div className="absolute top-28 right-12 md:right-20 animate-pulse-glow z-0">
        <div className="w-40 h-32 md:w-56 md:h-40 bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-lg rounded-[2rem] rotate-12 border border-purple-500/30 shadow-2xl shadow-purple-600/20"></div>
      </div>

      <div className="absolute bottom-28 right-32 md:right-48 animate-pulse-glow z-0" style={{ animationDelay: '0.8s' }}>
        <div className="w-32 h-32 md:w-44 md:h-44 bg-gradient-to-br from-purple-600/15 to-purple-800/15 backdrop-blur-lg rounded-[2rem] -rotate-6 border border-purple-500/25 shadow-2xl shadow-purple-600/20"></div>
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
