import React from 'react'
import '../../App.css';
import pngegg2 from '../images/pngegg2.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
        <img src={pngegg2} alt="Logo" width="45" height="45" class="d-inline-block align-text-top"/>
          <p>&copy; 2024 MediLab Hospitals PLC. All rights reserved</p>
        </div>
        <div className="footer-right">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#international">International Patients</a></li>
            <li><a href="#emergency">Emergency Care</a></li>
            <li><a href="#doctor">Doctor Channeling</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer