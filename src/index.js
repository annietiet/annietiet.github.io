import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact';
import Resume from './components/Resume/Resume';

ReactDOM.render(
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/resume" element={<Resume />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
