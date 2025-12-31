
import React from 'react';

export const CreatorSection: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="rounded-[3rem] border-2 border-white/10 overflow-hidden aspect-[4/5]">
            <img src="leandro.png" alt="Leandro Machado" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Conheça o <span className="text-purple-500">criador</span> do FlashFlow:
          </h2>

          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>Esta ferramenta nasceu de uma dor real e de experiência prática.</p>
            <p>Eu sou <span className="font-bold italic text-white">Leandro Machado</span> e, como muita gente, já me senti perdido tentando entender para onde meu dinheiro estava indo.</p>
            <p>Testei planilhas, aplicativos e diferentes métodos de controle financeiro.</p>
            <p>O problema era sempre o mesmo: <span className="font-bold text-white">soluções confusas, pouco práticas e difíceis de manter no dia a dia.</span></p>
            <p>Percebi que esse mesmo problema existia na vida financeira pessoal.</p>
            <p className="font-bold italic text-white">Foi aí que decidi criar algo diferente.</p>
            <p>Uma ferramenta simples, visual e objetiva que qualquer pessoa conseguisse usar sem precisar entender termos técnicos ou passar horas organizando dados.</p>
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
