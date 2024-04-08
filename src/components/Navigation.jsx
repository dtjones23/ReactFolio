import React, { useState } from 'react';

function Navigation({ setPage }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    // sets the initial page to "About Me" when component mounts
    setPage('About Me');
  }, []);

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
            <div className="navbar-item" style={{fontSize:'14px'}} onClick={() => {setPage('About Me'); toggleMenu();}}>About</div>
            <div className="navbar-item" style={{fontSize:'14px'}} onClick={() => {setPage('Projects'); toggleMenu();}}>Projects</div>
            {/* <div className="navbar-item" onClick={() => {setPage('Contact'); toggleMenu();}}>Contact</div> */}
            <div className="navbar-item" style={{fontSize:'14px'}} onClick={() => {setPage('Skills'); toggleMenu();}}>Skills</div>
            <div className="navbar-item" style={{fontSize:'14px'}} onClick={() => {setPage('Resume'); toggleMenu();}}>Resume</div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
