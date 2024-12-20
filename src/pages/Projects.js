import React from 'react';

import hero_2 from '../assets/images/hero_2.jpg'
import Banner from '../module/home/Banner';
import HeaderBackground from '../module/home/HeaderBackground';
import MoreTogether from '../module/home/MoreTogether';
import AwesomeWork from '../module/project/AwesomeWork';
import OurServices from '../module/project/OurServices';


const Projects = () => {
    return (
        <>
            <Banner />


            <HeaderBackground backgroundImage={hero_2} title="Projects" path="Projects" />

            <AwesomeWork/>

            <OurServices/>

            <MoreTogether />
        </>
    );
};

export default Projects;