'use client';

import { useState, useEffect, useRef } from 'react';

// News data
const newsArticles = [
  {
    id: 1,
    title: 'RIDE Launches New Ultra Formula',
    date: 'February 1, 2026',
    category: 'Product Launch',
    image: '/images/news1.jpg',
    excerpt: 'Introducing our most powerful energy formula yet with 200mg of caffeine and enhanced B-vitamins.',
    content: 'We are thrilled to announce the launch of RIDE Ultra, our most advanced energy drink formula to date. This new product features 200mg of caffeine, a comprehensive B-vitamin complex, and our proprietary energy blend designed for maximum performance. After two years of research and development, RIDE Ultra represents the pinnacle of energy drink innovation. The formula includes natural ingredients, zero artificial colors, and a refreshing tropical flavor that sets it apart from traditional energy drinks. Whether you\'re an athlete, gamer, or professional, RIDE Ultra delivers sustained energy without the crash.',
    color: 'from-blue-900 to-indigo-800'
  },
  {
    id: 2,
    title: 'RIDE Sponsors Major Esports Tournament',
    date: 'January 28, 2026',
    category: 'Esports',
    image: '/images/news2.jpg',
    excerpt: 'RIDE becomes official energy drink partner of the Global Gaming Championship.',
    content: 'RIDE Energy has officially partnered with the Global Gaming Championship, one of the world\'s largest esports tournaments. This partnership marks a significant milestone in our commitment to supporting the gaming community. The tournament will feature over 500 professional gamers competing for a $2 million prize pool across multiple games. RIDE will provide exclusive player lounges, energy drink stations, and special edition cans featuring tournament branding. Our RIDE Zero formula has become the preferred choice among professional gamers for its zero-sugar content and sustained energy delivery. We\'re excited to fuel the next generation of gaming champions.',
    color: 'from-blue-900 to-indigo-800'
  },
  {
    id: 3,
    title: 'Sustainability Initiative: 100% Recyclable Cans',
    date: 'January 15, 2026',
    category: 'Environment',
    image: '/images/news3.jpg',
    excerpt: 'RIDE commits to environmental responsibility with fully recyclable aluminum packaging.',
    content: 'As part of our ongoing commitment to environmental sustainability, RIDE Energy has transitioned all our packaging to 100% recyclable aluminum cans. This initiative eliminates over 50 tons of plastic waste annually and significantly reduces our carbon footprint. Our new cans are made from 70% recycled aluminum and can be recycled infinitely without losing quality. Additionally, we\'ve partnered with environmental organizations to support recycling programs in communities worldwide. Every RIDE can features clear recycling instructions and information about our sustainability efforts. We believe that powering your performance shouldn\'t come at the cost of our planet\'s health.',
    color: 'from-blue-900 to-indigo-800'
  },
  {
    id: 4,
    title: 'New Flavor Alert: RIDE Savage Lime',
    date: 'December 20, 2025',
    category: 'Product Launch',
    image: '/images/news4.jpg',
    excerpt: 'Experience the bold, refreshing taste of our newest flavor - Savage Lime.',
    content: 'Get ready for an explosion of flavor! RIDE Savage Lime is our latest creation, combining the perfect balance of tart lime with a hint of sweetness. This limited edition flavor has been in development for over a year, with taste tests involving thousands of energy drink enthusiasts. Savage Lime features our signature 160mg caffeine formula, enhanced with natural lime extract and zero artificial flavors. The response from our beta testers has been phenomenal, with 95% rating it as their new favorite RIDE flavor. Available now in select stores and online, Savage Lime is expected to sell out quickly, so grab yours today!',
    color: 'from-blue-900 to-indigo-800'
  },
  
];

export default function News() {
  const [selectedNews, setSelectedNews] = useState<typeof newsArticles[0] | null>(null);
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
    <>
      <section
        id="news"
        className="min-h-screen py-20 bg-indigo-50"
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
              Latest News
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest from RIDE Energy
            </p>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => setSelectedNews(article)}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                {/* News Image/Icon */}
                {/* News Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* News Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <button className="text-blue-500 font-semibold hover:blue-yellow-600 transition-colors flex items-center gap-2">
                    Read More
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Detail Modal/Popup */}
      {selectedNews && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedNews(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`bg-gradient-to-r ${selectedNews.color} p-8 text-white relative`}>
              

              <div className="h-[500px] w-full relative mb-6 rounded-xl overflow-hidden">
                <img
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-black px-4 py-1 bg-white bg-opacity-30 backdrop-blur-lg rounded-full text-sm font-semibold">
                  {selectedNews.category}
                </span>
                <span className="text-sm opacity-90">{selectedNews.date}</span>
              </div>

              <h2 className="text-4xl font-bold mb-3">
                {selectedNews.title}
              </h2>

              <p className="text-lg opacity-90">
                {selectedNews.excerpt}
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {selectedNews.content}
                </p>
              </div>

            
            </div>
          </div>
        </div>
      )}
    </>
  );
}