
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-4 bg-black space-y-20 relative overflow-hidden border-t border-white/10">
      <div className="max-w-3xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">Ainda tem dúvidas?</h3>
          <p className="text-xl md:text-2xl text-gray-300">Fale comigo agora.</p>
        </div>

        <a href="https://wa.me/5521999612603" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto block">
          <button className="w-full md:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white py-6 px-12 rounded-[2rem] text-xl md:text-2xl font-extrabold flex items-center justify-center gap-4 transition-all shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 mx-auto">
            {/* WhatsApp Icon */}
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Chamar no WhatsApp
          </button>
        </a>
      </div>

      {/* Footer bottom */}
      <div className="max-w-6xl mx-auto pt-12 mt-12 border-t border-white/10">
        <div className="text-center space-y-4">
          <p className="text-gray-400 text-sm md:text-base">
            © 2025 FlashFlow - Todos os direitos reservados
          </p>
          <p className="text-gray-500 text-xs md:text-sm">
            Controle financeiro pessoal simples e eficiente
          </p>
        </div>
      </div>

      {/* Decorative large purple blur */}
      <div className="absolute right-0 top-10 w-96 h-96 bg-[#7C3AED] rounded-full blur-[200px] opacity-20 -z-10"></div>
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-[#6b1a7c] rounded-full blur-[180px] opacity-15 -z-10"></div>
    </footer>
  );
};
