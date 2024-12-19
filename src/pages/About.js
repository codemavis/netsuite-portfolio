import React from 'react';

import hero_2 from '../images/hero_2.jpg'
import Creativity from '../module/about/Creativity';
import MeetOurTeam from '../module/about/MeetOurTeam';
import Testimonial from '../module/home/Testimonial';
import MoreTogether from '../module/home/MoreTogether';
import Banner from '../module/home/Banner';
import HeaderBackground from '../module/home/HeaderBackground';

const About = () => {
  return (
    <>
      <Banner />
      <HeaderBackground backgroundImage={hero_2} title="Office Life" path="About" />

      <Creativity />
      <MeetOurTeam />
      <Testimonial />
      <MoreTogether />
    </>
  );
};

export default About;
