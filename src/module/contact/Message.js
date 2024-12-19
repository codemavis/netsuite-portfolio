import React from 'react'

const Message = () => {
    return (
        <div class="section">
            <div class="container">
                <div class="row mb-5">

                    <div class="col-12 mb-5 order-2">
                        <form action="#" method="post">
                            <div class="row">
                                <div class="col-md-6 form-group">
                                    <label for="name">Name</label>
                                    <input type="text" id="name" class="form-control " />
                                </div>
                                <div class="col-md-6 form-group">
                                    <label for="phone">Phone</label>
                                    <input type="text" id="phone" class="form-control " />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 form-group">

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 form-group">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" class="form-control " />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 form-group">
                                    <label for="message">Write Message</label>
                                    <textarea name="message" id="message" class="form-control " cols="30" rows="8"></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 form-group">
                                    <input type="submit" value="Send Message" class="btn btn-outline-black px-3 py-3" />
                                </div>
                            </div>
                        </form>
                    </div>


                </div>

                <div class="row">
                    <div class="col-12 contact-form-contact-info">
                        <div class="row">
                            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="">
                                <p class="d-flex">
                                    <span class="ion-ios-location icon mr-5"></span>
                                    <span>#106, Bernards Business Park, Dutugemunu Street, Kohuwala, Sri Lanka, 10350</span>
                                </p>
                            </div>
                            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                                <p class="d-flex">
                                    <span class="ion-ios-telephone icon mr-5"></span>
                                    <span>+94 77 8181 704</span>
                                </p>
                            </div>
                            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                                <p class="d-flex">
                                    <span class="ion-android-mail icon mr-5"></span>
                                    <span>sathasivam.sujee@gmail.com</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message