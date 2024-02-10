import React from 'react'
import '../index.css'

export default function Resume() {
  return (
    <div>
        <div className ='title has-text-centered'>
                <h1 className='title has-text-centered mt-6' style={{ color: 'maroon' }}>Resume</h1>
                <h3 className='mb-4'>Current Student in Full Stack Development</h3>
                <a href="" className='mt-6'>Click here to view my Resume!</a>
                <h1 className='title has-text-centered mt-6 mb-4' style={{ color: 'maroon' }}>Skills</h1>
                <ul className='subtitle has-text-left ml-6 mt-4'> <h2 className = 'title' style={{ color: 'maroon' }}>FrontEnd:</h2> <br />
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Bulma</li>
                    <li>React</li>
                </ul>
                <ul className='subtitle has-text-left ml-6 mt-4'> <h2 className = 'title' style={{ color: 'maroon' }}>BackEnd:</h2> <br />
                    <li>API</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>SQL</li>
                </ul>
                
        </div>
    </div>
  )
}
