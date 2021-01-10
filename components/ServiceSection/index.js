import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow,
    Column1, Column2, TextWrapper, TopLine, Heading,
    Subtitle, BtnWrap, ImgWrap, Img} from './ServiceElements'

import img1 from '../../images/service-img-1.png'

    const ServiceSection = ({lightBg, id, imgStart, topLine, lightText,
        headLine, lightTextDesc, description, pic, alt}) => {
    return (
        <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headLine}</Heading>
                        <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                        
                    </TextWrapper>
                    </Column1>

                    <Column2>
                        <ImgWrap>
                            <Img src={img1} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>    
    </>
    )
}

export default ServiceSection
