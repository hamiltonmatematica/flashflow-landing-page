
import React from 'react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="relative py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 relative">
          {/* Dashboard Image with subtle glow */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <img src="complicado.png" alt="Complex Dashboard" className="w-full" />
            {/* Purple glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none"></div>
          </div>

          {/* Floating green icon */}
          <div className="absolute -left-8 top-1/4 animate-float">
            <div className="w-16 h-16 bg-emerald-500/25 backdrop-blur-sm rounded-2xl rotate-12 flex items-center justify-center border border-emerald-500/30 shadow-xl shadow-emerald-500/20">
              <span className="text-2xl">📊</span>
            </div>
          </div>

          {/* Purple decorative box */}
          <div className="absolute -right-6 bottom-10 animate-pulse-glow" style={{ animationDelay: '0.5s' }}>
            <div className="w-20 h-20 bg-[#7C3AED] rounded-2xl -rotate-12 shadow-xl shadow-purple-600/40"></div>
          </div>
        </div>

        <div className="order-1 md:order-2 space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Organizar o dinheiro não precisa ser <span className="text-[#7C3AED]">complicado</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 font-semibold">
            O problema não é falta de esforço.
          </p>
          <p className="text-xl md:text-2xl text-gray-200 font-semibold">
            É <span className="text-purple-400 italic">falta de clareza.</span>
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            O FlashFlow te mostra, de forma simples e visual, exatamente quanto entra, quanto sai e para onde seu dinheiro está indo.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Sem apps confusos e sem planilhas impossíveis de entender.
          </p>
          <div className="pt-6 text-center">
            <a href="https://pay.kiwify.com.br/lTezrlP" target="_blank" rel="noopener noreferrer">
              <button className="cta-button py-5 px-4 md:px-6 rounded-xl text-lg md:text-xl font-bold uppercase tracking-wider shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transition-all">
                Quero organizar meu dinheiro
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
