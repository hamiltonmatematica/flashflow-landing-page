import React from 'react';

export const IconsSection: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-black">
            <div className="max-w-5xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-white">
                    Compatível com suas ferramentas favoritas
                </h3>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
                    {/* Google Sheets Icon */}
                    <div className="flex flex-col items-center gap-4 group">
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 group-hover:border-emerald-500/50 transition-all shadow-lg group-hover:scale-110">
                            <span className="text-5xl md:text-6xl">📊</span>
                        </div>
                        <p className="text-sm md:text-base font-extrabold text-gray-200 text-center">Google Sheets</p>
                    </div>

                    {/* Excel Icon */}
                    <div className="flex flex-col items-center gap-4 group">
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 group-hover:border-emerald-500/50 transition-all shadow-lg group-hover:scale-110">
                            <span className="text-5xl md:text-6xl">📈</span>
                        </div>
                        <p className="text-sm md:text-base font-extrabold text-gray-200 text-center">Microsoft Excel</p>
                    </div>

                    {/* Numbers Icon */}
                    <div className="flex flex-col items-center gap-4 group">
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 group-hover:border-emerald-500/50 transition-all shadow-lg group-hover:scale-110">
                            <span className="text-5xl md:text-6xl">💹</span>
                        </div>
                        <p className="text-sm md:text-base font-extrabold text-gray-200 text-center">Numbers</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
