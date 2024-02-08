// This component will display the projects
import React from 'react'

function Project() {
  return (
    <div className='container is-centered'> 
      <h1 className='title has-text-centered mt-6' style={{ color: 'maroon' }}>Projects</h1>
      <div className='columns is-centered is-multiline'>
        <div className='column is-half'>
          <div className='card'>
            <div className='card-image'>
              <figure className='image is-4by3'>
                <img src='https://via.placeholder.com/300' alt='placeholder' />
              </figure>
            </div>
            <div className='card-content'>
              <div className='media'>
                <div className='media-content'>
                  <p className='title is-4'>Project 1</p>
                  <p className='subtitle is-6'>Description</p>
                  <div className="button-container">
                    <button className='button'>View</button>
                    <button className='button'>View</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='column is-half'>
          <div className='card'>
            <div className='card-image'>
              <figure className='image is-4by3'>
                <img src='https://via.placeholder.com/300' alt='placeholder' />
              </figure>
            </div>
            <div className='card-content'>
              <div className='media'>
                <div className='media-content'>
                  <p className='title is-4'>Project 2</p>
                  <p className='subtitle is-6'>Description</p>
                  <div className="button-container">
                    <button className='button'>View</button>
                    <button className='button'>View</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
