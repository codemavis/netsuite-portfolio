import React from 'react'

import person_1 from "../../images/person_1.jpg";
import person_2 from "../../images/person_2.jpg";

const MeetOurTeam = () => {
  return (
    <div class="section">
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-md-8 text-center" data-aos="fade-up" data-aos-delay="">
            <h2 class="mb-4 section-title">Meet Our <strong>Team</strong></h2>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div class="media d-block media-custom text-center">
              <a href="#"><img src={person_1} alt="Image Placeholder" class="img-fluid" /></a>
              <div class="media-body">
                <h3 class="mt-0 text-black">Sujee Sathasivam </h3>
                <strong>Founder & Lead NetSuite Developer</strong>
                <br /><br />
                <p>Sujee is the visionary behind our company, bringing over a decade of experience in software development and NetSuite ERP solutions. With a deep understanding of SuiteScript, SuiteFlow, and API integrations, Sujee ensures every project is crafted with precision and innovation. His passion for solving complex challenges drives the success of our client partnerships.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div class="media d-block media-custom text-center">
              <a href="#"><img src={person_2} alt="Image Placeholder" class="img-fluid" /></a>
              <div class="media-body">
                <h3 class="mt-0 text-black">Theekshani W</h3>
                <strong>Chief Operations Officer</strong>
                <br /><br />
                <p>Theekshani is the backbone of our operations, ensuring projects are delivered on time and to the highest quality standards. With expertise in business process optimization and team management, she bridges the gap between strategy and execution, ensuring client satisfaction every step of the way.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div class="media d-block media-custom text-center">
              <a href="#"><img src={person_1} alt="Image Placeholder" class="img-fluid" /></a>
              <div class="media-body">
                <h3 class="mt-0 text-black">Keshawa W</h3>
                <strong>Head of Creative Solutions</strong>
                <br /><br />
                <p>Keshawa leads our creative initiatives, ensuring every solution is not just functional but also intuitive and user-friendly. With a keen eye for detail and a flair for innovation, Keshawa transforms complex processes into streamlined, aesthetically pleasing solutions tailored to our clients’ unique needs.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default MeetOurTeam