import React, { useEffect } from 'react';
import about from '../images/about.jpeg';
import { Link } from 'react-router-dom';

function About() {
  {/*}useEffect(() => {
    const title = document.getElementById("animated-title");

    // Callback function for Intersection Observer
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Remove animation class if already present to reset animation
          title.classList.remove("typing-animation");

          // Trigger reflow to restart animation
          void title.offsetWidth;

          // Reapply the animation class
          title.classList.add("typing-animation");
        }
      });
    };

    // Create an Intersection Observer
    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.5, // Trigger when 50% of the section is visible
    });

    // Observe the "About" section
    const aboutSection = document.getElementById("About");
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    // Cleanup
    return () => observer.disconnect();
  }, []);{*/}




  return (
    
    <div className='container' id='About'>
      
      <div className='about-section'>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-xl-4">
              <img src={about} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-xl">
              <div className="card-body">
               <a href='#' className="about-text"> <h5 className="card-title typing-animation">About Our Hospital</h5></a> 
                 <p className="card-text"> The Hospital Management System (HMS) is designed for Any Hospital to replace their existing
manual, paper based system. The new system is to control the following information; patient
information, room availability, staff and operating room schedules, and patient invoices. These
services are to be provided in an efficient, cost effective manner, with the goal of reducing the
time and resources currently required for such tasks.
A significant part of the operation of any hospital involves the acquisition, management and
timely retrieval of great volumes of information. This information typically involves; patient
personal information and medical history, staff information, room and ward scheduling, staff
scheduling, operating theater scheduling and various facilities waiting lists. All of this
information must be managed in an efficient and cost wise fashion so that an institution's
resources may be effectively utilized HMS will automate the management of the hospital
making it more efficient and error free. It aims at standardizing data, consolidating data
ensuring data integrity and reducing inconsistencies.</p>
                
             </div>
           </div>
         </div>
       </div>
       </div>
       
    </div>
  
  )
}

export default About