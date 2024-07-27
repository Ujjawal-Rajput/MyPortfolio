import React, { useState } from 'react'

function ContactMe() {

    // for showing message sending
    const [values, setValues] = useState({
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        const { email, message } = event.target;
        setValues({
            email: email,
            message: message
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        event.target.values = "";

        setTimeout(() => {
            setSubmitted(false);
            setValues({
                email: '',
                message: ''
            });
        }, 3000);

    };

    return (
        <div className="content">
            <div className="contact_left">
                <h1>Connect with me</h1>

                <p><i className="ri-map-pin-fill"></i>  Planet Earth 🌍</p>
                <p><i className="ri-mail-fill"></i>  rujjawal16@gmail.com</p>
                <ul>
                    <a href='https://www.linkedin.com/in/ujjawal-rajput' target='__blank'><li><i style={{ color: "#fff" }} className="ri-linkedin-box-fill"></i></li></a>
                    <a href='https://www.instagram.com/rujjawal16' target='__blank'><li><i style={{ color: "#fff" }} className="ri-instagram-fill"></i></li></a>
                    <a href='https://x.com/ujjawal18045845?t=I88hL-Njiri9DkJF4H5lwQ&s=09' target='__blank'><li><i style={{ color: "#fff" }} className="ri-twitter-x-fill"></i></li></a>
                    <a href='https://github.com/Ujjawal-Rajput/' target='__blank'><li><i style={{ color: "#fff" }} className="ri-github-fill"></i></li></a>

                </ul>
            </div>

            <div className="contact_right">
                <h2>Contact me</h2>
                <div className="form-container">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label for="email">Your Email</label>
                            <input required="true" name="email" id="email" type="email" value={values.email} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="textarea">Message</label>
                            <textarea required="true" cols="50" rows="10" id="textarea" name="textarea" value={values.message} onChange={handleChange} />
                        </div>
                        <button type="submit" className="form-submit-btn" disabled={submitted}>Submit</button>
                        {submitted && <p style={{ color: "#01D293" }}>Message submitted sucessfully</p>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactMe
