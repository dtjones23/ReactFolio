import React, { useState } from 'react';

function Navigation({ setPage }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div
            className={`navbar-burger burger ${showMenu ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={toggleMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
        <div className={`navbar-menu ${showMenu ? 'is-active' : ''}`} style={{background:'maroon'}}>
          <div className="navbar-end">
            <div className="navbar-item" onClick={() => {setPage('About Me'); toggleMenu();}}>About Me</div>
            <div className="navbar-item" onClick={() => {setPage('Projects'); toggleMenu();}}>Projects</div>
            {/* <div className="navbar-item" onClick={() => {setPage('Contact'); toggleMenu();}}>Contact</div> */}
            <div className="navbar-item" onClick={() => {setPage('Resume'); toggleMenu();}}>Resume</div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
