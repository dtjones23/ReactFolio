import React from 'react';
import { useState } from 'react';
import Navigation from './Navigation';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import '../index.css'

function Header() {
  const [page, setPage] = useState('About Me');

  const renderPage = () => {
    // conditionally render the page based on 'page' state
    if (page === 'About Me') {
      return <About />;
    } else if (page === 'Projects') {
      return <Project />;
    } else if (page === 'Contact') {
      return <Contact />;
    }
    // } else if (page === 'Resume') {
    //   return <Resume />;
    // }
  }
  return (
    <div>
      <nav className='title navbar'>
        <div className='navbar-brand'>
          <a className='navbar-item large-font' rel="noreferrer">
            DeAngelo Jones
          </a>
        </div>
        <Navigation
          setPage={setPage} // pass setPage function to Navigation component
        />
      </nav>
      <div>{renderPage()}</div>
    </div>
  );
}

//   }
export default Header;