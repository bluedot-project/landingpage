// 페이지 공통부분 처리
import React from 'react'
import PropTypes from 'prop-types';
import 'antd/dist/antd.css'
import Head from 'next/head'
import '../styles/global.css'

const App = ({ Component }) => {
    return (
        <>
        <Head>
            <meta charSet="utf-8"/>
            <title>Bluedot 블루닷 : 아티스트 브랜딩 콘텐츠 커뮤니티 플랫폼</title>
            <link rel="stylesheet" href="style.css" />
            <link rel="globalstylesheet" href="../styles/global.css" />
        </Head>


        <Component />
{/* 
        <style global jsx>{
            `
            body {
                font-family: InkLipquid, Ubuntu, NanumSquareOTFEB, NanumSquareOTFR;
            }
            `
        }

        </style> */}
        </>
    )
};

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default App;