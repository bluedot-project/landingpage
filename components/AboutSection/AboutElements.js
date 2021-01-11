import styled from 'styled-components'

export const AboutContainer = styled.div`
    height: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #e2e2e2;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`
export const AboutInfoWrapper = styled.div`
    
    display: grid;
    word-break: keep-all;
    margin: 0 auto;
    margin-top: 173.9px; 
    margin-left: 13.4%; 
    text-align: left;
    max-width: 1200px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
    
`

export const AboutH1 = styled.h1`
    color: #000;
    margin-bottom: 42.5px;
    
    width: 202px;
    height: 67px;
    object-fit: contain;
    font-family: Ubuntu;
    font-size: 60px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -3.6px;
    text-align: left;
    color: #000;

    @media screen and(max-width: 480px){
        font-size: 2rem;
    }
`
export const AboutH3 = styled.h3`
width: 532px;
height: 50px;
object-fit: contain;
font-family: NanumSquareOTFR;
font-size: 18px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 1.67;
letter-spacing: -0.72px;
text-align: left;
color: #8d8d8d;

`
export const AboutCardWrapper = styled.div`

    margin: 0 auto;
    margin-top: 173.6px;
    margin-left: 12.8%; 
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    max-width: 1200px;


    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
    
`
export const AboutCard = styled.img`
width: 457px;
height: 359.6px;
margin-right : 28px;
object-fit: contain;
`

