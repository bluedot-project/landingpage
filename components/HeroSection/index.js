import React from 'react'
import styled from 'styled-components';
import bg from '../../images/video.png'

export const HeroContainer = styled.div`
background: #fff;
background-image: url(${bg});
width: 100%;
height: 1080px;
object-fit: contain;
`

const Slogan = styled.div`
padding: 12.3% 0px 0 12.9%;
width: 100%;

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
    color: var(--black);
`



const HeroSection = () => {
    return (
        <>
            <HeroContainer>
                <Slogan>
                    {/* <img src={main} alt=""
                        style={{ width: '100%'}}/> */}
                    <SloganH1>
                        Paint        
                    </SloganH1>
                    <SloganH1>
                        Your Own Dot
                        On The World
                    </SloganH1>
                </Slogan>
            </HeroContainer>
        </>
    )
}

export default HeroSection
