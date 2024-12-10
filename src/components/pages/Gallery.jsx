import React from 'react'
import card from '../images/card.jpg';
import dental from '../images/dental.jpg';
import neuro from '../images/neuro.jpg';
import women from '../images/women.jpg';
import physio from '../images/physio.jpg';
import pharmacy from '../images/pharmacy.jpg';

function Gallery() {
  return (
    <div className='container' id='Gallery'>
<div className='container'>

<a href='#' className="gallery-text"><h2>Our Gallery</h2></a>
<p className="gallery-text-p">View Our Gallery</p><br/>
</div>

 <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="gallery-card card h-100">
      <img src={card} class="card-img-top" alt="..."/>
      <div className="card-body d-flex flex-column align-items-center justify-content-cente">
        <h5 className="card-title">Cardiology</h5>
        <button className='btn btn-primary'>Read more</button>
      </div>
      
    </div>
  </div>
  <div className="col">
    <div className="card gallery-card h-100">
      <img src={dental} class="card-img-top" alt="..."/>
      <div className="card-body d-flex flex-column align-items-center justify-content-cente">
        <h5 className="card-title">Dental</h5>
        <button className='btn btn-primary'>Read more</button>
      </div>
      
    </div>
  </div>
  <div className="col">
    <div className="card gallery-card h-100">
      <img src={pharmacy} class="card-img-top" alt="..."/>
      <div className="card-body d-flex flex-column align-items-center justify-content-cente">
        <h5 className="card-title">Pharmacy</h5>
        <button className='btn btn-primary'>Read more</button>
      </div>
    
    </div>
  </div>
</div>

<div className="row row-cols-1 row-cols-md-3 row-custom-gap">
  <div className="col">
    <div className="card gallery-card h-100">
      <img src={neuro} class="card-img-top" alt="..."/>
      <div className="card-body d-flex flex-column align-items-center justify-content-cente">
        <h5 className="card-title">Neurology</h5>
        <button className='btn btn-primary'>Read more</button>
      </div>
      
    </div>
  </div>
  <div className="col">
    <div className="card gallery-card h-100">
      <img src={women} class="card-img-top" alt="..."/>
      <div className="card-body d-flex flex-column align-items-center justify-content-cente">
        <h5 className="card-title">Gynecology & Obstetrics</h5>
        <button className='btn btn-primary'>Read more</button>
      </div>
      
    </div>
  </div>
  <div className="col">
    <div className="card gallery-card h-100">
      <img src={physio} class="card-img-top" alt="..."/>
      <div className="card-body d-flex flex-column align-items-center justify-content-cente">
        <h5 className="card-title">Physiotherapy and Rehabilitation</h5>
        <button className='btn btn-primary'>Read more</button>
      </div>
     
    </div>
  </div>
</div>

</div>
  )
}

export default Gallery