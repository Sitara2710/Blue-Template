import React from 'react'
import './Team.css'
import teamPic from '../../Assets/pic3.jpg'
import { FaRegUser } from "react-icons/fa";
const Team = () => {
    return (
        <>
            <div className="teamContainer">
                <div className="teamContent">
                    <small>our expertise</small>
                    <h3>We have the most <span>professional</span> marketing team.</h3>
                    <p>At the heart of our success lies our exceptional marketing team, a dedicated group of professionals committed to driving your brand's growth and success. With a wealth of industry experience, creativity, and strategic acumen, our team</p>


                    <div className="pro">
                        <p className='serIcon1'><FaRegUser /></p>

                        <div className="proDet">
                            <h5>Professionalism</h5>
                            <small>We have the best professional marketing people across the globe just to work with you.</small>
                        </div>
                    </div>

                    <div className="pro">
                        <p className='serIcon1'><FaRegUser /></p>
                        <div className="proDet">
                            <h5>Affordable</h5>
                            <small>We promise to offer you the best rate we can - at par with the industry standard</small>
                        </div>

                    </div>
                    <button>See our portfolio</button>
                </div>

                <div className="teamImg">
                    <img src={teamPic} alt="" />
                </div>
            </div>
        </>
    )
}

export default Team