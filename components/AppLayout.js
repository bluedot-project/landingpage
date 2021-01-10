import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServiceSection from './ServiceSection'
import { HomeObjOne, HomeObjTwo, HomeObjThree } from './ServiceSection/ServiceCard/Data'

import img1 from '../images/service-img-1.png'
import img2 from '../images/service-img-2.png'
// import img3 from '../images/svg-3.svg'

const AppLayout = ({ children }) => {
    
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutSection/>
            <ServiceSection  />
            
        </>

        
    )
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;
