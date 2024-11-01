import React from 'react'
import './AboutCampus.css'
// import pic from '../../Assets/pic.jpeg'
import { MdCampaign } from "react-icons/md";
const AboutCampus = () => {
    return (
        <div className=" ">


            <div className="fisdomCard ">
                <div className="zero green">
                    <div className="zeroIcon">
                        <h3>25K+</h3>
                        <h2 style={{ fontSize: "3rem", color: "	#AE8525" }}><MdCampaign /></h2>
                    </div>
                    <small>Сontent websites</small>
                </div>

                <div className="zero grey">
                    <div className="zeroIcon">
                        <h3>24K+</h3>
                        <h2 style={{ fontSize: "3rem", color: "	#AE8525" }}><MdCampaign /></h2>
                    </div>
                    <small>Monthly ad campaigns</small>
                </div>

                <div className="zero yel">
                    <div className="zeroIcon">
                        <h3>900M+</h3>
                        <h2 style={{ fontSize: "3rem", color: "	#AE8525" }}><MdCampaign /></h2>
                    </div>
                    <small> Unique visitors monthly</small>
                </div>
                <div className="zero " style={{background:'skyblue',borderRadius:'10px'}}>
                    <div className="zeroIcon">
                        <h3>200B+</h3>
                        <h2 style={{ fontSize: "3rem", color: "	#AE8525" }}><MdCampaign /></h2>
                    </div>
                    <small>Monthly ad impressions</small>
                </div>
            </div>
        </div>
    )
}

export default AboutCampus