import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import PageHeading from '../common/PageHeading';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Function to handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Function to handle form submission using Axios
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData); // Log the form data

        axios.post('http://localhost:8080/api/contact/sub', formData)
            .then(response => {
                console.log('Response status:', response.status); // Log the response status
                console.log('Response data:', response.data); // Log the response data
                alert("Message sent successfully!");
                setFormData({ name: '', email: '', message: '' });
            })
            .catch(error => {
                console.error('There was a problem with the Axios request:', error);
                alert("Failed to send message. Please try again.");
            });
    };

    return (
        <div>
            <PageHeading home={"home"} pagename={"Contact Us"} />
            <div className="contact-container">
                <h2></h2>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
