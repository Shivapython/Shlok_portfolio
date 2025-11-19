import React from 'react'
import profileImg from '../assets/profile.jpg'

export default function About(){
  return (
    <section id="about" className="py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title mb-16 text-center text-white">PROFILE</h2>
        
        <div className="grid lg:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="w-64 h-80 bg-gray-800 rounded-lg overflow-hidden border border-gray-600 profile-image blurred-bg">
              <img 
                src={profileImg} 
                alt="Shivashlok HN" 
                className="w-full h-full object-cover object-center smooth-skin"
              />
            </div>
          </div>

          {/* Profile Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-light mb-2 text-white">SHIVASHLOK HN</h3>
              <p className="content-text opacity-80 mb-6 text-gray-300">
                Bangalore, India - Software Engineer
              </p>
              
              <p className="content-text opacity-80 mb-6 text-gray-300">
                Software Engineer / AI/ML Developer / Full-Stack Developer
              </p>
            </div>

            <div className="space-y-4 content-text opacity-90 text-gray-200">
              <p>
                I am a versatile Software Engineer with expertise in Java, AI/ML, and full-stack web development. My hands-on experience includes building scalable web apps and deploying AI models with remarkable accuracy.
              </p>
              
              <p>
                I thrive on integrating intelligent systems with robust engineering practices to create impactful digital solutions, making technology accessible and efficient for everyday users.
              </p>
              
              <p>
                Currently pursuing Bachelor of Technology in Computer Science and Engineering at Vellore Institute of Technology, with professional experience at Prayana Electrics developing EV solutions.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-700">
              <div className="grid sm:grid-cols-2 gap-6 text-sm opacity-70 text-gray-400">
                <div>
                  <h4 className="font-medium mb-2 text-gray-300">Location</h4>
                  <p>Bangalore, India</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-gray-300">Education</h4>
                  <p>VIT Andhra Pradesh<br />Computer Science & Engineering</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-gray-300">Specialization</h4>
                  <p>AI/ML Development<br />Full-Stack Web Development<br />Cloud Architecture</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-gray-300">Certifications</h4>
                  <p>Microsoft Azure AI-900<br />Oracle Generative AI<br />AWS Cloud Architecting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
