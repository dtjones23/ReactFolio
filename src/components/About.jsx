import React from 'react'
import images from '../images/IMG_4826.jpeg'
import '../index.css'

export default function About() {
  return (
    <div className = 'has-text-centered mp-6' style = {{backgroundColor: 'tan'}}>
      <div className="columns is-centered is-vcentered">
        <div className="column is-narrow">
          <figure>
          <img className="smaller-image" src={images} alt='placeholder'/>
          </figure>
          <h1 className = 'title mt-6' style = {{color: 'maroon'}}>About Me</h1>
          <p className = 'subtitle mt-6 ' style={{textAlign: 'center', maxWidth: '400px', margin: 'auto'}}>I'm a recent graduate with a BS in psychology from the University of Wisconsin-Lacrosse. Currently I'm in pursuit to becoming a full-stack developer and am a part of the University of Wisconsin-Bootcamp program! </p>
        </div>
      </div>
    </div>
  )
}
