import React from 'react'
import Record from '../Record/Record'
import Service from '../Services/Service'
import Team from '../Team/Team'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'
import Blog from '../Blog/Blog'
import FQA from '../FQA/FQA'
import pic from '../../Assets/pic.jpg'
import Testimonial from '../Testimonial/Testimonial'
import Header from '../Header/Header'
import Marque from '../Marque/Marque'
import Client from '../Client/Testimonials'


const Home = () => {
  return (
    <>
      <Header />
      <Marque />
      <Record />
      <Service />
      <Team />
      <Portfolio />
      <Testimonial />
      <Client />
      <FQA />
      <Blog />
      <Contact />
    </>
  )
}

export default Home