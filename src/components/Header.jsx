import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import About from './About';
import Project from './Project';
import Resume from './Resume';
// import Contact from './Contact';
import '../index.css'

function Header() {
  const initialPage = localStorage.getItem('page') || 'About Me';
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    // saves page to localStorage, avoids losing state on refresh
    localStorage.setItem('page', page);
  }, [page]);

  const renderPage = () => {
    // conditionally render the page based on 'page' state
    if (page === 'About Me') {
      return <About />;
    } else if (page === 'Projects') {
      return <Project />;
    // } else if (page === 'Contact') {
    //   return <Contact />;
    } else if (page === 'Resume') {
      return <Resume />;
    }
  }
  return (
    <div>
      <nav className='title navbar'>
        <div className='navbar-brand'>
          <h1 className='navbar-item medium-font'>DeAngelo Jones</h1>
        </div>
        <Navigation
          setPage={setPage} 
        />
      </nav>
      <div>{renderPage()}</div>
    </div>
  );
}

//   }
export default Header;