import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

ReactDOM.render(
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/projects" element={<Projects />} />
      <Route exact path="/contact" element={<Contact />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
