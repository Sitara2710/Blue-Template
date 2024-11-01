import React from 'react'
import './About.css'
import pic from '../../Assets/apply.png'
import png from '../../Assets/png.png'
import AboutCampus from '../AboutCampus/AboutCampus'
import banner from '../../Assets/banner3.png'
const About = () => {
    return (
        <>
            <div className="scale_section">
                <p style={{ width: '100%' }}>
                    <img src={banner} alt="b" style={{ width: '100%' }} />
                </p>
            </div>
            <div className="aboutSection" >
                <div className="aboutImg">
                    <img src={pic} alt="" />
                </div>

                <div className="aboutContent">
                    <small>about us</small>
                    <h3>We have been doing this <span>since 1999</span>.</h3>
                    <p>For over two decades, our unwavering commitment to excellence has been the cornerstone of our journey since our inception in 1999. With each passing year, we've embraced challenges, celebrated milestones,
                        and evolved with the ever-changing landscape of our industry.</p>

                </div>
            </div>
            <div className="bottomAbt" >
                <h3>Our achievements in <span>numbers speak for themselves
                </span>.</h3>

            </div>
            <AboutCampus />

            <div  className="Img" style={{ width: '100%', margin: '20px 0px' }}>
                <img src={png} alt="fdc" style={{ width: '100%' }} />
            </div>
        </>
    )
}

export default About