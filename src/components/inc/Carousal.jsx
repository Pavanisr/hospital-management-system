import React from 'react'
import jpg1 from '../images/jpg1.jpg';
import jpg2 from '../images/jpg2.jpg';
import jpg3 from '../images/jpg3.jpg';
import bgvideo from '../images/bgvideo.mp4';


function Carousal() {
  return (
    <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">

    

      <div class="carousel-item active">
        <img src={jpg1} class="d-block w-100" alt="..."/>
        <div class="angled-overlay">
        <div class="text">
          <h2 className='for-h'>Welcome to <b>MediLab</b></h2>
          <p>24/7 Emergency and multispecialisty hospital</p>
        </div>
        </div>
      </div>
      <div class="carousel-item">
        <img src={jpg2} class="d-block w-100" alt="..."/>
        <div class="angled-overlay">
        <div class="text">
          <h2 className='for-h'>We Care For Your Health Every Moment</h2>
        </div>
        </div>
      </div>
      <div class="carousel-item">
        <img src={jpg3} class="d-block w-100" alt="..."/>
        <div class="angled-overlay">
        <div class="text">
          <h2 className='for-h'><b>Meet The Best Experts</b></h2>
        </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Carousal