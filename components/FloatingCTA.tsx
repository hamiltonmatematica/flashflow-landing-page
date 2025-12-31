import React, { useState, useEffect } from 'react';

export const FloatingCTA: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show the floating CTA after scrolling 800px
            setIsVisible(window.scrollY > 800);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-2xl">
            <a href="https://pay.kiwify.com.br/lTezrlP" target="_blank" rel="noopener noreferrer" className="block">
                <button className="cta-button w-full py-5 px-8 rounded-[2rem] text-lg md:text-xl font-black uppercase tracking-widest shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-500/70 transition-all bg-[#1CBA5C] hover:bg-[#158C47] text-white">
                    Quero organizar meu dinheiro
                </button>
            </a>
        </div>
    );
};
