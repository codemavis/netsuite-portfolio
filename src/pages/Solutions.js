import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import hero_2 from '../assets/images/hero_2.jpg'
import Banner from '../module/home/Banner';
import HeaderBackground from '../module/home/HeaderBackground';
import MoreTogether from '../module/home/MoreTogether';
import AwesomeWork from '../module/project/AwesomeWork';
import OurServices from '../module/project/OurServices';
import SuiteScriptSolutions from '../module/solutions/SuiteScriptSolutions';
import ERP from '../module/solutions/ERP';
import Financial from '../module/solutions/Financial';
import CRM from '../module/solutions/CRM';


const Solutions = () => {

    const [searchParams] = useSearchParams();
    const proj = searchParams.get('proj');
    let title = '';

    switch (proj) {
        case 'suitescript':
            title = "Custom SuiteScript Solutions"
            break;

        case 'erp':
            title = "ERP Integration & Migration"
            break;

        case 'fin':
            title = "Financial & Budgeting Solution"
            break;

        case 'crm':
            title = "CRM & Sales Optimization"
            break;

        default:
            break;
    }


    return (
        <>
            <Banner />


            <HeaderBackground backgroundImage={hero_2} title={title} path="Projects" />

            {
                proj == 'suitescript' && <SuiteScriptSolutions /> ||
                proj == 'erp' && <ERP /> ||
                proj == 'fin' && <Financial /> ||
                proj == 'crm' && <CRM />
            }
            <OurServices />

            <MoreTogether />
        </>
    );
};

export default Solutions;