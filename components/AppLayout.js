import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar/Navbar';
import HeroSection from './HeroSection/HeroSection';
import AboutSection from './AboutSection/AboutSection';
import ServiceSection from './ServiceSection/ServiceSection';


const AppLayout = ({ children }) => {
    
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutSection/>
            <ServiceSection />
            
        </>

        
    )
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;
