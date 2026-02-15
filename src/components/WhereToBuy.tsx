'use client';

import { useEffect } from 'react';
import Image from 'next/image';
interface WhereToBuyProps {
    selectedProductId?: string | null;
}

const retailers = [
    {
        id: 'cargills',
        name: 'Cargills Food City',
        description: 'Sri Lanka\'s leading supermarket chain with over 400 outlets island-wide',
        website: 'https://www.cargillsceylon.com',
        color: 'from-red-600 to-red-700',
        bgColor: 'bg-red-50',
        textColor: 'text-red-700',
        locations: '400+ Outlets',
        hours: 'Open 7 Days',
       image: '/images/Frame-261-1.png',
    },
     {
        id: 'glomark',
        name: 'Glomark',
        description: 'Your neighborhood supermarket bringing better life to home',
        website: 'https://www.keellssuper.com',
        color: 'from-green-600 to-green-700',
        bgColor: 'bg-green-50',
        textColor: 'text-green-700',
        locations: '100+ Locations',
        hours: 'Open Daily',
        image: '/images/unnamed.jpg',
    },
    {
        id: 'keells',
        name: 'Keells Super',
        description: 'Premium supermarket experience with 135+ stores across Sri Lanka',
        website: 'https://www.glomark.lk',
        color: 'from-blue-600 to-blue-700',
        bgColor: 'bg-blue-50',
        textColor: 'text-blue-700',
        locations: '135+ Stores',
        hours: 'Daily 8AM-10PM',
        image: '/images/GlomarkLogo.jpg',
    },
   
];

export default function WhereToBuy({ selectedProductId }: WhereToBuyProps) {
    useEffect(() => {
        if (selectedProductId) {
            const element = document.getElementById('where-to-buy');
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 100);
            }
        }
    }, [selectedProductId]);

    return (
        <>
            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(234, 179, 8, 0.3); }
          50% { box-shadow: 0 0 40px rgba(234, 179, 8, 0.6); }
        }
        
        .retailer-card:hover {
          transform: translateY(-8px);
        }
      `}</style>

            <section
                id="where-to-buy"
                className="min-h-screen py-20 bg-gradient-to-b from-gray-50 to-white"
            >
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="inline-block mb-4">
                            <span className="text-6xl float-animation">📍</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                            Where to Buy
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Find our premium energy drinks at these trusted retailers across Sri Lanka
                        </p>
                    </div>

                    {/* Retailers Grid */}
                    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
                        {retailers.map((retailer, index) => (
                            <div
                                key={retailer.id}
                                className="retailer-card bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Logo Section */}
                                <div className={`p-8 text-center relative overflow-hidden`}>
                                    <div className="absolute inset-0 opacity-10">
                                        <div className="absolute inset-0" style={{
                                            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`
                                        }}></div>
                                    </div>

                                    {/* Custom CSS Logo */}
                                    <div className="relative z-10">
                                        <div className="bg-white rounded-xl p-6 inline-block shadow-lg mb-4">
                                            <Image
                                                        src={retailer.image}
                                                        alt={retailer.name}
                                                        width={500}
                                                        height={400}
                                                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                                                      />
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-6">
                                    <p className="text-gray-700 mb-6 leading-relaxed min-h-[60px]">
                                        {retailer.description}
                                    </p>

                                    {/* Info Grid */}
                                    <div className="space-y-3 mb-6">
                                        <div className={`${retailer.bgColor} rounded-lg p-4 flex items-center gap-3`}>
                                            <span className="text-2xl">📍</span>
                                            <div>
                                                <div className="text-xs text-gray-600 font-semibold">LOCATIONS</div>
                                                <div className={`font-bold ${retailer.textColor}`}>{retailer.locations}</div>
                                            </div>
                                        </div>

                                        <div className={`${retailer.bgColor} rounded-lg p-4 flex items-center gap-3`}>
                                            <span className="text-2xl">🕐</span>
                                            <div>
                                                <div className="text-xs text-gray-600 font-semibold">HOURS</div>
                                                <div className={`font-bold ${retailer.textColor}`}>{retailer.hours}</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Visit Button */}
                                    <a
                                        href={retailer.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`energy-btn ${retailer.id === 'cargills' ? 'energy-btn-red' :
                                                retailer.id === 'keells' ? 'energy-btn-secondary' :
                                                    'energy-btn-green'
                                            } block w-full text-center`}
                                    >
                                        <span>Visit Website →</span>
                                    </a>
                                </div>

                                {/* Bottom Accent */}
                                <div className={`h-2 bg-gradient-to-r ${retailer.color}`}></div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Info Section */}
                    
                   
                </div>
            </section>
        </>
    );
}
