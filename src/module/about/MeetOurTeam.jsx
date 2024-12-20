import React from 'react'

import person_1 from "../../assets/images/person_1.jpg";
import person_2 from "../../assets/images/person_2.jpg";
import sujee from "../../assets/images/sujee.jpg";
import keshawa from "../../assets/images/keshawa.jpg";
import theek from "../../assets/images/theek.jpg";

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
              <a href="#"><img src={sujee} alt="Image Placeholder" class="img-fluid" /></a>
              <div class="media-body">
                <h3 class="mt-0 text-black">Sujee Sathasivam </h3>
                <strong>Chair & Chief Executive Officer</strong>
                <br /><br />
                <p>Sujee, the visionary behind our company, has over a decade of experience in software development and NetSuite ERP solutions. With expertise in SuiteScript, SuiteFlow, and API integrations, Sujee ensures each project is innovative and precise, driving the success of our client partnerships.
                </p> </div>
            </div>
          </div>
          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div class="media d-block media-custom text-center">
              <a href="#"><img src={keshawa} alt="Image Placeholder" class="img-fluid" /></a>
              <div class="media-body">
                <h3 class="mt-0 text-black">Keshawa W</h3>
                <strong>President</strong>
                <br /><br />
                <p>Keshawa, our President, leads daily operations and drives the company's strategic goals. With a focus on efficiency, growth, and team development, Keshawa ensures the company adapts to market changes while fostering innovation and strong stakeholder relationships.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div class="media d-block media-custom text-center">
              <a href="#"><img src={theek} alt="Image Placeholder" class="img-fluid" /></a>
              <div class="media-body">
                <h3 class="mt-0 text-black">Theekshani W</h3>
                <strong>Chief Operations Officer</strong>
                <br /><br />
                <p>Theekshani is the backbone of our operations, ensuring projects are delivered on time and to the highest quality standards. With expertise in business process optimization and team management, she bridges the gap between strategy and execution, ensuring client satisfaction every step of the way.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default MeetOurTeam