import React from 'react'

export default function Footer(){
  return (
    <footer className="border-t border-gray-700 bg-black/20 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm opacity-70 font-light text-gray-300">
            © {new Date().getFullYear()} shivashlok2004@gmail.com, All Rights Reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm opacity-70 text-gray-300">
            <a href="https://github.com/Shivapython" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 hover:text-white transition-all">GitHub</a>
            <a href="https://www.linkedin.com/in/shiva-shlok-hn-4846b3327/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 hover:text-white transition-all">LinkedIn</a>
            <a href="https://leetcode.com/u/Shivashlok/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 hover:text-white transition-all">LeetCode</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <a href="/privacy-policy" className="text-xs opacity-50 hover:opacity-80 transition-opacity text-gray-400 hover:text-gray-200">
            Thank you for visiting my portfolio!
          </a>
        </div>
      </div>
    </footer>
  )
}
