import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className='subtitle has-text-centered mt-5 mb-0'>
      <a href="https://github.com/dtjones23" target="_blank" rel="noopener noreferrer" style={{ margin: '0 20px' }}>
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://linkedin.com/in/deangelo-jones-3a8643246" target="_blank" rel="noopener noreferrer" style={{ margin: '0 20px' }}>
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://stackoverflow.com/users/22659734/deangelo-jones" target="_blank" rel="noopener noreferrer" style={{ margin: '0 20px' }}>
        <FontAwesomeIcon icon={faStackOverflow} size="2x" />
      </a>
    </div>
  )
}

export default Footer
