
import React, { useState, useEffect } from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

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
  },
  {
    name: "Mariana Costa",
    date: "03. Novembro. 2025",
    text: '"Finalmente encontrei uma ferramenta que me ajuda a entender meu dinheiro sem complicação. Super recomendo!"'
  },
  {
    name: "Rafael Santos",
    date: "12. Novembro. 2025",
    text: '"Simples, direto e eficiente. Em uma semana já consegui identificar onde estava perdendo dinheiro. Vale muito a pena!"'
  },
  {
    name: "Juliana Alves",
    date: "18. Novembro. 2025",
    text: '"A melhor planilha financeira que já usei! Interface intuitiva e resultados rápidos. Consegui organizar minha vida financeira."'
  },
  {
    name: "Carlos Eduardo",
    date: "25. Novembro. 2025",
    text: '"Muito prático e fácil de usar. Não preciso ser especialista em finanças para entender meus gastos. Excelente!"'
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 4000); // Muda a cada 4 segundos

    return () => clearInterval(interval);
  }, [totalPages]);

  const visibleReviews = reviews.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section className="py-24 px-4 bg-[#050505] relative overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-16">
        <h2 className="text-3xl md:text-5xl font-bold text-center leading-tight">
          O que os nossos <span className="text-purple-500">usuários</span> estão falando da planilha:
        </h2>

        <div className="relative">
          {/* Background blurred items */}
          <div className="absolute inset-0 -z-10 grid grid-cols-4 gap-4 opacity-20 blur-sm pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-zinc-800 p-8 rounded-lg"></div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {visibleReviews.map((rev, i) => (
              <div
                key={`${currentIndex}-${i}`}
                className="bg-zinc-900/90 border border-white/5 p-8 rounded-2xl space-y-4 animate-fade-in"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold">{rev.name}</h4>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">{rev.date}</p>
                  </div>
                  <div className="flex gap-0.5 items-center">
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
        </div>

        <div className="flex justify-center gap-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === currentIndex ? 'bg-emerald-400' : 'bg-zinc-700'
                }`}
            />
          ))}
        </div>

        <div className="flex justify-center pt-8">
          <button className="cta-button py-4 px-12 rounded-2xl text-lg font-bold uppercase">
            Quero organizar meu dinheiro
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};
