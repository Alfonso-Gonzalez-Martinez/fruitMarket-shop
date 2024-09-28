import React, { useState } from 'react';
import contactImage from './../../assets/contact.jpg'
import './contact.css'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert(`'Thank you ${formData.name} for contacting us!'`);
        setFormData({name: '', email: '', message: ''})
    };

    return (
        <div className="contact-container" style={{backgroundImage: `url(${contactImage})`}}>
            <div className="form-container">
                <h2>Contact Us - Fresh Fruit Market</h2>
                <div className="form-box"> 
                    <form onSubmit={handleSubmit}>
                        <div className="form-inner-box">
                            <div className="input">
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                />
                            </div>

                            <div className="input">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    required
                                />
                            </div>

                            <div className="input">
                                <label htmlFor="message">Message:</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    required
                                />
                            </div>
                        </div>
                        <button id="submit-button" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
