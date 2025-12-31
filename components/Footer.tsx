
import React from 'react';
import { MessageCircle, Star } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-4 bg-black space-y-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center pb-12">
           <p className="text-purple-500 font-bold uppercase tracking-widest text-sm mb-12">
             Atenção: essa condição é limitada e pode se encerrar a qualquer momento!
           </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center">
            {/* Massive Number 7 with gradient */}
            <div className="relative">
              <span className="text-[15rem] md:text-[20rem] font-black leading-none bg-gradient-to-b from-purple-500 to-purple-900 bg-clip-text text-transparent opacity-80 select-none">7</span>
              <div className="absolute bottom-16 left-0 space-y-2">
                 <h4 className="text-4xl font-black uppercase leading-tight">Dias de<br/>Garantia</h4>
                 <div className="flex gap-1">
                   {[...Array(5)].map((_, i) => <Star key={i} size={24} className="fill-purple-500 text-purple-500" />)}
                 </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
             <h4 className="text-3xl font-bold">Meu compromisso com a sua satisfação durante <span className="text-purple-500">7 dias</span></h4>
             <p className="text-xl text-gray-300">Quero te dar total segurança na tomada de decisão.</p>
             <p className="text-gray-400 leading-relaxed">
               Você poderá solicitar o cancelamento e reembolso integral em até 7 dias após a compra, caso não queira mais continuar com a planilha.
             </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center space-y-12">
         <div className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-bold">Ainda tem dúvida?</h3>
            <p className="text-xl text-gray-400">Fale com comigo agora.</p>
         </div>

         <button className="w-full md:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white py-6 px-12 rounded-[2rem] text-2xl font-bold flex items-center justify-center gap-4 transition-all shadow-[0_0_50px_-10px_rgba(37,211,102,0.4)] mx-auto">
            <MessageCircle size={32} />
            Chamar no WhatsApp
         </button>
      </div>

      {/* Decorative large square */}
      <div className="absolute right-10 top-10 w-64 h-64 bg-purple-600 rounded-[4rem] blur-2xl opacity-40 -z-10"></div>
    </footer>
  );
};
