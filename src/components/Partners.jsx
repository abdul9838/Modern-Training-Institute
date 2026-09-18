"use client";
import { useRef, useEffect } from 'react';

export default function Partners() {
  // The exact logos extracted from your provided HTML content
  const partnerLogos = [
    { src: "https://modernskill.in/wp-content/uploads/2025/02/AISD.jpg", alt: "AISD" },
    { src: "https://modernskill.in/wp-content/uploads/2025/01/png-transparent-citigroup-citibank-uganda-logo-credit-card-blue-company-text-thumbnail-removebg-preview.png", alt: "Citibank" },
    { src: "https://modernskill.in/wp-content/uploads/2025/01/footer-logo-removebg-preview.png", alt: "Partner Logo" },
    { src: "https://modernskill.in/wp-content/uploads/2025/01/6899ff91faecd2acccbf4e87020bd8ba-removebg-preview.png", alt: "Partner Logo" },
    { src: "https://modernskill.in/wp-content/uploads/2025/01/Text-invtorDark-removebg-preview.png", alt: "Inventor Dark" },
    { src: "https://modernskill.in/wp-content/uploads/2025/01/WhatsApp_Image_2025-01-02_at_1.06.21_PM-removebg-preview.png", alt: "Partner Logo" },
    { src: "https://modernskill.in/wp-content/uploads/2025/01/png-clipart-ministry-of-skill-development-and-entrepreneurship-skill-india-government-of-india-logistics-sector-skill-council-skill-india-logo-text-logo-thumbnail-removebg-preview.png", alt: "Ministry of Skill Development" },
    { src: "https://modernskill.in/wp-content/uploads/2025/01/png-clipart-government-of-india-ministry-of-micro-small-and-medium-enterprises-small-business-india-text-logo-removebg-preview.png", alt: "Ministry of MSME" },
  ];

  // Duplicate the array to create a seamless infinite loop
  const duplicatedLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section className="py-16 overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-blue">
          Affiliations, Accreditations and CSR Project Partners
        </h2>
      </div>

      {/* Infinite Scrolling Logo Carousel */}
      <div className="relative w-full flex overflow-x-hidden">
        {/* Gradient Fade Edges */}
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-brand-lightGray to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-brand-lightGray to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Track */}
        <div className="flex animate-scroll whitespace-nowrap gap-16 px-8">
          {duplicatedLogos.map((logo, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-40 h-24 md:w-48 md:h-28 flex items-center justify-center bg-white rounded-2xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow"
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Custom Animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}