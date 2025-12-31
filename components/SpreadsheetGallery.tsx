
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const mediaItems = [
    { type: 'image', src: 'Fotos planilha1.png', alt: 'FlashFlow Planilha - Tela 1' },
    { type: 'image', src: 'Fotos planilha2.png', alt: 'FlashFlow Planilha - Tela 2' },
    { type: 'image', src: 'Fotos planilha3.png', alt: 'FlashFlow Planilha - Tela 3' },
    { type: 'video', src: 'vídeo planilha.mp4', alt: 'Vídeo demonstrativo da planilha' },
    { type: 'image', src: 'Fotos planilha4.png', alt: 'FlashFlow Planilha - Tela 4' },
    { type: 'image', src: 'Fotos planilha5.png', alt: 'FlashFlow Planilha - Tela 5' },
    { type: 'image', src: 'Fotos planilha6.png', alt: 'FlashFlow Planilha - Tela 6' },
    { type: 'image', src: 'Fotos planilha7.png', alt: 'FlashFlow Planilha - Tela 7' },
];

export const SpreadsheetGallery: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
        }, 5000); // Muda a cada 5 segundos

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToPrevious = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
    };

    const goToNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
    };

    const goToSlide = (index: number) => {
        setIsAutoPlaying(false);
        setCurrentIndex(index);
    };

    const currentItem = mediaItems[currentIndex];

    return (
        <section className="py-24 px-4 bg-black relative overflow-hidden">
            <div className="max-w-6xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Veja como a <span className="text-purple-500">planilha funciona</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Interface simples e intuitiva que te mostra exatamente para onde seu dinheiro está indo
                    </p>
                </div>

                {/* Carrossel Principal */}
                <div className="relative max-w-5xl mx-auto">
                    <div className="relative bg-zinc-900/40 border border-white/10 rounded-3xl p-3 md:p-6 overflow-hidden">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/50">
                            {currentItem.type === 'image' ? (
                                <img
                                    src={currentItem.src}
                                    alt={currentItem.alt}
                                    className="w-full h-full object-contain"
                                />
                            ) : (
                                <video
                                    key={currentItem.src}
                                    controls
                                    muted
                                    playsInline
                                    className="w-full h-full object-contain"
                                    onPlay={() => setIsAutoPlaying(false)}
                                >
                                    <source src={currentItem.src} type="video/mp4" />
                                    Seu navegador não suporta vídeos.
                                </video>
                            )}
                        </div>

                        {/* Botões de Navegação */}
                        <button
                            onClick={goToPrevious}
                            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-purple-600/90 hover:bg-purple-700 text-white p-3 rounded-full transition-all shadow-lg z-10"
                            aria-label="Anterior"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={goToNext}
                            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-purple-600/90 hover:bg-purple-700 text-white p-3 rounded-full transition-all shadow-lg z-10"
                            aria-label="Próximo"
                        >
                            <ChevronRight size={24} />
                        </button>

                        {/* Indicador de Vídeo */}
                        {currentItem.type === 'video' && (
                            <div className="absolute top-4 right-4 bg-purple-600 px-3 py-1 rounded-full flex items-center gap-2 text-sm font-bold z-10">
                                <Play size={16} />
                                <span>VÍDEO</span>
                            </div>
                        )}
                    </div>

                    {/* Thumbnails / Indicadores */}
                    <div className="flex gap-3 mt-6 overflow-x-auto pb-2 justify-center">
                        {mediaItems.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${index === currentIndex
                                    ? 'border-purple-500 ring-2 ring-purple-500/50'
                                    : 'border-white/10 hover:border-purple-400'
                                    }`}
                            >
                                {item.type === 'image' ? (
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-purple-900/50 flex items-center justify-center">
                                        <Play size={24} className="text-white" />
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <a href="https://pay.kiwify.com.br/lTezrlP" target="_blank" rel="noopener noreferrer">
                        <button className="cta-button py-4 px-12 rounded-2xl text-lg font-bold uppercase">
                            Quero organizar meu dinheiro
                        </button>
                    </a>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute left-[-100px] top-1/3 w-[300px] h-[300px] bg-purple-600 rounded-full blur-3xl opacity-20 -z-10"></div>
            <div className="absolute right-[-100px] bottom-1/3 w-[250px] h-[250px] bg-purple-900 rounded-full blur-3xl opacity-20 -z-10"></div>
        </section>
    );
};
