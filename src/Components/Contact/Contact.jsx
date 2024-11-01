import React from 'react'
import './Contact.css'
import contPic from '../../Assets/contact.png'

const Contact = () => {
    return (
        <>
            <div className="contaact-section" >
                <div className="contactDetails">
                    <small>contact us</small>
                    <h3>Feel free to <span>get in touch</span> with us.</h3>
                    <p>Feel free to reach out to us via phone, email, or through our website. Our dedicated team is standing by, ready to assist you every step of the way. Let's start the conversation and work together to turn your vision into reality. Get in touch with us today!</p>

                    <input type="email" placeholder='your email address' />
                    <button>contact me</button>
                </div>

                <div className="contactImg">
                    <img src={contPic} alt="" />
                </div>
            </div>
        </>
    )
}

export default Contact