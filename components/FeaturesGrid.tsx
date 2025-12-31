
import React from 'react';
import {
  TrendingUp,
  ArrowDownCircle,
  PieChart,
  Wallet,
  Target,
  CheckCircle2
} from 'lucide-react';

const features = [
  {
    icon: <TrendingUp className="text-black" />,
    title: "Suas entradas de dinheiro",
    items: ["Quanto você ganha no mês", "De onde vem cada valor", "Qual é sua renda total real"]
  },
  {
    icon: <ArrowDownCircle className="text-black" />,
    title: "Seus gastos de verdade",
    items: ["Quanto você gasta no mês", "Onde mais consome", "Onde estão os gastos invisíveis"]
  },
  {
    icon: <PieChart className="text-black" />,
    title: "Para onde o dinheiro está indo",
    items: ["Um resumo visual dos gastos", "Comparação clara", "Identificação rápida de gastos"]
  },
  {
    icon: <Wallet className="text-black" />,
    title: "Seu saldo real",
    items: ["Quanto sobra no fim do mês", "Visão clara dos ajustes", "Nada de surpresas"]
  },
  {
    icon: <Target className="text-black" />,
    title: "Investimentos e metas",
    items: ["Acompanhamento simples", "Visualização das suas metas", "Clareza para planejar"]
  },
  {
    icon: <CheckCircle2 className="text-black" />,
    title: "Tomada de decisão com confiança",
    items: ["Entenda seus hábitos", "Saiba onde cortar ou ajustar", "Tome decisões certeiras"]
  }
];

export const FeaturesGrid: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-gradient-to-br from-[#7C3AED] to-[#5a0a6f] border border-white/20 p-8 rounded-3xl space-y-6 hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-2xl shadow-purple-900/30">
            <div className="bg-white p-4 rounded-2xl w-fit shadow-lg">
              {React.cloneElement(feature.icon as React.ReactElement, { size: 36 })}
            </div>
            <h3 className="text-xl md:text-2xl font-extrabold text-white leading-tight">{feature.title}</h3>
            <ul className="space-y-3">
              {feature.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-base text-gray-100">
                  <span className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Call to action button */}
      <div className="flex justify-center mt-16">
        <a href="https://pay.kiwify.com.br/lTezrlP" target="_blank" rel="noopener noreferrer">
          <button className="cta-button py-5 px-4 md:px-6 rounded-xl text-lg md:text-xl font-bold uppercase tracking-wider shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transition-all">
            Quero organizar meu dinheiro
          </button>
        </a>
      </div>
    </section>
  );
};
