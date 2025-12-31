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
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-4xl flex justify-center">
            <a href="https://pay.kiwify.com.br/lTezrlP" target="_blank" rel="noopener noreferrer">
                <button className="cta-button py-5 px-4 md:px-6 rounded-xl text-lg md:text-xl font-bold uppercase tracking-wider shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transition-all text-center">
                    Quero organizar meu dinheiro
                </button>
            </a>
        </div>
    );
};
