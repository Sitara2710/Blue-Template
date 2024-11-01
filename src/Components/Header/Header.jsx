import React from 'react'
import './Header.css'
import logo from '../../Assets/logo.png'
import pic from '../../Assets/beakers-for-science-with-water.jpg'
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomeContact from '../HomeContact/HomeContact';


const Header = () => {
  AOS.init();
  return (
    <>
      <section 
        >
        <div className="overlay">
          <div className="headerText">
            <div className="firstBoxText">
              <small>We’re thrilled to have launched in Europe</small>
              <h2>Now's the time to build an exceptional</h2>
              <h1> marketing team</h1>

              <button>Explore our customer success stories</button>

            </div>

            <div className="secondBoxImg">
              {/* <img src={pic} alt="pic" /> */}
              <HomeContact />

            </div>
          </div>
        </div>

      </section>

    </>
  )
}

export default Header