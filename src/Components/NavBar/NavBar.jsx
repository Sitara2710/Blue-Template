import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import logo from '../../Assets/newlogo.jpg'
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <nav className={`navbar ${scrolling ? 'scrolled' : ''}`}>
        <div className="navlogo">
          <img src={logo} alt="logo" />
          <p>yvero</p>
        </div>

        <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
          <Link to={'/'} onClick={handleLinkClick}>Home</Link>
          <Link to={'/about'} onClick={handleLinkClick}>About</Link>
          <Link to={'/blogs'} onClick={handleLinkClick}>Blog</Link>
          <Link to={'/scale'} onClick={handleLinkClick}>Scale Your Business</Link>
          <Link to={'/services'} onClick={handleLinkClick}>Services</Link>
        </ul>

        <Link to={'/'}><button>Sign In</button></Link>

        <div className='bar' onClick={toggleMenu}><FaBars /></div>
      </nav>
    </>
  )
}

export default NavBar