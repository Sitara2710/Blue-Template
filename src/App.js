import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Record from './Components/Record/Record';
import Login from './Components/User/Login/Login';
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About';
import Scale from './Components/Scale/Scale';
import MyBlogs from './Components/MyBlogs';
import Service from './Components/Services/Service';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/scale' element={<Scale />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/blogs' element={<MyBlogs />} />
          <Route path='/services' element={<Service />} />
     
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
