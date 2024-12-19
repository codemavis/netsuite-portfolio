import React from 'react'
import hero_2 from "../../images/hero_2.jpg";

const Creativity = () => {
  return (
    <div class="section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 order-md-2" data-aos="fade-up" data-aos-delay="100">
          <figure class="img-dotted-bg">
            <img src={hero_2} alt="Image" class="img-fluid"/>
          </figure>
        </div>
        <div class="col-md-5 mr-auto" data-aos="fade-up" data-aos-delay="">
          <h2 class="mb-4 section-title">Your Trusted <strong>NetSuite</strong> Partner</h2>
          <p>We are a team of passionate NetSuite developers dedicated to helping businesses 
            unlock their full potential through innovative ERP solutions. With years of experience 
            in SuiteScript development, SuiteFlow customizations, and seamless API integrations, we 
            pride ourselves on delivering scalable and efficient results tailored to each client’s needs.</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Creativity