'use client';

import { products } from '@/data/products';
import Image from 'next/image';
import { useEffect } from 'react';

interface FeaturesProps {
  selectedProductId: string | null;
}

export default function Features({ selectedProductId }: FeaturesProps) {
  useEffect(() => {
    if (selectedProductId) {
      // Scroll to the specific product section
      const element = document.getElementById(`product-${selectedProductId}`);
      if (element) {
        // Wait a bit for the section to render, then scroll
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });

          // Add highlight effect
          element.classList.add('highlight-product');
          setTimeout(() => {
            element.classList.remove('highlight-product');
          }, 2000);
        }, 100);
      }
    }
  }, [selectedProductId]);

  return (
    <>
      <style jsx>{`
        .highlight-product {
          animation: highlightPulse 2s ease-in-out;
        }
        
        @keyframes highlightPulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(234, 179, 8, 0);
          }
          50% {
            box-shadow: 0 0 30px 10px rgba(234, 179, 8, 0.5);
          }
        }
      `}</style>

      <section
        id="features"
        className="min-h-screen py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Product Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Detailed information about all our energy drinks
            </p>
          </div>

          {/* All Products Details */}
          <div className="space-y-16">
            {products.map((product) => (
              <div
                key={product.id}
                id={`product-${product.id}`}
                className="max-w-6xl mx-auto transition-all duration-300 rounded-3xl"
              >
                {/* Product Header with Image */}
                <div className={`bg-gradient-to-r ${product.color} rounded-t-2xl overflow-hidden shadow-xl`}>
                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    {/* Product Info - LEFT SIDE */}
                    <div className="flex flex-col justify-center text-white order-2 md:order-1">
                      <h3 className="text-5xl font-bold mb-4">
                        {product.name}
                      </h3>
                      <p className="text-3xl opacity-90 mb-6">
                        {product.flavor}
                      </p>
                      <p className="text-lg opacity-80 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Product Image - RIGHT SIDE */}
                    <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>

                {/* Features & Nutrition */}
                <div className="bg-gray-50 p-8 rounded-b-2xl shadow-lg">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* All Features */}
                    <div>
                      <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-3xl">✓</span> Key Features
                      </h4>
                      <div className="grid gap-4">
                        {product.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                          >
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-xl">
                              ✓
                            </div>
                            <span className="font-semibold text-gray-800 text-lg">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Nutrition Facts */}
                    <div>
                      <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-3xl">📊</span> Nutrition Facts
                      </h4>
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="space-y-6">
                          <div className="flex justify-between items-center p-5 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border-l-4 border-yellow-500">
                            <div>
                              <div className="text-gray-600 font-semibold text-sm mb-1">Caffeine Content</div>
                              <div className="text-4xl font-bold text-yellow-600">{product.caffeine}mg</div>
                            </div>
                            <div className="text-5xl">⚡</div>
                          </div>

                          <div className="flex justify-between items-center p-5 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border-l-4 border-blue-500">
                            <div>
                              <div className="text-gray-600 font-semibold text-sm mb-1">Calories per Can</div>
                              <div className="text-4xl font-bold text-blue-600">{product.calories}</div>
                            </div>
                            <div className="text-5xl">🔥</div>
                          </div>

                          <div className="p-5 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-lg">
                            <p className="text-sm text-gray-700 flex items-start gap-3">
                              <span className="text-2xl">💡</span>
                              <span>
                                <strong className="block mb-1">Pro Tip:</strong>
                                For optimal results, consume 20-30 minutes before your activity.
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-xl font-bold mb-3">Why Choose {product.name}?</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {product.features.map((feature, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}