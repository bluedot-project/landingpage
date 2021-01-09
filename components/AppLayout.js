import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link';


const AppLayout = ({ children }) => {
    
    return (
        <div>
            {children}
        </div>

        
    )
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;
