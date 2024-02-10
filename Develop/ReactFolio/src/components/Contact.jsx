import React, { useState } from 'react';
import '../index.css';

export default function Contact() {
    // creates a state variable and a function to update each input
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const handleInputChange = (event, setStateFunc, field) => {
        // update the state variable with the value from the input
        setStateFunc(event.target.value);
        if (event.target.value.trim() === '') { 
            setErrors(prevErrors => ({ ...prevErrors, [field]: 'This field is required' }));
            // if the input is not empty, remove the error message
        } else {
            setErrors(prevErrors => ({ ...prevErrors, [field]: null }));
            // if the email is empty, set an error message
        }
    }

    const handleInputBlur = (event, field) => {
        // if the input is empty, set an error message 
        // if the email is invalid, set an error message
        if (field === 'email' && !validateEmail(event.target.value)) {
            setErrors(prevErrors => ({ ...prevErrors, [field]: 'Your email is invalid' })); 
        }
    }

    const validateEmail = (email) => {
        // regex to validate email
        const valid = /\S+@\S+\.\S+/;
        return valid.test(email);
    }

    const handleSubmit = (event) => {
        // prevent the form from refreshing the page
        event.preventDefault();
        console.log({ name, email, message });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="field">
                    <h1 className='title has-text-centered' style={{ color: 'maroon' }}>Contact Me</h1>
                    <label htmlFor="name" className="label">Name</label>
                    <div className="control">
                        <input id="name" className="input" type="text" placeholder="Enter Name" value={name} onChange={(event) => handleInputChange(event, setName, 'name')} />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>
                </div>
    
                <div className="field">
                    <label htmlFor="email" className="label">Email</label> 
                    <div className="control">
                        <input id="email" className="input" type="email" placeholder="Enter valid Email" value={email} onChange={(event) => handleInputChange(event, setEmail, 'email')} onBlur={(event) => handleInputBlur(event, 'email')} />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                </div>
    
                <div className="field">
                    <label htmlFor="message" className="label">Message</label>
                    <div className="control">
                        <textarea id="message" className="textarea" placeholder="Leave a message" value={message} onChange={(event) => handleInputChange(event, setMessage, 'message')} />
                        {errors.message && <p className="error">{errors.message}</p>}
                    </div>
                </div>
    
                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-fullwidth is-link">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    )   
}