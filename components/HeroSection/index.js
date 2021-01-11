import React from 'react'
import styled from 'styled-components';

export const HeroContainer = styled.div`
background: #2f2d2e;
display: flex;
width: 100%;
height: 1080px;

object-fit: contain;
`

const Slogan = styled.div`
// padding: 250.7px 0px 604px 247.8px;
width: 100%;


`
const SloganH1_1 = styled.h1`
    width: 680px;
    margin-bottom: 0px;
    font-family: Ubuntu;
    font-size: 110px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: -4.4px;
    text-align: left;
    color: var(--black);
`
const SloganH1_2 = styled.h1`
width: 680px;
  font-family: Ubuntu;
  font-size: 110px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: -4.4px;
  text-align: left;
  color: var(--black);
`
import main from '../../images/video.png'

const HeroSection = () => {
    return (
        <>
            <HeroContainer>
                <Slogan>
                    <img src={main} alt=""
                        style={{ width: '100%'}}/>
                    {/* <SloganH1_1>
                        Paint        
                    </SloganH1_1>
                    <SloganH1_2>
                        Your Own Dot
                        On The World
                    </SloganH1_2> */}
                </Slogan>
            </HeroContainer>
        </>
    )
}

export default HeroSection
