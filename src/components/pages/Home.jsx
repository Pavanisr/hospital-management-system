import React from 'react'
import Carousal from '../inc/Carousal';

import Logins from './Logins';
import About from './About';
import Contact from './Contact';
import Gallery from './Gallery';

function Home() {
 


  return (
    <>
    
    <div>
      <Carousal />
     
    </div>
    <div><Logins/></div>
   <div><About/></div> 
    <div className='margin-for'> <Gallery/></div>
   
    <Contact/>
    
       
   
    </>
  )
}

export default Home