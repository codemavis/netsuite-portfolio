import React from 'react'

function Footer() {
    return (
        <footer class="site-footer" role="contentinfo">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-md-4 mb-5">
                        <h3 class="mb-4">About FitMo</h3>
                        <p class="mb-5">We deliver innovative NetSuite ERP solutions, specializing in custom SuiteScripts, integrations, and automation to streamline operations and drive business success.</p>
                        <ul class="list-unstyled footer-link d-flex footer-social">
                            <li><a href="#" class="p-2"><span class="fa fa-twitter"></span></a></li>
                            <li><a href="#" class="p-2"><span class="fa fa-facebook"></span></a></li>
                            <li><a href="#" class="p-2"><span class="fa fa-linkedin"></span></a></li>
                            <li><a href="#" class="p-2"><span class="fa fa-instagram"></span></a></li>
                        </ul>

                    </div>
                    <div class="col-md-5 mb-5 pl-md-5">
                        <div class="mb-5">
                            <h3 class="mb-4">Contact Info</h3>
                            <ul class="list-unstyled footer-link quick-contact">
                                <li class="d-block">
                                    <span class="d-block caption">Address:</span>
                                    <span class="caption-text">#106, Bernards Business Park, Dutugemunu Street, Kohuwala, Sri Lanka, 10350</span>
                                </li>
                                <li class="d-block">
                                    <span class="d-block caption">Telephone:</span><span class="caption-text">+94 77 8181 704</span>
                                </li>
                                <li class="d-block">
                                    <span class="d-block caption">Email:</span><span class="caption-text">sathasivam.sujee@gmail.com</span>
                                </li>
                            </ul>
                        </div>


                    </div>
                    <div class="col-md-3 mb-5">
                        <h3 class="mb-4">Quick Links</h3>
                        <ul class="list-unstyled footer-link">
                            <li><a href="/about">About</a></li>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Disclaimers</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3">

                    </div>
                </div>
                <div class="row">
                    <div class="col-12 text-md-center text-left">
                        <p class="copyright"><small>&copy;
                            {new Date().getFullYear()} FitMo. All Rights Reserved. Design by <a
                                href="https://master.d232rj8edogtva.amplifyapp.com/" target="_blank">Sujee Sathasivam</a></small></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer;