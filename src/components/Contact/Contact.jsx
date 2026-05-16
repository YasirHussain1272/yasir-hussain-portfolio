import React, { useState } from 'react';
import './Contact.css';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
    // 1. State Management for form data and submission status
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState(''); // 'idle', 'submitting', 'success', 'error'

    // Formspree Endpoint URL (REPLACE THIS with your actual Formspree endpoint)
    const FORM_ENDPOINT = "https://formspree.io/f/xgvgdppg"; 

    // Helper for input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Helper for email validation (basic regex)
    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // 2. Submission Handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill out all required fields.');
            setStatus('error');
            return;
        }

        if (!validateEmail(formData.email)) {
            alert('Please enter a valid email address.');
            setStatus('error');
            return;
        }

        try {
            const response = await fetch(FORM_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    // Formspree handles mapping these fields to the email subject and body
                    // We also include a custom field for the full subject line:
                    _subject: `New Message from ${formData.name} (Portfolio Contact)`,
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }),
            });

            if (response.ok) {
                setStatus('success');
                // Reset form inputs after successful submission
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
                console.error("Formspree error response:", await response.json());
            }

        } catch (error) {
            setStatus('error');
            console.error("Submission failed:", error);
        }
    };

    // Determine button text based on status
    const buttonText = {
        idle: 'Send Message',
        submitting: 'Sending...',
        success: 'Sent! Thank You.',
        error: 'Try Again'
    }[status] || 'Send Message';


    return (
        <section className="contact-section" id="contact">
            <div className="contact-content">
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p>
                        I am currently open to new opportunities and collaboration. Whether you have a project idea, a job offer, or just want to say hello, my inbox is always open!
                    </p>

                    {/* Personal Contact Details */}
                    <div className="detail-item">
                        <FiMail className="detail-icon" />
                        <a href="mailto:yasirhussain6190@gmail.com">yasirhussain6190@gmail.com</a>
                    </div>
                    <div className="detail-item">
                        <FiPhone className="detail-icon" />
                        <a href="tel:+923055927599">+923055927599</a>
                    </div>
                    <div className="detail-item">
                        <FiMapPin className="detail-icon" />
                        <span>Gulbery 3, Lahore, Pakistan</span>
                    </div>
                </div>

                <div className="contact-form-container">
                    <h3>Send Me a Message</h3>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={formData.name}
                                onChange={handleChange}
                                required 
                                disabled={status === 'submitting'}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email}
                                onChange={handleChange}
                                required 
                                disabled={status === 'submitting'}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                value={formData.message}
                                onChange={handleChange}
                                required 
                                disabled={status === 'submitting'}
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="submit-btn" 
                            disabled={status === 'submitting' || status === 'success'}
                        >
                            {buttonText}
                        </button>
                        {status === 'success' && <p style={{ color: '#1aff8c', marginTop: '10px' }}>Message sent successfully!</p>}
                        {status === 'error' && <p style={{ color: 'red', marginTop: '10px' }}>Error sending message. Please try again.</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};
export default Contact;
