import React  from 'react';
import {ServiceContainer, ServiceInfoWrapper, Bg, Line,
        ServiceH1, ServiceH3 } from './ServiceElements';
import TitleUnderline from '../../../assets/images/shape-titleunderline.png';


import ServiceCard from './ServiceCard/index.js';
import { HomeObjOne, HomeObjTwo, HomeObjThree, MoHomeObjOne, MoHomeObjThree, MoHomeObjTwo } from './ServiceCard/Data'
import img1 from '../../../assets/images/service-img-1.png';
import img2 from '../../../assets/images/service-img-2.png';
import img3 from '../../../assets/images/service-img-3.png';


    const ServiceSection = () => {
    return (
        <>     
        <Bg>
        <ServiceContainer id="service"> 
            <ServiceInfoWrapper>
                <ServiceH1>Service</ServiceH1>
                <Line />
                <ServiceH3>블루닷의 양방향소통의 장점을 살린 서비스는 쉽고 간편하지만 활용가치가 무궁무진합니다.</ServiceH3> 
                {/* </ServiceH3>
                <ServiceH3> */}
                     
                
            </ServiceInfoWrapper>
        

                <ServiceCard {...HomeObjOne} img={img1} mobile='off'/>
                <ServiceCard {...HomeObjTwo} img={img2} mobile='off'/>
                <ServiceCard {...HomeObjThree} img={img3} mobile='off'/>

                {/* <ServiceCard {...MoHomeObjOne} img={img1} mobile='on'/>
                <ServiceCard {...MoHomeObjTwo} img={img2} mobile='on'/>
                <ServiceCard {...MoHomeObjThree} img={img3} mobile='on'/> */}

        </ServiceContainer>
        </Bg>
    </>
    )
}

export default ServiceSection
