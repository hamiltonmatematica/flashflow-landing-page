
import React from 'react';

export const WhatIsSection: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
          O que é o <span className="text-[#7C3AED]">FlashFlow?</span>
        </h2>

        <div className="bg-gradient-to-br from-[#7C3AED] to-[#5a0a6f] border border-white/20 p-8 md:p-12 rounded-[3rem] relative shadow-2xl shadow-purple-900/40">
          {/* Decorative purple boxes */}
          <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#6b1a7c] rounded-2xl -z-10 opacity-80 animate-pulse-glow"></div>
          <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-[#5a0a6f] rounded-3xl -z-10 opacity-80 animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>

          <div className="space-y-6 text-lg md:text-xl text-white leading-relaxed">
            <p className="font-semibold">
              O FlashFlow é uma planilha financeira pessoal que transforma números soltos em entendimento real.
            </p>
            <p>
              Em vez de planilhas confusas ou aplicativos cheios de funções desnecessárias, você passa a ver seu dinheiro funcionando, de forma simples e visual.
            </p>
            <p className="font-extrabold text-xl md:text-2xl text-white pt-4 border-t border-white/20">
              Com o FlashFlow, você enxerga claramente:
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
