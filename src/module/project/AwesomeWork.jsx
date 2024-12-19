import React from 'react'

import work_1 from "../../images/work_1.jpg";
import work_2 from "../../images/work_2.jpg";
import work_3 from "../../images/work_3.jpg";
import work_4 from "../../images/work_4.jpg";

const AwesomeWork = () => {
    return (
        <div class="section portfolio-section">
            <div class="container">
                <div class="row mb-5 justify-content-center">
                    <div class="col-md-8 text-center">
                        <h2 class="mb-4 section-title" data-aos="fade-right" data-aos-delay="">Awesome Work</h2>
                        <p data-aos="fade-right" data-aos-delay="100">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Blanditiis accusamus perferendis
                            libero accusantium nisi.</p>
                        <p><a href="#">View All Portfolio</a></p>
                    </div>
                </div>
            </div>

            <div class="container-fluid">
                <div class="row mb-5 no-gutters">
                    <div class="col-sm-6 col-md-6 col-lg-6" data-aos="fade" data-aos-delay="">
                        <a href="portfolio-single.html" class="work-thumb">
                            <div class="work-text">
                                <h2>Startup Brand</h2>
                                <p>Business</p>
                            </div>
                            <img src={work_1} alt="Image" class="img-fluid" />
                        </a>
                    </div>

                    <div class="col-sm-6 col-md-6 col-lg-6" data-aos="fade" data-aos-delay="100">
                        <a href="portfolio-single.html" class="work-thumb">
                            <div class="work-text">
                                <h2>Corporate Design</h2>
                                <p>Design</p>
                            </div>
                            <img src={work_2} alt="Image" class="img-fluid" />
                        </a>
                    </div>

                    <div class="col-sm-6 col-md-6 col-lg-6" data-aos="fade" data-aos-delay="">
                        <a href="portfolio-single.html" class="work-thumb">
                            <div class="work-text">
                                <h2>Unpacked Branding</h2>
                                <p>Business</p>
                            </div>
                            <img src={work_3} alt="Image" class="img-fluid" />
                        </a>
                    </div>

                    <div class="col-sm-6 col-md-6 col-lg-6" data-aos="fade" data-aos-delay="100">
                        <a href="portfolio-single.html" class="work-thumb">
                            <div class="work-text">
                                <h2>Rebranding Work</h2>
                                <p>Business</p>
                            </div>
                            <img src={work_4} alt="Image" class="img-fluid" />
                        </a>
                    </div>

                </div>

                <div class="row mt-5">
                    <div class="col-12 text-center">
                        <p data-aos="fade-up" data-aos-delay=""><a href="portfolio.html" class="btn btn-outline-white px-4 py-3">More
                            Portfolio</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AwesomeWork