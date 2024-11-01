import React from 'react'
import banner from '../../Assets/banner.png'
import png from '../../Assets/banner2.png'
import AboutCampus from '../AboutCampus/AboutCampus'

const Scale = () => {
    return (
        <>
            <div className="scale_section">
                <p style={{ width: '100%' }}>
                    <img src={banner} alt="b" style={{ width: '100%' }} />
                </p>
            </div>
            <div className="bottomAbt" >
                <h3>Our achievements in <span>numbers speak for themselves
                </span>.</h3>

            </div>

            <div
               className="Img" style={{ width: '80%', margin: 'auto' }}>
                <img src={png} alt="fdc" style={{ width: '100%',marginTop:'20px' }} />
            </div>

            <AboutCampus />


        </>
    )
}

export default Scale