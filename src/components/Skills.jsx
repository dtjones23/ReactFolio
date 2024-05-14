import React from 'react'
import '../index.css'

export default function Skills() {
  return (
    <div>
    <div className='title has-text-centered'>
        <h1 className='title has-text-centered mt-6 mb-4' style={{ color: 'maroon' }}>Personal Skill Ratings</h1>
        <br />
        {/* <!-- FrontEnd Skills --> */}
        <ul className='subtitle has-text-left ml-6 mt-4' style={{width:"80%"}}>
            <h2 className='title' style={{ color: 'maroon' }}>FrontEnd:</h2>
            <br />
            <li>HTML <div className="progress">
                    <div className="progress-bar" style={{width: "95%"}}></div>
                </div>
            </li>
            <li>CSS <div className="progress">
                    <div className="progress-bar" style={{width: "85%"}}></div>
                </div>
            </li>
            <li>JavaScript <div className="progress">
                    <div className="progress-bar" style={{width: "80%"}}></div>
                </div>
            </li>
            {/* <li>Bulma <div className="progress">
                    <div className="progress-bar" style={{width: "90%"}}></div>
                </div>
            </li> */}
            <li>React <div className="progress">
                    <div className="progress-bar" style={{width: "75%"}}></div>
                </div>
            </li>
            <li>Bulma <div className="progress">
                    <div className="progress-bar" style={{width: "90%"}}></div>
                </div>
            </li>
            <li>Material UI <div className="progress">
                    <div className="progress-bar" style={{width: "80%"}}></div>
                </div>
            </li>
        </ul>

        <br />
        {/* <!-- BackEnd Skills --> */}
        <ul className='subtitle has-text-left ml-6 mt-4' style={{width:"80%"}}>
            <h2 className='title' style={{ color: 'maroon' }}>BackEnd:</h2>
            <br />
            <li>API <div className="progress">
                    <div className="progress-bar" style={{width: "95%"}}></div>
                </div>
            </li>
            <li>Node.js <div className="progress">
                    <div className="progress-bar" style={{width: "80%"}}></div>
                </div>
            </li>
            <li>Express <div className="progress">
                    <div className="progress-bar" style={{width: "70%"}}></div>
                </div>
            </li>
            <li>MySQL <div className="progress">
                    <div className="progress-bar" style={{width: "70%"}}></div>
                </div>
            </li>
            <li>Mongo DB <div className="progress">
                    <div className="progress-bar" style={{width: "75%"}}></div>
                </div>
            </li>
            <li>Object-Oriented Programming <div className="progress">
                    <div className="progress-bar" style={{width: "90%"}}></div>
                </div>
            </li>
        </ul>
    </div>
</div>

  )
}
