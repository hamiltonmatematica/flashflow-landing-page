
import React from 'react';

export const WhatIsSection: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold">
          O que é o <span className="text-purple-500">FlashFlow?</span>
        </h2>
        
        <div className="glass-card p-8 md:p-12 rounded-[2.5rem] relative">
          {/* Decorative glass elements */}
          <div className="absolute -top-6 -left-6 w-24 h-24 glass-card rounded-2xl -z-10 opacity-40"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 glass-card rounded-3xl -z-10 opacity-40"></div>

          <div className="space-y-8 text-lg md:text-xl text-gray-200 leading-relaxed">
            <p>
              O FlashFlow é uma planilha financeira pessoal que transforma números soltos em entendimento real.
            </p>
            <p>
              Em vez de planilhas confusas ou aplicativos cheios de funções desnecessárias, você passa a ver seu dinheiro funcionando, de forma simples e visual.
            </p>
            <p className="font-bold italic text-white pt-4">
              Com o FlashFlow, você enxerga claramente:
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
