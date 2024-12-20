import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Message = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    const [isSent, setIsSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const serviceID = 'squirrel'; 
        const templateID = 'template_bYKAoUmU'; 
        const userID = 'user_QH5vOWtcRBJBAATc1IR2t'; 

        emailjs
            .send(serviceID, templateID, formData, userID)
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setIsSent(true);
                    setErrorMessage('');
                    setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        message: '',
                    });
                },
                (error) => {
                    console.log('FAILED...', error);
                    setIsSent(false);
                    setErrorMessage('Failed to send message. Please try again later.');
                }
            );
    };

    return (
        <div className="section">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12 mb-5 order-2">
                        <form onSubmit={sendEmail}>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="form-control"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        type="text"
                                        id="phone"
                                        className="form-control"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-control"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 form-group">
                                    <label htmlFor="message">Write Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        className="form-control"
                                        cols="30"
                                        rows="8"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input
                                        type="submit"
                                        value="Send Message"
                                        className="btn btn-outline-black px-3 py-3"
                                    />
                                </div>
                            </div>
                        </form>
                        {isSent && <p className="text-success">Message sent successfully!</p>}
                        {errorMessage && <p className="text-danger">{errorMessage}</p>}
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 contact-form-contact-info">
                        <div className="row">
                            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="">
                                <p className="d-flex">
                                    <span className="ion-ios-location icon mr-5"></span>
                                    <span>#106, Bernards Business Park, Dutugemunu Street, Kohuwala, Sri Lanka, 10350</span>
                                </p>
                            </div>
                            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                                <p className="d-flex">
                                    <span className="ion-ios-telephone icon mr-5"></span>
                                    <span>+94 77 8181 704</span>
                                </p>
                            </div>
                            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                                <p className="d-flex">
                                    <span className="ion-android-mail icon mr-5"></span>
                                    <span>sathasivam.sujee@gmail.com</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;
