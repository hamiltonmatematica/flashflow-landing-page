
import React from 'react';
import { CreditCard, ShieldCheck, Lock } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-zinc-900/40 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center space-y-8 overflow-hidden">

          {/* Logo Badge */}
          <div className="absolute top-10 left-10 flex items-center gap-2 bg-purple-600 px-4 py-2 rounded-lg">
            <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
              <span className="text-[10px] font-bold">X</span>
            </div>
            <div>
              <p className="text-[10px] font-bold leading-none">Planilha</p>
              <p className="text-[8px] leading-none opacity-70">Simples, fácil e rápido.</p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xl text-gray-400">De <span className="line-through decoration-red-500 decoration-2">R$ 47,00</span> por</p>
            <h3 className="text-6xl md:text-9xl font-black text-white whitespace-nowrap">R$ 27,00</h3>
          </div>

          <div className="text-center">
            <a href="https://pay.kiwify.com.br/lTezrlP" target="_blank" rel="noopener noreferrer">
              <button className="cta-button py-5 px-4 md:px-6 rounded-xl text-lg md:text-xl font-bold uppercase tracking-wider shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transition-all">
                Quero organizar meu dinheiro
              </button>
            </a>
          </div>

          <div className="pt-8 space-y-8">
            {/* Payment Icons Simulation */}
            <div className="flex flex-wrap justify-center gap-6 opacity-40">
              <div className="text-xs font-bold border border-white px-2 py-1 rounded">BOLETO</div>
              <div className="text-xs font-bold">VISA</div>
              <div className="text-xs font-bold">MASTER</div>
              <div className="text-xs font-bold">AMEX</div>
              <div className="text-xs font-bold">PAYPAL</div>
              <div className="text-xs font-bold">G Pay</div>
              <div className="text-xs font-bold">PIX</div>
            </div>

            <div className="flex justify-center gap-8 text-[10px] text-gray-500 uppercase font-bold">
              <div className="flex items-center gap-1"><ShieldCheck size={14} /> Compra Segura</div>
              <div className="flex items-center gap-1"><ShieldCheck size={14} /> Satisfação Garantida</div>
              <div className="flex items-center gap-1"><Lock size={14} /> Privacidade Protegida</div>
            </div>
          </div>

          {/* Decorative glass bits */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-600 rounded-3xl -z-10 blur-3xl opacity-30"></div>
          <div className="absolute top-20 right-10 w-32 h-32 glass-card rounded-2xl -z-10 opacity-40"></div>
        </div>
      </div>

      {/* Background large floating squares */}
      <div className="absolute left-[-2rem] bottom-[10%] w-48 h-48 bg-purple-600 rounded-[3rem] blur-sm opacity-60"></div>
      <div className="absolute right-[-2rem] top-[10%] w-32 h-32 bg-purple-900 rounded-[2rem] blur-sm opacity-40"></div>
    </section>
  );
};
