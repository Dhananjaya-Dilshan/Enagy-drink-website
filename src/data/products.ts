import { Product } from '@/types';

export const products: Product[] = [
 
  {
    id: '2',
    name: 'RIDE Classic',
    flavor: 'Berry Blast',
    price: 2.99,
    description: 'Our classic energy drink with a refreshing citrus flavor that delivers sustained energy throughout your day.',
    caffeine: 160,
    calories: 10,
    image: '/images/blue.jpg',
    features: ['Zero Sugar', '10 Calories', '160mg Caffeine', 'Sugar-Free'],
    color: 'bg-gradient-to-r from-purple-400 to-pink-500'
  },
   {
    id: '1',
    name: 'RIDE Red berry',
    flavor: 'Citrus Burst',
    price: 2.99,
    description: 'Extreme energy for extreme athletes. Enhanced with performance-boosting ingredients for those who push limits.',
    caffeine: 160,
    calories: 110,
    image: '/images/red.jpg',
    features: ['160mg Caffeine', 'B-Vitamins', 'Taurine', 'Natural Flavors'],
    color: 'bg-gradient-to-r from-yellow-400 to-orange-500'
  },
  {
    id: '3',
    name: 'RIDE Glow apple',
    flavor: 'Tropical Thunder',
    price: 3.49,
    description: 'Maximum power for maximum performance. Our strongest formula with enhanced energy blend and exotic tropical taste.',
    caffeine: 200,
    calories: 120,
    image: '/images/green.jpg',
    features: ['200mg Caffeine', 'Energy Blend', 'L-Carnitine', 'Tropical Flavor'],
    color: 'bg-gradient-to-r from-green-400 to-blue-500'
  },
  {
    id: '4',
    name: 'RIDE Suger free',
    flavor: 'Savage Lime',
    price: 3.49,
    description: 'Zero sugar, maximum energy! Perfect for those watching their calorie intake without compromising on performance.',
    caffeine: 240,
    calories: 130,
    image: '/images/lumeness blue.jpg',
    features: ['240mg Caffeine', 'BCAAs', 'Electrolytes', 'Extreme Performance'],
    color: 'bg-gradient-to-r from-red-500 to-orange-600'
  },
  
];

export const features = [
  {
    icon: '⚡',
    title: 'Instant Energy',
    description: 'Feel the power within seconds of your first sip'
  },
  {
    icon: '🎯',
    title: 'Enhanced Focus',
    description: 'Stay sharp and focused throughout your day'
  },
  {
    icon: '💪',
    title: 'Peak Performance',
    description: 'Maximize your physical and mental capabilities'
  },
  {
    icon: '🌿',
    title: 'Natural Ingredients',
    description: 'Made with premium natural flavors and ingredients'
  },
];