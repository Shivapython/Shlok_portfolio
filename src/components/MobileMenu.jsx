import React, { useState } from 'react'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Hamburger Menu Button */}
      <button 
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-50 flex flex-col space-y-1 p-3 hover:scale-110 transition-transform duration-300 ease-out"
        aria-label="Toggle menu"
      >
        <div className={`w-8 h-0.5 bg-white transition-all duration-400 ease-out ${isOpen ? 'rotate-45 translate-y-1.5' : 'hover:bg-gray-300'}`}></div>
        <div className={`w-8 h-0.5 bg-white transition-all duration-400 ease-out ${isOpen ? 'opacity-0' : 'hover:bg-gray-300'}`}></div>
        <div className={`w-8 h-0.5 bg-white transition-all duration-400 ease-out ${isOpen ? '-rotate-45 -translate-y-1.5' : 'hover:bg-gray-300'}`}></div>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black bg-opacity-95 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="h-full flex flex-col justify-center items-center space-y-12">
          <a 
            href="#about" 
            onClick={toggleMenu}
            className="mobile-nav-link group cursor-pointer"
          >
            <span className="text-white text-2xl md:text-3xl font-light tracking-widest group-hover:text-gray-300 transition-all duration-500 ease-out">
              ABOUT
            </span>
            <div className="mobile-nav-underline"></div>
          </a>
          <a 
            href="#works" 
            onClick={toggleMenu}
            className="mobile-nav-link group cursor-pointer"
          >
            <span className="text-white text-2xl md:text-3xl font-light tracking-widest group-hover:text-gray-300 transition-all duration-500 ease-out">
              WORKS
            </span>
            <div className="mobile-nav-underline"></div>
          </a>
          <a 
            href="#contact" 
            onClick={toggleMenu}
            className="mobile-nav-link group cursor-pointer"
          >
            <span className="text-white text-2xl md:text-3xl font-light tracking-widest group-hover:text-gray-300 transition-all duration-500 ease-out">
              CONTACT
            </span>
            <div className="mobile-nav-underline"></div>
          </a>
        </div>
      </div>
    </>
  )
}
