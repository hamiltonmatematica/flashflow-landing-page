
import React from 'react';
import { XCircle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 relative">
          {/* Dark Dashboard Image representation */}
          <div className="relative z-10 rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
            <img src="complicado.png" alt="Complex Dashboard" className="w-full opacity-60 grayscale" />
            <div className="absolute top-4 right-4 bg-red-600/90 text-white p-3 rounded-full">
              <XCircle size={32} />
            </div>
          </div>
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-900/20 blur-[100px] rounded-full"></div>
        </div>

        <div className="order-1 md:order-2 space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Organizar o dinheiro não deveria ser <span className="text-purple-500">complicado.</span>
          </h2>
          <div className="space-y-4">
            <p className="text-xl">
              O problema não é falta de esforço. É <span className="font-bold italic">falta de clareza.</span>
            </p>
            <p className="text-gray-400 leading-relaxed">
              O FlashFlow te mostra, de forma simples e visual, exatamente:
            </p>
            <p className="text-gray-400 leading-relaxed font-medium">
              Quanto entra, quanto sai e para onde seu dinheiro está indo sem apps confusos e sem planilhas impossíveis de entender.
            </p>
          </div>
          <a href="https://pay.kiwify.com.br/lTezrlP" target="_blank" rel="noopener noreferrer">
            <button className="cta-button py-4 px-8 rounded-xl text-lg font-bold uppercase">
              Quero organizar meu dinheiro
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
