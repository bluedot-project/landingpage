import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServiceSection from './ServiceSection'
import ArtistSection from './ArtistSection'
import Footer from './Footer'

const AppLayout = ({ children }) => {

    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutSection/>
            
            <ServiceSection/>
            <ArtistSection/>
            
            <Footer/>
        </>

        
    )
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;
