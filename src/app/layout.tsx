// This file wraps EVERY page on your website
// It's like the "master template"

import type { Metadata } from 'next'
//            ↑
//            └─ Type for SEO data

import { Inter } from 'next/font/google'
//       ↑
//       └─ Google font

import './globals.css'
// ↑ Import global styles

// Configure font
const inter = Inter({ 
  subsets: ['latin'],
  // ↑ Which characters to include
})

// SEO metadata
export const metadata: Metadata = {
  title: 'RIDE Energy Drinks - Unleash Your Energy',
  //     ↑ Shows in browser tab
  
  description: 'Premium energy drinks engineered for peak performance. Choose from Original, Zero, Ultra, and Extreme flavors.',
  //            ↑ Shows in search results
  
  keywords: ['energy drink', 'RIDE', 'caffeine', 'sports drink'],
  // ↑ Helps search engines understand your site
  
  authors: [{ name: 'RIDE Energy' }],
  
  openGraph: {
    // ↑ Data for social media sharing (Facebook, Twitter, etc.)
    title: 'RIDE Energy Drinks',
    description: 'Unleash Your Energy',
    type: 'website',
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
  // ↑ This will be your page content
}: {
  children: React.ReactNode
  // ↑ Type: can be any valid React element
}) {
  return (
    <html lang="en">
      {/* ↑ Language for accessibility */}
      
      <body className={inter.className}>
        {/* ↑ Apply font to whole site */}
        
        {children}
        {/* ↑ This is where page.tsx content appears */}
      </body>
    </html>
  )
}