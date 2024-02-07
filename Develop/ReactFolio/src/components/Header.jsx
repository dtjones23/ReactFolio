import React from 'react';

function Header() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation" style={{backgroundColor: 'maroon', color: 'white', height: '130px'}}>
      <div className="navbar-brand">
        <a className="title navbar-item" href="/" style={{color: 'white'}}>
          DeAngelo Jones
        </a>
      </div>

      <div className="subtitle navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item" href="/projects" style={{color: 'white'}}>
            Projects
          </a>
          <a className="navbar-item" href="/contact" style={{color: 'white'}}>
            Contact
          </a>
          <a className="navbar-item" href="/resume" style={{color: 'white'}}>
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;