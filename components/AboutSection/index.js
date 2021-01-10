import React from 'react'
import { AboutContainer, AboutH1, AboutWrapper, AboutCard,
    ServicesIcon, ServicesH2, ServicesP} from './AboutElements';
import Textbox from '../../images/about-textbox@2x.png'


// TODO ; 이미지 위에 텍스트 입력?

const AboutSection = () => {
    return (
        <AboutContainer id="services">
            <AboutH1>Bluedot</AboutH1>
            <AboutWrapper>
                <AboutCard src={Textbox}>
                    {/* <ServicesIcon />
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We Help reduce your fees and increase your overall revenue.</ServicesP> */}
                </AboutCard>
                <AboutCard src={Textbox}>
                    {/* <ServicesIcon />
                    <ServicesH2>Virtual Profile</ServicesH2>
                    <ServicesP>You can build your brand with our platform online.</ServicesP> */}
                </AboutCard>
                <AboutCard src={Textbox}>
                    {/* <ServicesIcon />
                    <ServicesH2>Premiun Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP> */}
                </AboutCard>

            </AboutWrapper>
        </AboutContainer>
    )
}

export default AboutSection
