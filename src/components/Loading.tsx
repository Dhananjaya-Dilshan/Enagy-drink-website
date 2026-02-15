'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface LoadingProps {
    onLoadingComplete?: () => void;
}

export default function Loading({ onLoadingComplete }: LoadingProps) {
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setIsComplete(true);
                        if (onLoadingComplete) {
                            setTimeout(onLoadingComplete, 500);
                        }
                    }, 300);
                    return 100;
                }
                return prev + 2;
            });
        }, 30);

        return () => clearInterval(interval);
    }, [onLoadingComplete]);

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-all duration-500 ${isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Blue Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-blue-600/10 to-black"></div>

                {/* Geometric Grid Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                {/* Animated Corner Accents */}
                <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-blue-500 animate-pulse"></div>
                <div className="absolute top-0 right-0 w-32 h-32 border-r-4 border-t-4 border-white animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 border-l-4 border-b-4 border-white animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-blue-500 animate-pulse" style={{ animationDelay: '0.9s' }}></div>
            </div>

            {/* Main Loading Content */}
            <div className="relative z-10 text-center">
                {/* Logo with Professional Frame */}
                <div className="mb-12 relative">
                    <div className="relative w-100 h-56 mx-auto">
                        {/* Blue Glow Effect */}
                        <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-30 animate-pulse"></div>

                        {/* Logo Image - No Border Radius */}
                        <div className="relative w-full h-full overflow-hidden border-4 border-blue-500 shadow-2xl">
                            <Image
                                src="/images/ride.jpg"
                                alt="RIDE Energy"
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Overlay gradient for depth */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
                        </div>

                        {/* Animated Corner Brackets */}
                        <div className="absolute -top-2 -left-2 w-12 h-12 border-l-4 border-t-4 border-white animate-pulse"></div>
                        <div className="absolute -top-2 -right-2 w-12 h-12 border-r-4 border-t-4 border-blue-400 animate-pulse"></div>
                        <div className="absolute -bottom-2 -left-2 w-12 h-12 border-l-4 border-b-4 border-blue-400 animate-pulse"></div>
                        <div className="absolute -bottom-2 -right-2 w-12 h-12 border-r-4 border-b-4 border-white animate-pulse"></div>
                    </div>
                </div>

                {/* Brand Name */}
                <h1 className="text-6xl font-bold mb-2 text-white tracking-wider">
                    RIDE
                </h1>

                <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-6"></div>

                <p className="text-lg text-gray-400 mb-12 uppercase tracking-widest font-light">
                    Energy Unleashed
                </p>

                {/* Progress Bar */}
                <div className="w-96 mx-auto mb-4">
                    <div className="h-1 bg-gray-800 overflow-hidden relative">
                        {/* Background track */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-blue-800/50"></div>

                        {/* Progress fill */}
                        <div
                            className="h-full bg-gradient-to-r from-blue-500 via-white to-blue-400 transition-all duration-300 ease-out relative"
                            style={{ width: `${progress}%` }}
                        >
                            {/* Animated Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
                        </div>
                    </div>

                    {/* Progress Percentage */}
                    <div className="mt-3 text-blue-400 font-bold text-sm tracking-wider">
                        {progress}%
                    </div>
                </div>

                {/* Loading Text */}
                <div className="flex items-center justify-center gap-2 text-gray-500 text-sm uppercase tracking-widest">
                    <span>Loading</span>
                    <div className="flex gap-1">
                        <span className="animate-bounce" style={{ animationDelay: '0s' }}>.</span>
                        <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>.</span>
                        <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>.</span>
                    </div>
                </div>
            </div>

            {/* CSS Animations */}
            <style jsx>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                
                .animate-shimmer {
                    animation: shimmer 1.5s infinite;
                }
            `}</style>
        </div>
    );
}
