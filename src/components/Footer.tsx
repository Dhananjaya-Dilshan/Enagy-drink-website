'use client';
import Image from 'next/image';
export default function Footer() {


  return (
    <footer
      id="contact"
      className="text-white bg-[url('/images/all.jpg')] bg-cover bg-[center_80%] bg-no-repeat "
    >
      <div className="bg-black/60 backdrop-blur-xs">

        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

            {/* 1. Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-4xl">⚡</span>
                <span className="text-2xl font-bold">RIDE</span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Everyone's got their own unique way of life and Ride gives you the power to live your life the way you want
              </p>
              {/* Social Media (Moved here often looks good, but I will keep it with Contact or separate if preferred. I'll stick to plan: Col 4 has contact info + socials) */}
              <div className="flex gap-4">
<div className="flex gap-4">
  <a
    href="https://www.facebook.com/p/Ride-Energy-Drink-61551394352392/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-white transition-all hover:scale-110"
  >
    <Image
      src="/images/facebook.png"
      alt="Facebook"
      width={20}
      height={20}
      className="object-contain"
    />
  </a>

  <a
    href="https://www.instagram.com/rideenergydrink/?hl=en"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-white transition-all hover:scale-110"
  >
    <Image
      src="/images/instagram.png"
      alt="Instagram"
      width={20}
      height={20}
      className="object-contain"
    />
  </a>
</div>

                
              </div>
            </div>

            {/* 2. Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-300 text-base">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#news" className="hover:text-white transition-colors">News</a></li>
              </ul>
            </div>

            {/* 3. Legal */}
            <div>
              <h4 className="font-bold text-lg mb-6">Legal</h4>
              <ul className="space-y-3 text-gray-300 text-base">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
              </ul>
            </div>

            {/* 4. Contact Information */}
            <div>
              <h4 className="font-bold text-lg mb-6">Contact Us</h4>
              <div className="space-y-4 text-gray-300 text-base">
                <div className="flex items-start gap-3">
                  <span className="text-xl">📍</span>
                  <p>No. 40, York Street, Colombo 01</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">📧</span>
                  <a href="mailto:info@RIDEenergy.com" className="hover:text-white transition-colors">contact@cargillsceylon.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">📞</span>
                  <a href="tel:+15551234567" className="hover:text-white transition-colors">
+94 11 242 7777<br/>+94 11 242 7500</a>
                </div>
              </div>
            </div>

          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-gray-800">
            <p className="text-gray-300 text-base">
              © 2026 RIDE Energy Drinks. All rights reserved.
            </p>
                       <p className="text-gray-300 text-base">
              Designed by Dhananajaya Dilshan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}