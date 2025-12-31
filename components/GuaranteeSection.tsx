import React from 'react';
import { Shield, CheckCircle } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
    return (
        <section className="py-24 px-4 bg-black">
            <div className="max-w-6xl mx-auto">
                {/* Attention header */}
                <div className="text-center mb-16">
                    <p className="text-2xl md:text-3xl font-bold">
                        <span className="text-[#7C3AED]">Atenção:</span>
                        <span className="text-white"> essa condição é limitada e pode se encerrar a qualquer momento!</span>
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Left: Large 7 with guarantee text */}
                    <div className="relative flex items-center justify-center">
                        {/* Giant 7 */}
                        <div className="relative text-center">
                            <div className="text-[18rem] md:text-[22rem] font-black leading-none text-[#7C3AED] opacity-90">
                                7
                            </div>

                            {/* Overlaying text */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-2 text-center">
                                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight whitespace-nowrap">
                                    DIAS DE<br />
                                    GARANTIA
                                </h2>

                                {/* 5 stars */}
                                <div className="flex gap-1 justify-center">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-white text-2xl">★</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Guarantee description */}
                    <div className="space-y-8">
                        <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                            Meu compromisso com a sua satisfação durante <span className="text-[#7C3AED]">7 dias</span>
                        </h3>

                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            Quero te dar total segurança na tomada de decisão.
                        </p>

                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            Você poderá solicitar o cancelamento e reembolso integral em até 7 dias após a compra, caso não queira mais continuar com a planilha.
                        </p>

                        <div className="pt-6">
                            <a href="https://pay.kiwify.com.br/lTezrlP" target="_blank" rel="noopener noreferrer">
                                <button className="bg-[#1CBA5C] hover:bg-[#158C47] text-white py-5 px-10 rounded-xl text-lg md:text-xl font-extrabold uppercase tracking-wider shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transition-all">
                                    Começar agora sem risco
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
