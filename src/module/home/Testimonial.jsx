import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import person1 from "../../images/person_1.jpg";
import person2 from "../../images/person_2.jpg";


const Testimonial = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1, 
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div class="section bg-light block-11">
            <div class="container">
                <div class="row justify-content-center mb-5">
                    <div class="col-md-8 text-center">
                        <h2 class="mb-4 section-title">Testimonial</h2>
                    </div>
                </div>

                <Slider {...settings}>
                    <div className="item">
                        <div className="block-33 h-100">
                            <div className="vcard d-flex mb-3">
                                <div className="image align-self-center">
                                    <img src={person1} alt="Person here" />
                                </div>
                                <div className="name-text align-self-center">
                                    <h2 className="heading">Sarah Williams</h2>
                                    <span className="meta">Operations Manager, Apex Logistics</span>
                                </div>
                            </div>
                            <div className="text">
                                <blockquote>
                                    <p>&rdquo;The custom automations Sujee implemented in NetSuite transformed how we manage our workflows. Tasks that took hours are now completed in minutes, with zero errors. Their expertise in SuiteScript is unparalleled!&ldquo;</p>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="block-33 h-100">
                            <div className="vcard d-flex mb-3">
                                <div className="image align-self-center">
                                    <img src={person2} alt="Person here" />
                                </div>
                                <div className="name-text align-self-center">
                                    <h2 className="heading">Michael Reed</h2>
                                    <span className="meta">CEO, TechNova Inc.</span>
                                </div>
                            </div>
                            <div className="text">
                                <blockquote>
                                    <p>&rdquo;Sujee's team handled our ERP migration to NetSuite seamlessly. Their attention to detail and thorough testing ensured zero data loss. We’re now running a more efficient and connected business than ever.&ldquo;</p>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="block-33 h-100">
                            <div className="vcard d-flex mb-3">
                                <div className="image align-self-center">
                                    <img src={person1} alt="Person here" />
                                </div>
                                <div className="name-text align-self-center">
                                    <h2 className="heading">Priya Mehta</h2>
                                    <span className="meta">CFO, Horizon Textiles</span>
                                </div>
                            </div>
                            <div className="text">
                                <blockquote>
                                    <p>&rdquo;Our budgeting process used to be chaotic, but thanks to Sujee, we now have an integrated system that provides real-time visibility into financials. This has helped us stay on track and make data-driven decisions.&ldquo;</p>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="block-33 h-100">
                            <div className="vcard d-flex mb-3">
                                <div className="image align-self-center">
                                    <img src={person2} alt="Person here" />
                                </div>
                                <div className="name-text align-self-center">
                                    <h2 className="heading">David Lee</h2>
                                    <span className="meta">Sales Director, GreenTech Solutions</span>
                                </div>
                            </div>
                            <div className="text">
                                <blockquote>
                                    <p>&rdquo;The CRM customizations have been a game changer for our sales team. Sujee's enhancements improved lead tracking and streamlined follow-ups, boosting our conversion rates by 30%. Highly recommended!&ldquo;</p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>

    )
}

export default Testimonial;