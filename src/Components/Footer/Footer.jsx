import React from 'react'
import './Footer.css'
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import logo from '../../Assets/newlogo.jpg'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <div className="footerContainer">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <p>Cyvero</p>
                </div>


                <ul style={{ marginTop: "2rem" }}>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/about"}>About</Link>
                    <Link to={"/scale"}>Business</Link>
                    <Link to={"/blogs"}>Blog</Link>
                    <Link to={"/services"}>Services</Link>
                </ul>

                <div className="icons">
                    <Link to={"/"}><FaFacebookF /></Link>
                    <Link to={"/"}><FaTwitter /></Link>
                    <Link to={"/"}><IoLogoYoutube /></Link>
                </div>

                <small>&#x2117; Copyright 2024,Cyvero. All Rights Reserved.</small>

            </div>

        </>
    )
}

export default Footer