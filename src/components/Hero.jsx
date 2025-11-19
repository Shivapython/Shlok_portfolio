import React from 'react'
import MobileMenu from './MobileMenu'

export default function Hero(){
  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center p-8 pt-12">
      {/* Video Container with Rounded Corners */}
      <div className="relative w-full rounded-[3rem] overflow-hidden shadow-2xl" style={{height: '92vh', maxWidth: '1145px'}}>
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Video Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Main Content Overlay */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
          {/* Main Title */}
          <h1 className="hero-text mb-8 text-white drop-shadow-2xl">
            SHIVASHLOK
          </h1>
          
          {/* Subtitle */}
          <p className="hero-subtitle opacity-95 mb-16 max-w-4xl text-gray-100 drop-shadow-lg">
            Software Engineer / AI/ML Developer / Full-Stack Developer
          </p>
        </div>

        {/* Bottom Navigation - Inside the video container */}
        <div className="absolute bottom-12 left-0 right-0 z-10 hidden md:block">
          <div className="flex justify-center space-x-16 md:space-x-20">
            <div className="ha-has-bg-overlay ha-link-hover happy-addon">
              <div className="elementor-widget-container">
                <div className="ha_content__item">
                  <a 
                    href="#about" 
                    className="ha-link ha-link--helike"
                    rel="nofollow"
                  >
                    <span>ABOUT</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="ha-has-bg-overlay ha-link-hover happy-addon">
              <div className="elementor-widget-container">
                <div className="ha_content__item">
                  <a 
                    href="#works" 
                    className="ha-link ha-link--helike"
                    rel="nofollow"
                  >
                    <span>PROJECTS</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="ha-has-bg-overlay ha-link-hover happy-addon">
              <div className="elementor-widget-container">
                <div className="ha_content__item">
                  <a 
                    href="#contact" 
                    className="ha-link ha-link--helike"
                    rel="nofollow"
                  >
                    <span>CONTACT</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu />

    </section>
  )
}
