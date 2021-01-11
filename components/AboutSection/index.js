import React from 'react'
import { AboutContainer, AboutH1, AboutH3, AboutInfoWrapper, AboutCardWrapper, AboutCard, 
    CardIcon, CardH2, CardH3} from './AboutElements';
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
                <AboutCard>
                    <CardIcon src={Textbox} />
                    <CardH2> Communication</CardH2>
                    <CardH3>블루닷은 팬과 아티스트간의 간편하고 다양한 상호 소통을 지원합니다.  팬들을 만들고 소통을 통해 그들의 별이 되어 주세요.</CardH3>
                    
                        
                </AboutCard>

                <AboutCard>
                    <CardIcon src={Textbox} />
                    <CardH2>Freedom</CardH2>
                    <CardH3>블루닷이 제공하는 서비스를 통해 이윤을 창출할 수 있습니다.  이를 통해 자유로운 창작활동을 하고 팬을 모아보세요.</CardH3>
                    {/* <ServicesIcon />
                    <ServicesH2>Virtual Profile</ServicesH2>
                    <ServicesP>You can build your brand with our platform online.</ServicesP> */}
                </AboutCard>

                <AboutCard>    
                    <CardIcon src={Textbox} />
                    <CardH2>Challenge</CardH2>
                    <CardH3>블루닷에서는 새로운 도전을 응원합니다. 다양한 소통과 협업을 통해 새로운 창작기회에 도전해보세요.</CardH3>
                    {/* <Servicenlock our special membership card that returns 5% cash back.</ServicesP> */}
                </AboutCard>

            </AboutCardWrapper>
        </AboutContainer>
    )
}

export default AboutSection
