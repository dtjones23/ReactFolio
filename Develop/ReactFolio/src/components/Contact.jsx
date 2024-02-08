import React from 'react'

export default function Contact() {
    return (
        // form with fields for a name, an email address, and a message
        <div className="container" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <div className="field">
                <h1 className='title has-text-centered mt-6' style={{ color: 'maroon' }}>Contact Me</h1>
                <label className="label">Name</label>
                <div className="control">
                    <input className="input" type="text" placeholder="" />
                </div>
            </div>

            <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input is-danger" type="email" placeholder="" value="" />
                </div>
            </div>


            <div className="field">
                <label className="label">Message</label>
                <div className="control">
                    <textarea className="textarea" placeholder="" />
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-fullwidth is-link">Submit</button>
                </div>
            </div>
        </div>
    )
}
