'use client';

import { products } from '@/data/products';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface ProductsProps {
  onProductClick: (productId: string) => void;
}

export default function Products({ onProductClick }: ProductsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="products"
      className="min-h-screen py-20 bg-blue-50"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl font-bold mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ride is a formulated caffeinated beverage from Kist. Try it out your power today.
          </p>
        </div>

        {/* Products Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => onProductClick(product.id)}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group w-full max-w-sm mx-auto"
              >
                {/* Product Image */}
                <div className="h-72 w-full bg-gray-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {product.flavor}
                  </p>

                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Nutrition Info */}
                  <div className="flex justify-between text-sm mb-4 py-2 border-t border-b">
                    <div>
                      <div className="text-gray-500">Caffeine</div>
                      <div className="font-bold">{product.caffeine}mg</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Calories</div>
                      <div className="font-bold">{product.calories}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}