import React from 'react'
import { AboutContainer, AboutH1, AboutH3, AboutInfoWrapper, AboutCardWrapper, AboutCard, 
    ServicesIcon, ServicesH2, ServicesP} from './AboutElements';
import Textbox from '../../images/about-textbox@2x.png'
import TitleUnderline from '../../images/shape-titleunderline.png';


// TODO ; 이미지 위에 텍스트 입력?

const AboutSection = () => {
    return (
        <AboutContainer id="services">

            <AboutInfoWrapper>
            <AboutH1>Bluedot</AboutH1>
            <img src={TitleUnderline} class="shape_titleunderline"
                style={{ marginBottom: '27.8px'}}/>
            <AboutH3>블루닷은 아티스트들을 밤하늘의 푸른 별처럼 빛나게 하고자 만들어졌습니다.
                    개성을 뽐내고 재능을 통해 수익을 창출하세요.</AboutH3>
            </AboutInfoWrapper>

            <AboutCardWrapper>
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

            </AboutCardWrapper>
        </AboutContainer>
    )
}

export default AboutSection
