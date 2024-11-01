import React from 'react'
import './Portfolio.css'
import pro1 from '../../Assets/study-group.jpg'
import pro2 from '../../Assets/students-working-on-project.jpg'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoTimeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
const Portfolio = () => {
    return (
        <>
            <div className="portfolio-section" >
                <div className="portGallery">
                    <div className="galleryCard">
                        <img src={pro1} alt="" />
                        <div id='pro'>
                            <p>tesla inc.</p>
                            <p style={{ color: "grey" }}>ad campaign</p>
                        </div>

                        <h6>Personalized Ad Campaign using Google AdWords</h6>

                        <div className="time">
                            <p><IoTimeOutline />90 DAYS CAMPAIGN</p>
                            <p><CiLocationOn />NEW YORK</p>
                        </div>

                        <button>read case study</button>
                    </div>

                    <div className="galleryCard">
                        <img src={pro2} alt="" />
                        <div id='pro'>
                            <p>Nestle</p>
                            <p style={{ color: "grey" }}>SEO Marketing</p>
                        </div>

                        <h6>Ranking #1 for keywords like Chocolate, Snack</h6>

                        <div className="time">
                            <p><IoTimeOutline />180 DAYS CAMPAIGN</p>
                            <p><CiLocationOn />PALO ALTO</p>
                        </div>

                        <button>read case study</button>
                    </div>
                </div>

                <div className="portContent">
                    <small>our portfolio</small>
                    <h3>We've done some <span>amazing projects.</span></h3>
                    <p>As we look back on the amazing projects we've had the opportunity to be a part of, we're filled with gratitude for the trust our clients have placed in us and the meaningful relationships we've built along the way. We're excited to continue pushing boundaries, breaking new ground, and creating even more remarkable projects in the future. Thank you for being a part of our journey.</p>

                    <Link>View all Projects <FaArrowRight /></Link>
                </div>
            </div>
        </>
    )
}

export default Portfolio