import React from 'react';

import hero_2 from '../assets/images/hero_2.jpg'

import LatestWork from '../module/home/LatestWork';
import WhoWeAre from '../module/home/WhoWeAre';
import Modules from '../module/home/Modules';
import Testimonial from '../module/home/Testimonial';
import MoreTogether from '../module/home/MoreTogether';
import Banner from '../module/home/Banner';
import HeaderBackground from '../module/home/HeaderBackground';

const Home = () => {
    return (
        <>
            <Banner />

            <HeaderBackground backgroundImage={hero_2} title="We create awesome stuff." isHome={true} />

            <LatestWork />
            <WhoWeAre />
            <Modules />
            <Testimonial />
            <MoreTogether />
        </>
    );
};

export default Home;
