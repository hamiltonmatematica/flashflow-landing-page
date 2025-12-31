
import React from 'react';

export const CreatorSection: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
        <div className="relative">
          {/* Creator photo with white border */}
          <div className="relative rounded-[3rem] border-4 border-white/80 overflow-hidden aspect-[4/5] shadow-2xl">
            <img src="leandro.png" alt="Leandro Machado" className="w-full h-full object-cover object-center" />
          </div>

          {/* Purple decorative boxes - over the photo */}
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#7C3AED] rounded-3xl z-20 animate-pulse-glow"></div>
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#6b1a7c] rounded-2xl z-20 opacity-80 animate-float"></div>
        </div>

        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Conheça o <span className="text-[#7C3AED]">criador</span> do FlashFlow:
          </h2>

          <div className="space-y-6 text-gray-200 text-lg leading-relaxed">
            <p className="font-semibold text-xl text-white">Esta ferramenta nasceu de uma dor real e de experiência prática.</p>

            <p>Eu sou <span className="font-extrabold italic text-white">Leandro Machado</span> e, como muita gente, já me senti perdido tentando entender para onde meu dinheiro estava indo.</p>

            <p>Testei planilhas, aplicativos e diferentes métodos de controle financeiro.</p>

            <p>O problema era sempre o mesmo: <span className="font-bold italic text-white">soluções confusas, pouco práticas e difíceis de manter no dia a dia.</span></p>

            <p>Percebi que esse mesmo problema existia na vida financeira pessoal.</p>

            <p className="font-extrabold italic text-white text-xl">Foi aí que decidi criar algo diferente.</p>

            <p>Uma ferramenta simples, visual e objetiva que qualquer pessoa conseguisse usar sem precisar entender termos técnicos ou passar horas organizando dados.</p>
          </div>

          <div className="pt-8">
            <a href="https://pay.kiwify.com.br/lTezrlP" target="_blank" rel="noopener noreferrer">
              <button className="cta-button py-5 px-10 rounded-xl text-lg md:text-xl font-extrabold uppercase tracking-wider bg-[#1CBA5C] hover:bg-[#158C47] text-white shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transition-all">
                Quero organizar meu dinheiro
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
