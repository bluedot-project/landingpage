import React from 'react'
import { ServiceCardContainer, InfoWrapper, InfoRow, Column1, Column2, ImgWrap,
    Img, TextWrapper, TopLine, Subtitle} from '../ServiceElements'

const Card = ({ id, imgStart, topLine, description1, 
                description2, img, alt}) => {
    return (
        <>
         {/* <ServiceCardContainer id={id}> */}
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column1>
                    
                    <Column2>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Subtitle>{description1}</Subtitle>
                        <Subtitle>{description2}</Subtitle>
                        
                    </TextWrapper>
                    </Column2>

                 
                </InfoRow>
            </InfoWrapper>
            {/* </ServiceCardContainer> */}

        
              
        </>
    )
}

export default Card
