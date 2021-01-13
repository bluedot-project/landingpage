import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServiceSection from './ServiceSection'
import ArtistSection from './ArtistSection'
import Footer from './Footer'
// import asd from '../fonts/nanumSquare'
import {createGlobalStyle} from 'styled-components';

const Global = createGlobalStyle`

    body{
        margin: 0px;
        
        @import url('../fonts/nanumSquare');
        @import url('../fonts/escore');
        @import url('../fonts/ubuntu');
        font-family: "NanumSquareOTFEB","NanumSquareOTFR","Ubuntu-Light",
                    "Ubuntu-Medium", "Ubuntu-Regular", sans-serif;
        

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
