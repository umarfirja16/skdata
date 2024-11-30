"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export function PartnerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const partners = [
    { src: "/assets/logos/partner1-logo.png", alt: "Partner 1" },
    { src: "/assets/logos/partner2-logo.png", alt: "Partner 2" },
    { src: "/assets/logos/partner3-logo.png", alt: "Partner 3" },
    { src: "/assets/logos/partner4-logo.png", alt: "Partner 4" },
    { src: "/assets/logos/partner5-logo.png", alt: "Partner 5" },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + partners.length) % partners.length
    );
  };

  // Auto slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={handlePrev}>
        &#8249; {/* Left arrow */}
      </button>
      <div className="carousel-slide">
        <Image
          src={partners[currentIndex].src}
          alt={partners[currentIndex].alt}
          width={200}
          height={100}
          className="carousel-image"
        />
      </div>
      <button className="carousel-button next" onClick={handleNext}>
        &#8250; {/* Right arrow */}
      </button>
    </div>
  );
}
