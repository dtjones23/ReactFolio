import React from 'react'
// import '../index.css'

function Navigation({setPage}) {
  // state is managed in the parent component (Header) 
  return (
    <div>
      <nav className = 'navbar'>
        <div className="navbar-brand navbar-end">
          <div className="navbar-item " onClick={()=> setPage('About Me')}>About Me</div>
          <div className="navbar-item " onClick={() => setPage('Projects')}>Projects</div>
          <div className="navbar-item " onClick={()=> setPage('Contact')}>Contact</div>
          <div className="navbar-item " onClick={()=> setPage('Resume')}>Resume</div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation
