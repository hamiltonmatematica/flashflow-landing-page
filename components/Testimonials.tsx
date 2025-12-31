
import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "João Vitor",
    date: "15. Setembro. 2025",
    text: '"O FlashFlow resolveu bem o meu problema, falta de clareza financeira. A visualização em dashboard facilitou o meu entendimento rápido, obrigado!"'
  },
  {
    name: "Andreiylson Silva",
    date: "26. Outubro. 2025",
    text: '"O que mais gostei foi bater o olho e entender tudo. Não preciso ficar interpretando números. Em pouco tempo já consegui cortar gastos que nem sabia que tinha."'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#050505] relative">
      <div className="max-w-5xl mx-auto space-y-16">
        <h2 className="text-3xl md:text-5xl font-bold text-center leading-tight">
          O que os nossos <span className="text-purple-500">usuários</span> estão falando da planilha:
        </h2>

        <div className="grid md:grid-cols-2 gap-8 relative">
           {/* Background blurred items */}
           <div className="absolute inset-0 -z-10 grid grid-cols-4 gap-4 opacity-20 blur-sm pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-zinc-800 p-8 rounded-lg"></div>
              ))}
           </div>

          {reviews.map((rev, i) => (
            <div key={i} className="bg-zinc-900/90 border border-white/5 p-8 rounded-2xl space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold">{rev.name}</h4>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">{rev.date}</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} className="fill-yellow-500 text-yellow-500" />)}
                  <div className="ml-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={10} className="text-white" />
                  </div>
                </div>
              </div>
              <p className="text-gray-300 italic leading-relaxed">{rev.text}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2">
           <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
           <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
           <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
           <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
        </div>

        <div className="flex justify-center pt-8">
          <button className="cta-button py-4 px-12 rounded-2xl text-lg font-bold uppercase">
            Quero organizar meu dinheiro
          </button>
        </div>
      </div>
    </section>
  );
};

import { CheckCircle2 } from 'lucide-react';
