import React from 'react';
import '../index.css'

function Header() {
  return (
    <div>
      <nav className = 'title navbar'>
        <div className='navbar-brand navbar-start'>
          <a className='navbar-item' rel="noreferrer">
            DeAngelo Jones
          </a>
        </div>
      </nav>
    {/* <Navigation /> will use state to render the tabs */}
    </div>
  );
}

export default Header;