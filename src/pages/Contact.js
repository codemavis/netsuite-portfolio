import React from 'react';

import hero_2 from '../images/hero_2.jpg'
import Message from '../module/contact/Message';
import Testimonial from '../module/home/Testimonial';
import MoreTogether from '../module/home/MoreTogether';
import Banner from '../module/home/Banner';
import HeaderBackground from '../module/home/HeaderBackground';

const Contact = () => {
  return (
    <>
      <Banner />

      <HeaderBackground backgroundImage={hero_2} title="Contact Us" path="Contact"  />

      <Message />
      <Testimonial />
      <MoreTogether />
    </>
  );
};

export default Contact;
