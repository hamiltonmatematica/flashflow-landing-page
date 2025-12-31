
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
    items: ["Quanto você gasta no mês", "Onde mais consome", "Onde estão os gatos invisíveis"]
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
    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-purple-600/20 border border-purple-500/20 p-8 rounded-3xl space-y-6 hover:bg-purple-600/30 transition-colors">
            <div className="bg-white p-3 rounded-xl w-fit">
              {React.cloneElement(feature.icon as React.ReactElement, { size: 32 })}
            </div>
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <ul className="space-y-3">
              {feature.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Call to action button */}
      <div className="flex justify-center mt-12">
        <a href="#para-quem-e">
          <button className="bg-purple-600 hover:bg-purple-700 text-white py-4 px-12 rounded-full text-lg font-bold transition-all duration-300 shadow-lg shadow-purple-500/30">
            Para quem é?
          </button>
        </a>
      </div>
    </section>
  );
};
