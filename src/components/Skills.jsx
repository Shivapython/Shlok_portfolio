import React from 'react'
import skills from '../data/skills'

export default function Skills() {
  const categories = [
    { key: 'frontend', title: 'Frontend Development', color: 'from-blue-500 to-cyan-500' },
    { key: 'backend', title: 'Backend & Database', color: 'from-green-500 to-emerald-500' },
    { key: 'aiml', title: 'AI & Machine Learning', color: 'from-purple-500 to-pink-500' },
    { key: 'tools', title: 'Tools & DevOps', color: 'from-orange-500 to-red-500' }
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg">
            My technical expertise and proficiency across different domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div
              key={category.key}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {skills[category.key].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium text-gray-200">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/15 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gray-300 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
