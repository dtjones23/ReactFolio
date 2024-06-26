import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className='subtitle has-text-centered' style={{marginTop:'10px', paddingBottom:'15px'}}>
      <a href="https://github.com/dtjones23" target="_blank" rel="noopener noreferrer" style={{ margin: '0 20px', color:'maroon' }}>
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://linkedin.com/in/deangelo-jones-3a8643246" target="_blank" rel="noopener noreferrer" style={{ margin: '0 20px', color:'maroon' }}>
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      {/* <a href="https://stackoverflow.com/users/22659734/deangelo-jones" target="_blank" rel="noopener noreferrer" style={{ margin: '0 20px', color:'maroon'}}>
        <FontAwesomeIcon icon={faStackOverflow} size="2x" />
      </a> */}
    </div>
  )
}

export default Footer
