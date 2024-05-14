// This component will display the projects
import React from 'react'
import { projects } from './ProjectInfo'

function Project() {
  return (
    <div className='container is-centered'> 
      <h1 className='title has-text-centered mt-6' style={{ color: 'maroon' }}>Projects</h1>
      <div className='columns is-centered is-multiline'>
        {projects.map(project => (
          <div className='column is-half' key={project.id}>
            <div className='card'>
              <div className='card-image'>
                <figure className='image is-4by3'>
                  <img src={project.image} alt={project.name} />
                </figure>
              </div>
              <div className='card-content'>
                <div className='media'>
                  <div className='media-content'>
                    <p className='title is-4'>{project.name}</p>
                    <p className='subtitle is-6'>{project.description}</p>
                    <div className="button-container">
                      {project.live !== '' ? (<a href={project.live} target='_' className='button'>View Live</a>): null}
                      <a href={project.repo} target='_' className='button'>View Repo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
