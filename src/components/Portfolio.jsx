import React from 'react'
import projects from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Portfolio(){
  return (
    <section id="works" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title mb-16 text-center text-white">WORKS</h2>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
