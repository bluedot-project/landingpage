import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar/Navbar';
import HeroSection from './HeroSection/HeroSection';
import AboutSection from './AboutSection/AboutSection';
import ServiceSection from './ServiceSection/ServiceSection'
import { HomeObjOne, HomeObjTwo, HomeObjThree } from '../components/ServiceSection/Data'

import img1 from '../images/service-img-1.png'
import img2 from '../images/service-img-2.png'
// import img3 from '../images/svg-3.svg'

const AppLayout = ({ children }) => {
    
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutSection/>
            <ServiceSection {...HomeObjOne} img={img1} />
            
        </>

        
    )
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;
