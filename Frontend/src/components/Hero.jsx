import React, { useEffect, useState } from 'react';
import assets from '../assets/assets';

const Hero = () => {
  const heroImages = [assets.HeroImg, assets.HeroImg1, assets.HeroImg2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        setFade(true);
      }, 200); // Matches the CSS transition duration
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-container h-[150px] flex flex-col justify-center text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLER</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            LATEST ARRIVAL
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/* Hero Right Side */}
      <img
        src={heroImages[currentImageIndex]}
        className={`sm:rounded-r-xl w-full sm:w-1/2 object-cover h-auto transition-opacity duration-200 ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
        alt="Hero"
      />
    </div>
  );
};

export default Hero;
