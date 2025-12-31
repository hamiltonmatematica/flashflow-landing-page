
import React from 'react';

export const WhoIsItFor: React.FC = () => {
  return (
    <section id="para-quem-e" className="py-24 px-4 bg-black relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center space-y-16">
        <div className="inline-block bg-gradient-to-r from-[#7C3AED] to-[#6b1a7c] border border-white/30 px-12 py-6 rounded-3xl shadow-2xl shadow-purple-900/50">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">Para quem é?</h2>
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Vertical Line with Dots */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-purple-600/30 hidden md:block"></div>

          <div className="w-full md:w-5/12 text-center md:text-right space-y-8">
            <p className="text-gray-200 text-lg">Para aqueles que não entendem muito e querem mudar sua vida financeira.</p>
            <p className="text-gray-200 text-lg">Para quem quer começar a organizar o seu dinheiro de forma simples, fácil e rápido.</p>
            <p className="text-gray-200 text-lg">Para aquele que quer parar de "achar" e começar a entender.</p>
            <p className="text-gray-200 text-lg">Para pessoas insatisfeitas com a sua vida financeira.</p>
          </div>

          {/* Dots on the line */}
          <div className="flex md:flex-col gap-8 md:gap-24 relative z-10 py-4">
            <div className="w-6 h-6 rounded-full bg-[#7C3AED] border-4 border-black shadow-lg shadow-purple-600/50"></div>
            <div className="w-6 h-6 rounded-full bg-[#7C3AED] border-4 border-black shadow-lg shadow-purple-600/50"></div>
            <div className="w-6 h-6 rounded-full bg-[#7C3AED] border-4 border-black shadow-lg shadow-purple-600/50"></div>
            <div className="w-6 h-6 rounded-full bg-[#7C3AED] border-4 border-black shadow-lg shadow-purple-600/50"></div>
          </div>

          <div className="w-full md:w-5/12 text-center md:text-left space-y-8">
            <p className="text-gray-200 text-lg">Para pessoas com dificuldade em se organizar financeiramente.</p>
            <p className="text-gray-200 text-lg">Para pessoas que não querem depender de aplicativos cheios de funções inúteis.</p>
            <p className="text-gray-200 text-lg">Para pessoas que preferem um visual claro do que números confusos.</p>
            <p className="text-gray-200 text-lg">Para pessoas com rotinas agitadas que precisam de controle financeiro rápido e prático.</p>
          </div>
        </div>

        <div className="pt-12">
          <a href="https://pay.kiwify.com.br/lTezrlP" target="_blank" rel="noopener noreferrer">
            <button className="cta-button py-5 px-4 md:px-6 rounded-xl text-lg md:text-xl font-bold uppercase tracking-wider shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transition-all">
              Quero organizar meu dinheiro
            </button>
          </a>
        </div>
      </div>

      {/* Large decorative circle */}
      <div className="absolute left-[-100px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] border-[20px] border-purple-600/10 rounded-full"></div>
      <div className="absolute right-[-100px] bottom-0 w-[250px] h-[250px] border-[15px] border-purple-600/10 rounded-full"></div>
    </section>
  );
};
