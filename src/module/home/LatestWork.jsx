import React from 'react'
import work_1 from "../../assets/images/work_1.jpg";
import  work_2 from "../../assets/images/work_2.jpg";
import  work_3 from "../../assets/images/work_3.jpg";
import work_4 from "../../assets/images/work_4.jpg";

const LatestWork = () => {
    return (
        <div class="section portfolio-section">
            <div class="container">
                <div class="row mb-5 justify-content-center" data-aos="fade-up">
                    <div class="col-md-8 text-center">
                        <h2 class="mb-4 section-title">Latest Work</h2>
                        <p>Explore our cutting-edge NetSuite solutions designed to streamline operations and elevate business efficiency. From seamless integrations to custom SuiteScript implementations, our latest projects reflect our commitment to delivering exceptional value to our clients.</p>
                        <p><a href="/projects">View All Portfolio</a></p>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row mb-5 no-gutters">
                    <div class="col-sm-6 col-md-6 col-lg-6" data-aos="fade" data-aos-delay="100">
                        <a href="/solutions?proj=suitescript" class="work-thumb">
                            <div class="work-text">
                                <h2>Custom SuiteScript Solutions</h2>
                                <p>Business</p>
                            </div>
                            <img src={work_1} alt="Image" class="img-fluid" />
                        </a>
                    </div>

                    <div class="col-sm-6 col-md-6 col-lg-6" data-aos="fade" data-aos-delay="200">
                        <a href="/solutions?proj=erp" class="work-thumb">
                            <div class="work-text">
                                <h2>ERP Integration and Migration</h2>
                                <p>Design</p>
                            </div>
                            <img src={work_2}  alt="Image" class="img-fluid" />
                        </a>
                    </div>

                    <div class="col-sm-6 col-md-6 col-lg-6" data-aos="fade" data-aos-delay="300">
                        <a href="/solutions?proj=fin" class="work-thumb">
                            <div class="work-text">
                                <h2>Financial and Budgeting Solutions</h2>
                                <p>Business</p>
                            </div>
                            <img src={work_3}  alt="Image" class="img-fluid" />
                        </a>
                    </div>

                    <div class="col-sm-6 col-md-6 col-lg-6" data-aos="fade" data-aos-delay="400">
                        <a href="/solutions?proj=crm" class="work-thumb">
                            <div class="work-text">
                                <h2>CRM and Sales Optimization</h2>
                                <p>Business</p>
                            </div>
                            <img src= {work_4} alt="Image" class="img-fluid" />
                        </a>
                    </div>

                </div>

                <div class="row mt-5">
                    <div class="col-12 text-center">
                        <p><a href="/projects" class="btn btn-outline-white px-4 py-3">More Portfolio</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestWork