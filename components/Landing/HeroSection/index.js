import React from 'react'
import styled from 'styled-components';
import bg from '../../../assets/images/top-bg.png'
import mBg from '../../../assets/images/mobile-top-bg.png'
import Video from '../../../assets/video/hero-video.mp4';

import Link from 'next/link';


export const HeroWrapper = styled.section`
    background-image: url(${bg});
    backgoound-size: cover;
    background-position: 35% 30.125%;
    background-repeat: no-repeat;
    background-color: #fff;

    @media screen and (max-width: 480px){
        background-image: url(${mBg});
    }
`

export const HeroContainer = styled.div`

    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 1005px;
    position: relative;
    margin-left: 13.125%;
    margin-right: 13.49%;
    z-index: 2;

    
    @media screen and (max-width: 1080px){
        height: 600px;
    
    }

    @media screen and (max-width: 768px){
        height: 430px;
    }

    @media screen and (max-width: 480px){
        justify-content: center;
        height: 264px;
        margin :  0 8.2159% 0 8.2159%;
    }
`

const CtaBtn = styled.div`
    width: 175px;
    height: 55px;
    object-fit: contain;
    border-radius: 12px;
    border: solid 2.5px #1127fe;
    background-color: #fff;
    cursor: pointer;


    font-family: NanumSquare;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: -1.2px;

    font-stretch: normal;
    font-style: normal;
    
    text-align: center;
    color: var(--vivid-blue-color);


    padding: 12px 10px 12px 10px;
    margin-block-start: 70px;
    
    &:hover{
        transition: all 0.2s ease-in-out;
        background: var(--vivid-blue-color);
        color: #fff;
    }

    @media screen and (max-width: 480px){
        margin-block-start: 32px;
    }

`

// const Bg = styled.img`
//         width: 100%;
//         height: auto;
//         vertical-align: middle;
    
// `


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
    margin: 0 24.699% 0 24.77%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index:3;

    @media screen and (max-width: 1080px){
        margin: 0 15.699% 0 15.77%;
    }

    @media screen and (max-width: 480px){
        // margin: 0 5.699% 0 5.77%;
        margin: 0;
    }

`
const SloganH1 = styled.h1`
    width: 720px;
    margin: 0 0 69px;
    font-family: Ubuntu;
    font-size: 86px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.16;
    letter-spacing: -5.16px;
    text-align: center;
    z-index:4;
    max-width: 1920px;

    margin-block-start: 0;
    margin-block-end: 1%;
    margin-inline-start: 13.23%;
    margin-inline-end:  13.427%;

    @media screen and (max-width: 1400px){
        width: 500px;
        font-size: 60px;
    
    }
 

    @media screen and (max-width: 768px){
        width: 370px;
        font-size: 48px;
    }


    @media screen and (max-width: 480px){
        width: 300px;
        font-size: 36px;
        line-height: 1.11;
        letter-spacing: -2.16px;
        text-align: center;

        // margin-inline-start: 14.23%;
        // margin-inline-end:  13.427%;
        margin-inline: 0;
    }
`



const HeroSection = () => {
    return (
        <>
            <HeroWrapper id="home">
            {/* <Bg src={bg} alt=""/> */}
                <HeroContainer>
                
                 {/* <Bg> */}
                   {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4' /> */}
                  
            
                {/* </Bg> */}
                    <HeroContent>
                        <SloganH1>
                            Paint Your Own Dot
                        </SloganH1>
                        <SloganH1>
                            On The World
                        </SloganH1>

                        <Link href="https://www.notion.so/Bluedot-pamphlet-966bc237345a4e7fa823be8291fa77dd">
                            <CtaBtn>
                                팜플렛 보러가기
                            </CtaBtn>
                        </Link>
                    </HeroContent>
                </HeroContainer>
            </HeroWrapper>
        </>
    )
}

export default HeroSection
