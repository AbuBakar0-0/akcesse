import React from 'react';
import header from '../assets/WEB& APPS DESIGN & DEVELOPMENT.png';
import { HashLink } from 'react-router-hash-link';

function Hero({ isMobileMenuOpen }) {
  return (
    <div className='container mx-auto w-full flex flex-col justify-between items-start h-[85vh] text-white p-10' id='home'>
      <div></div>
      <div>
        <img src={header} alt="" className='w-full h-auto '/>
        <h1 className='text-xl tracking-[0.5em] mt-4'>Grow your business online with us</h1>
      </div>
      
      {/* Conditionally render the scroll indicator */}
      {!isMobileMenuOpen && (
        <HashLink to="#contact" className='w-full flex flex-col justify-center items-center animate-bounce'>
          <span className='rotate-90 mb-8'>Scroll</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 bg-white text-black rounded-full p-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
          </svg>
        </HashLink>
      )}
    </div>
  );
}

export default Hero;