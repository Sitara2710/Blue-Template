import React from 'react'
import './Testimonial.css'
import pic from '../../Assets/pic5.jpg'
import userPic from '../../Assets/userPic.jpg'
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
const Testimonial = () => {
    return (
        <>
            <div className="testimonialSetion" >
                <div className="test_content">
                    <small>Testimonials</small>
                    <h3>Our Clients <span>Love Us.</span></h3>
                    <p>We're proud to say that client satisfaction is at the core of everything we do, and the love and appreciation we receive from our clients fuel our passion for excellence each and every day.</p>
                    <div className="slider">
                        <p><RiDoubleQuotesL color='#6415ff' />  Our dedicated team goes above and beyond to truly understand your needs, goals, and vision, ensuring that every solution we provide is tailor-made to drive your success.< RiDoubleQuotesR color='#6415ff' /></p>
                        <div className="userslide">
                            <img src={userPic} className='user' alt="" />
                            <div className="userCont">
                                <p>charlothe hoe</p>
                                <small>ceo tesla,inc</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="test_img">
                    <img src={pic} alt="" />
                </div>
            </div>
        </>
    )
}

export default Testimonial