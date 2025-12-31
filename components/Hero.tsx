
import React from 'react';
import { TrendingUp } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left space-y-8">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Controle seu <span className="text-purple-500">DINHEIRO</span> de forma simples e inteligente.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
            Veja para onde seu dinheiro vai e tome decisões melhores todos os meses, sem complicação.
          </p>
          <button className="cta-button py-4 px-8 rounded-xl text-lg font-bold uppercase tracking-wider">
            Quero organizar meu dinheiro
          </button>
        </div>

        <div className="relative group">
          {/* Floating Excel Icons (Abstracted) */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-green-500/20 rounded-2xl flex items-center justify-center animate-bounce blur-sm opacity-50">
            <div className="w-12 h-12 bg-green-600 rounded-lg"></div>
          </div>
          <div className="absolute -bottom-10 right-10 w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center animate-pulse blur-sm opacity-50">
            <div className="w-10 h-10 bg-green-600 rounded-lg"></div>
          </div>

          {/* Main Laptop Mockup Image placeholder */}
          <div className="relative z-10 bg-zinc-900/80 p-2 rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden">
            <img
              src="principal.png"
              alt="FlashFlow Dashboard"
              className="rounded-[1.5rem] w-full object-cover"
            />
          </div>

          {/* Abstract Purple Boxes */}
          <div className="absolute top-20 -right-4 w-32 h-32 bg-purple-600/40 rounded-3xl blur-2xl -z-10"></div>
          <div className="absolute bottom-10 left-10 w-40 h-24 bg-purple-900/30 rounded-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};
