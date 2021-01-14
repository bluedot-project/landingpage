import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar';
import HeroSection from './Landing/HeroSection';
import AboutSection from './Landing/AboutSection';
import ServiceSection from './Landing/ServiceSection'
import ArtistSection from './Landing/ArtistSection'
import Footer from './Landing/Footer'
// import asd from '../fonts/nanumSquare'
import {createGlobalStyle} from 'styled-components';

const Global = createGlobalStyle`

    body{
        margin: 0px;
        
        // @import url('../fonts/nanumSquare/NanumSquareOTFEB.otf');
        // @import url('../fonts/escore');
        // @import url('../fonts/ubuntu');
        // font-family: "NanumSquareOTFEB";
        // font-family:"NanumSquareOTFR";
        // ,"Ubuntu-Light","Ubuntu-Medium", "Ubuntu-Regular", sans-serif;
        

    }
    @font-face{
        font-family: "NanumSquareOTFEB";
        font-weight: normal;
        src: url('/fonts/nanumSquare/NanumSquareOTFEB.otf') format("truetype");
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
