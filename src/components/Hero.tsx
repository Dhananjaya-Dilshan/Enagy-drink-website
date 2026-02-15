'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
 
  {
    video: '/videos/classic.mp4',
    title: ' CLASSIC',
    description: 'The original energy rush',
    color: 'bg-gradient-to-r from-blue-800 to-blue-500'
  },
   {
    video: '/videos/red-berry.mp4',
    title: ' RED BERRY',
    description: 'Experience the explosive fusion of wild berries',
    color: 'bg-gradient-to-r from-red-800 to-red-500'
  },
  {
    video: '/videos/sugar-free.mp4',
    title: ' SUGAR FREE',
    description: 'Zero sugar, maximum energy',
    color: 'from-blue-600 to-cyan-600'
  },
  {
    video: '/videos/green-apple.mp4',
    title: ' GREEN APPLE',
    description: 'Crisp, refreshing, unstoppable',
    color: 'from-green-500 to-emerald-600'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  // Play current video when slide changes
  useEffect(() => {
    const currentVideo = videoRefs.current[currentSlide];
    if (currentVideo) {
      currentVideo.play().catch(error => {
        console.log('Video autoplay prevented:', error);
      });
    }
  }, [currentSlide]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Video Backgrounds */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <video
            ref={(el) => { videoRefs.current[index] = el; }}
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay={index === 0}
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src={slide.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                index === currentSlide
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10 absolute'
              }`}
            >
              <h1
                className={`text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r ${slide.color} bg-clip-text text-transparent animate-fadeIn`}
              >
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 animate-fadeIn">
                {slide.description}
              </p>
              
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all disabled:opacity-50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>
      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all disabled:opacity-50"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-12 h-3 bg-white'
                : 'w-3 h-3 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}