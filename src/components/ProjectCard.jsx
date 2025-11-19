import React from 'react'

export default function ProjectCard({ project, index }){
  const isEven = index % 2 === 0;

  return (
    <article className={`grid lg:grid-cols-2 gap-12 items-center text-white ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
      {/* Media */}
      <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        {project.videoId ? (
          <div className="video-container bg-gray-800 border border-gray-700">
            <iframe 
              src={`https://www.youtube.com/embed/${project.videoId}`}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="rounded-sm"
            ></iframe>
          </div>
        ) : (
          <div className="aspect-video bg-gray-800 rounded-sm overflow-hidden border border-gray-700">
            {project.image ? (
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover" 
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Video Coming Soon
              </div>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
        <div>
          <div className="flex items-center space-x-3 text-sm opacity-70 mb-2 text-gray-300">
            <span>{project.year}</span>
            <span>•</span>
            <span>{project.type}</span>
            {project.duration && (
              <>
                <span>•</span>
                <span>{project.duration}</span>
              </>
            )}
          </div>
          
          <h3 className="text-2xl md:text-3xl font-light mb-2 tracking-wide text-white">
            {project.title}
          </h3>
          
          {project.titleEn && (
            <p className="text-lg opacity-70 font-light mb-4 text-gray-300">
              {project.titleEn}
            </p>
          )}
          
          <p className="text-sm opacity-70 font-light mb-4 text-gray-300">
            {project.role}
          </p>
        </div>

        <div className="space-y-4">
          <p className="content-text opacity-90 text-gray-200">
            {project.description}
          </p>
          
          {project.descriptionEn && (
            <p className="content-text opacity-70 text-sm text-gray-400">
              {project.descriptionEn}
            </p>
          )}

          {project.awards && project.awards.length > 0 && (
            <div className="pt-4">
              <h4 className="text-sm font-medium mb-2 opacity-80 text-gray-300">Awards</h4>
              <ul className="space-y-1">
                {project.awards.map((award, i) => (
                  <li key={i} className="text-sm opacity-70 font-light text-gray-400">
                    {award}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
