import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import logowhite from '../assets/logo-white.png';
import line from '../assets/Line 1.png';
import { HashLink } from 'react-router-hash-link';
import Hero from '../sections/Hero';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`py-2 shadow-md sticky top-0 transition-colors duration-300 ${isScrolled ? 'backdrop-blur-xl bg-opacity-100' : 'bg-transparent'}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <img src={!isScrolled ? logo : logowhite} alt="Logo" className="w-auto h-10" />
            </div>
            <div className="flex items-center">
              <button
                type="button"
                className="p-2 rounded-md text-white hover:bg-gradient-to-r from-primary to-secondary"
                onClick={toggleMobileMenu}
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-gradient-to-l from-[#131313] to-[#052b7b] flex flex-col items-center justify-center w-screen h-screen z-10">
            <button
              type="button"
              className="absolute top-5 right-5 md:right-36 bg-white p-2 rounded-md text-primary hover:bg-primary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <HashLink to="#home" className="text-white text-2xl mb-6 hover:text-gray-400" onClick={toggleMobileMenu}>Home</HashLink>
            <HashLink to="#about" className="text-white text-2xl mb-6 hover:text-gray-400" onClick={toggleMobileMenu}>About</HashLink>
            <HashLink to="#services" className="text-white text-2xl mb-6 hover:text-gray-400" onClick={toggleMobileMenu}>Services</HashLink>
            <HashLink to="#portfolio" className="text-white text-2xl mb-6 hover:text-gray-400" onClick={toggleMobileMenu}>Portfolio</HashLink>
            <HashLink to="#contact" className="text-white text-2xl mb-6 hover:text-gray-400" onClick={toggleMobileMenu}>Contact</HashLink>
          </div>
        )}
        <img src={line} alt="" className='w-full' />
      </nav>
      <Hero isMobileMenuOpen={isMobileMenuOpen}/>
    </>
  );
};

export default Navbar;
