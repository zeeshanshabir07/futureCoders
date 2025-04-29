import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from '../Components/About';
import Login from '../Components/Login';
import Register from '../Components/Register';
import Contact from '../Components/Contact';
import Hero from '../Components/Hero';
import Header from '../Components/Header';

const HomePage = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default HomePage;
