// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
// import BikeList from './components/BikeList';
import BikeDetails from './components/BikeDetails';
import SellBike from './components/SellBike';
import Footer from './components/Footer'; // ✅ Import Footer

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:productId" element={<BikeDetails />} />
          <Route path="/sell" element={<SellBike />} />
        </Routes>

        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
