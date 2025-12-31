
import React from 'react';
import { CreditCard, ShieldCheck, Lock } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-zinc-900/40 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center space-y-8">

          <div className="space-y-2">
            <p className="text-xl text-gray-400">De <span className="line-through decoration-red-500 decoration-2">R$ 47,00</span> por</p>
            <h3 className="text-7xl md:text-9xl font-black text-white">R$ 27,00</h3>
          </div>

          <a href="https://pay.kiwify.com.br/lTezrlP" target="_blank" rel="noopener noreferrer" className="block">
            <button className="cta-button w-full py-6 px-8 rounded-[2rem] text-xl font-black uppercase tracking-widest mt-8">
              Quero organizar meu dinheiro
            </button>
          </a>

        </div>
      </div>
    </section>
  );
};
