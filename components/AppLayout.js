import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar';
import HeroSection from './Landing/HeroSection';
import AboutSection from './Landing/AboutSection';
import ServiceSection from './Landing/ServiceSection'
import ArtistSection from './Landing/ArtistSection'
import Footer from './Landing/Footer'
import {createGlobalStyle} from 'styled-components';

const Global = createGlobalStyle`

    body{
        margin: 0px;
        
    }

    @font-face {
        font-family: "Ubuntu", sans-serif;
        font-weight: 300, 400, 500, 700;
        src: url("/fonts/ubuntu/Ubuntu-Regular.ttf") format("turetype");
    }


   

`

const AppLayout = ({ children }) => {

    return (
        <> 
            <Global />
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
