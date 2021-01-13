import React from 'react'
import styled from 'styled-components';
import bg from '../../assets/images/video.png'
import Video from '../../assets/video/hero-video.mp4';

export const HeroContainer = styled.div`

    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 1300px;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 1400px){
        height: 1080px;
    
    }
    @media screen and (max-width: 1400px){
        height: 760px;
    
    }
    
    @media screen and (max-width: 1080px){
        height: 600px;
    
    }

    @media screen and (max-width: 768px){
        height: 430px;
    
    }
`

const HeroBg = styled.div`

    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`


// const VideoBg = styled.video`
//     width: 100%;
//     height: 100%;
//     -o-object-fit: cover;
//     object-fit: cover;
//     background: #fff;
// `


const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const SloganH1 = styled.h1`
    width: 680px;
    font-family: Ubuntu;
    font-size: 110px;
    font-weight: bold;
    line-height: 1.36;
    letter-spacing: -4.4px;
    text-align: left;

    position: relative;
    max-width: 1920px;

    // margin-block-start: 0;
    // margin-block-end: 0;
    // margin-inline-start: 13.23%;
    // margin-inline-end:  13.427%;
`



const HeroSection = () => {
    return (
        <>
            <HeroContainer>
                <HeroBg>
                    {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4' /> */}
                    <img src={bg} alt=""
                        style={{ width: '100%'}}/>
                </HeroBg>

                <HeroContent>
                    {/* <SloganH1>
                        Paint        
                    </SloganH1>
                    <SloganH1>
                        Your Own Dot
                        On The World
                    </SloganH1> */}
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default HeroSection
