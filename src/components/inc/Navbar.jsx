import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'
import pngegg from '../images/pngegg.png';


function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }



  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container-fluid">
       <Link  className="navbar-brand margin-to-center" to="/" onClick={scrollToTop}><img src={pngegg} alt="Logo" width="45" height="45" class="d-inline-block align-text-top"/>
       <b>M</b>edi<b>L</b>ab </Link>
   
   
      <ul className="nav justify-content-center">

        {/*home*/}
          <li className="nav-item ">
            <Link to="/" className="nav-link active link-hover" onClick={scrollToTop}>Home</Link>
          </li>

        {/*services*/}
          <li class="nav-item">
          {/*} <Link to="/Services" className="nav-link link-hover">Services</Link>{*/}
          <div class="dropdown">
                <a href='#' class=" nav-link link-hover"  data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                     <ul class="dropdown-menu">
                        <li><Link to="/Ambulance" className="dropdown-item">Ambulance</Link></li>
                        <li><Link to="/Insurance" className="dropdown-item">Insurance</Link></li>
                        <li><a class="dropdown-item" href="#">another one</a></li>
                     </ul>
          </div>
          </li>

          {/*doctors*/}
          <li className="nav-item ">
            <Link to="/Doctors" className="nav-link active link-hover">Doctors</Link>
          </li>

         {/*About us*/}
          <li class="nav-item">
          
           <a href="#About" className="nav-link link-hover">About Us</a>
          </li>

         {/*Gallery*/}
          <li class="nav-item">
         {/*  <Link to="/Gallery" className="nav-link link-hover">Gallery</Link>*/}
           <a href="#Gallery" className="nav-link link-hover">Gallery</a>
          </li>

         {/*Contact us*/}
          <li class="nav-item">
           {/*<Link to="/Contact" className="nav-link link-hover">Contact Us</Link>*/}
           <a href="#Contact" className="nav-link link-hover">Contact Us</a>
          </li>

         {/*Logins*/}
          <li class="nav-item">
       {/*}   <Link to="/Home" className="nav-link link-hover">Logins</Link>{*/}
           <a href="#Login" className="nav-link link-hover">Logins</a>
          </li>
      
        {/*book an appointment*/}
          <li class="nav-item">
           <Link to="/Appoinment" className="nav-link active"><button class="btn btn-primary" type="button">Book An Apoinment</button></Link>
          </li>


      </ul>
      
   
  </div>
</nav>
  )
}

export default Navbar