import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar/Navbar';
import HeroSection from './HeroSection/HeroSection';


const AppLayout = ({ children }) => {
    
    return (
        <>
            <Navbar />
            <HeroSection />
        </>

        
    )
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;
