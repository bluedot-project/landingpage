import React from 'react'
import styled from 'styled-components';
import bg from '../../assets/images/video.png'
import Video from '../../assets/video/hero-video.mp4';

export const HeroContainer = styled.div`

    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 30px 0 320px;
    height: 1080px;
    
    position: relative;
    z-index: 1;


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
    // height: 100%;
    overflow: hidden;
`


const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`


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
    margin-bottom: 0px;
    font-family: Ubuntu;
    font-size: 110px;
    font-weight: bold;
    line-height: 1.36;
    letter-spacing: -4.4px;
    text-align: left;
`



const HeroSection = () => {
    return (
        <>
            <HeroContainer>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                    {/* <img src={main} alt=""
                        style={{ width: '100%'}}/> */}
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
