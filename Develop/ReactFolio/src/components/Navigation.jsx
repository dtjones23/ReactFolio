import React from 'react'

function Navigation() {
  return (
    <div>
      <nav className = 'navbar'>
        <div className="navbar-brand navbar-end">
          <a className="navbar-item " href='/' rel="noreferrer">About Me</a>
          <a className="navbar-item " href='/projects' rel="noreferrer">Projects</a>
          <a className="navbar-item " href='/contact' rel="noreferrer">Contact</a>
          <a className="navbar-item " href='/resume' rel="noreferrer">Resume</a>
        </div>
      </nav>
    </div>
  );
}

export default Navigation
