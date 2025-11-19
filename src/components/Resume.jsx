import React from 'react'
import resumePdf from '../assets/resume_shivashlok.pdf'

export default function Resume() {
  return (
    <section id="resume" className="py-20 px-6 bg-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10 text-center">
          <div className="mb-6">
            <span className="text-6xl">📄</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Download My Resume
          </h2>
          
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Get a comprehensive overview of my experience, skills, and achievements. 
            Available in PDF format for easy viewing and printing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={resumePdf} 
              download="resume_Shivashlok.pdf"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download PDF</span>
            </a>

            <a 
              href={resumePdf} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>View Online</span>
            </a>
          </div>

          <p className="text-gray-500 text-sm mt-6">
            Last updated: November 2025
          </p>
        </div>
      </div>
    </section>
  )
}
