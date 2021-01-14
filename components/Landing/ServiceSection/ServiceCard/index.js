import React from 'react'
import { ServiceCardContainer, InfoWrapper, InfoRow, Column1, Column2, ImgWrap,
    Img, TextWrapper, TopLine, Subtitle} from '../ServiceElements'

const Card = ({ id, imgStart, topLine,topLine2, description1, 
                description2,description3, num, img, alt}) => {
    return (
        <>
         <ServiceCardContainer id={id}>
            <InfoWrapper  num={num}>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <ImgWrap num={num}>
                            <Img src={img} alt={alt} num={num} />
                        </ImgWrap>
                    </Column1>
                    
                    <Column2 num={num}>
                    <TextWrapper num={num}>
                        <TopLine num={num}>{topLine}</TopLine>
                        { num ===1 &&
                        <TopLine num='1'>{topLine2}</TopLine>}
                        <Subtitle num={num}>{description1}</Subtitle>
                        <Subtitle num={num}>{description2}</Subtitle>
                        <Subtitle num={num}>{description3}</Subtitle>
                        
                    </TextWrapper>
                    </Column2>

                 
                </InfoRow>
            </InfoWrapper>
            </ServiceCardContainer>

        
              
        </>
    )
}

export default Card
