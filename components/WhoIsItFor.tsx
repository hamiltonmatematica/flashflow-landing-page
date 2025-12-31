
import React from 'react';

export const WhoIsItFor: React.FC = () => {
  return (
    <section id="para-quem-e" className="py-24 px-4 bg-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-16">
        <div className="inline-block glass-card px-12 py-6 rounded-3xl">
          <h2 className="text-3xl md:text-4xl font-bold">Para quem é?</h2>
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Vertical Line with Dots */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-purple-600/40 hidden md:block"></div>

          <div className="w-full md:w-5/12 text-center md:text-right space-y-12">
            <p className="text-gray-300">Para aqueles que não entendem muito e quer mudar sua vida financeira.</p>
            <p className="text-gray-300">Para quem quer começar a organizar o seu dinheiro de forma simples, fácil e rápido.</p>
            <p className="text-gray-300">Para aquele que quer parar de "achar" e começar a entender.</p>
            <p className="text-gray-300">Para pessoas insatisfeitas com a sua vida financeira.</p>
          </div>

          {/* Dots on the line */}
          <div className="flex md:flex-col gap-8 md:gap-24 relative z-10 py-4">
            <div className="w-5 h-5 rounded-full bg-purple-600 border-4 border-black"></div>
            <div className="w-5 h-5 rounded-full bg-purple-600 border-4 border-black"></div>
            <div className="w-5 h-5 rounded-full bg-purple-600 border-4 border-black"></div>
            <div className="w-5 h-5 rounded-full bg-purple-600 border-4 border-black"></div>
          </div>

          <div className="w-full md:w-5/12 text-center md:text-left space-y-12">
            <p className="text-gray-300">Para pessoas com dificuldade em se organizar financeiramente.</p>
            <p className="text-gray-300">Para pessoas que não querem depender de aplicativos cheios de funções inúteis.</p>
            <p className="text-gray-300">Para pessoas que preferem um visual claro do que números confusos.</p>
            <p className="text-gray-300">Pessoas com rotinas agitadas, que precisam de um treino personalizado ajustado à sua rotina.</p>
          </div>
        </div>

        <div className="pt-12">
          <a href="https://pay.kiwify.com.br/lTezrlP" target="_blank" rel="noopener noreferrer">
            <button className="cta-button py-4 px-12 rounded-2xl text-lg font-bold uppercase tracking-wider">
              Quero organizar meu dinheiro
            </button>
          </a>
        </div>
      </div>

      <div className="absolute left-[-100px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] border-[20px] border-purple-600/10 rounded-full"></div>
    </section>
  );
};
