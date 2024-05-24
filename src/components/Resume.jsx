import React from 'react';
import resumeImage from '../images/resume.png';
import certificateImage from '../images/certificate.png';

export default function Resume() {
  return (
    <div style={{ color: 'maroon', textAlign: 'center' }}>
      <h1 className='title has-text-centered mt-6' style={{color:'maroon'}}>Resume</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <a 
          href="https://docs.google.com/document/d/1xz5MWWkAytk1xtcgEfLj0Pt_sGCe0rsyjva_7GW9RYk/edit?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='mt-6' 
          style={{ color: 'maroon', textDecoration: 'none', marginBottom: '20px' }}
        >
          <img src={resumeImage} alt="Resume" style={{ maxWidth: '100%', width: '300px' }} />
          <div>Click here to view my Resume!</div>
        </a>
        <a 
          href= {certificateImage} 
          target="_blank" 
          rel="noopener noreferrer" 
          className='mt-6' 
          style={{ color: 'maroon', textDecoration: 'none' }}
        >
          <img src={certificateImage} alt="Certificate" style={{ maxWidth: '100%', width: '300px' }} />
          <div>Click here to view my Certificate!</div>
        </a>
      </div>
    </div>
  );
}
