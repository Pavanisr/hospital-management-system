import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home.jsx';
/*import About from './components/pages/About.jsx';*/
/*import Contact from './components/pages/Contact.jsx';*/
import Navbar from './components/inc/Navbar.jsx';
import Footer from './components/inc/Footer.jsx';

/*import Gallery from './components/pages/Gallery.jsx';*/

import Apoinment from './components/pages/Apoinment.jsx';
import Doctors from './components/pages/Doctors.jsx';
import Insurance from './components/pages/Insurance.jsx';
import Ambulance from './components/pages/Ambulance.jsx';
import RegisterD from './components/pages/RegisterD.jsx';
import RegisterP from './components/pages/RegisterP.jsx';
import RegisterA from './components/pages/RegisterA.jsx';





function App() {


  return (
    <Router>
      <div>
        <Navbar />
        
        {/* Use Routes to wrap Route components */}
        <Routes>
          <Route path="/" element={<Home />} />
         {/*} <Route path="/about" element={<About />} />{*/}
         {/* <Route path="/contact" element={<Contact />} />*/}
        {/*}  <Route path="/services" element={<Services/>}/>{*/}
          
         <Route path="/Doctors" element={<Doctors/>}/>
          
          <Route path="/apoinment" element={<Apoinment/>}/>
         
          <Route path="/Insurance" element={<Insurance/>}/>
          <Route path="/Ambulance" element={<Ambulance/>}/>
          <Route path="/RegisterD" element={<RegisterD/>}/>
          <Route path="/RegisterA" element={<RegisterA/>}/>
          <Route path="/RegisterP" element={<RegisterP/>}/>

         
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
