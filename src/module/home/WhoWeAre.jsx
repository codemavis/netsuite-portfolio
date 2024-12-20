import React from 'react'

import  about_1 from "../../assets/images/about_1.jpg";
import work_1 from "../../assets/images/work_1.jpg";

const WhoWeAre = () => {
    return (
        <div class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 ml-auto mb-5 order-2">
                        <span class="d-block text-uppercase text-primary">Who We Are</span>
                        <h2 class="mb-4 section-title">Do Things That Matters. Plan. Create. Grow.</h2>
                        <p>We are passionate about solving complex business challenges with innovative NetSuite solutions. With years of expertise in SuiteScripts, SuiteFlow, and API integrations, we empower businesses to scale and thrive in an ever-changing digital landscape.</p>
                        <p class="mb-5">Let’s transform your vision into impactful solutions. Whether you’re starting from scratch or enhancing existing systems, we’re here to help you succeed.</p>
                        <p><a href="#" class="btn btn-outline-black">Learn More</a></p>
                    </div>
                    <div class="col-lg-6 order-1">
                        <figure class="img-dotted-bg">
                            <img src={about_1} alt="Image" class="img-fluid" />

                            <img src={work_1} alt="Image" class="img-fluid img-absolute" data-aos="fade-left" />

                        </figure>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre