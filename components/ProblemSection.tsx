
import React from 'react';
import { XCircle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="relative py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 relative">
          {/* Dark Dashboard Image with X overlay */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img src="complicado.png" alt="Complex Dashboard" className="w-full" />
            {/* Red X overlay */}
            <div className="absolute top-4 right-4 bg-red-500 rounded-full p-2">
              <XCircle className="w-8 h-8 text-white" strokeWidth={3} />
            </div>
          </div>

          {/* Floating green icons */}
          <div className="absolute -left-8 top-1/4 animate-float">
            <div className="w-16 h-16 bg-emerald-500/20 backdrop-blur-sm rounded-2xl rotate-12 flex items-center justify-center border border-emerald-500/30">
              <span className="text-2xl">📊</span>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Organizar o dinheiro não deveria ser <span className="text-purple-500">complicado.</span>
          </h2>
          <p className="text-xl text-gray-300">
            O problema não é falta de esforço. É <em className="font-medium italic">falta de clareza.</em>
          </p>
          <p className="text-gray-300 leading-relaxed">
            O FlashFlow te mostra, de forma simples e visual, exatamente.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Quanto entra, quanto sai e para onde seu dinheiro está indo—sem apps confusos e sem planilhas impossíveis de entender.
          </p>
          <a href="https://pay.kiwify.com.br/lTezrlP" target="_blank" rel="noopener noreferrer">
            <button className="cta-button py-4 px-8 rounded-xl text-lg font-bold uppercase tracking-wider">
              Quero organizar meu dinheiro
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
