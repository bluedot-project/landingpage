import styled from 'styled-components'


export const ServiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`
export const ServiceInfoWrapper = styled.div`
    display: grid;
    word-break: keep-all;
    margin: 0 auto;
    margin-top: 173.9px; 
    margin-left: 13.4%; 
    margin-bottom: 8.3%;
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

export const ServiceH1 = styled.h1`
    color: #000;
    margin-bottom: 42.5px;
    width: 202px;
    height: 67px;
    font-family: Ubuntu;
    font-size: 60px;
    letter-spacing: -3.6px;
    text-align: left;
    color: #000;

    @media screen and(max-width: 480px){
        font-size: 2rem;
    }
`
export const ServiceH3 = styled.h3`
    width: 532px;
    margin-bottom: 0;
    object-fit: contain;
    font-family: NanumSquareOTFR;
    font-size: 18px;
    line-height: 1.67;
    letter-spacing: -0.72px;
    text-align: left;
    color: #8d8d8d;
`

export const ServiceCardContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`


export const InfoWrapper = styled.div`
display: flex;
z-index: 1;
margin: 0 auto;
margin-left: ${({imgStart}) => (imgStart ? `-2%` : `10%`)};
margin-bottom: 12.7%;

justify-content: center;
align-items: center;
    
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-column: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`


export const Column1 = styled.div`
    margin-right: 117px;
    padding: 0 15px;
    grid-area: col2;
    
`

export const ImgWrap = styled.div`
    max-width: 1000px;
    height: 100%;
`

export const Img = styled.img`
    width: 920.5px;
    height: 649.1px;
    object-fit: contain;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    grid-area: col1;
    word-break: keep-all;
`

export const TextWrapper = styled.div`
    // padding-bottom: 246px;
    height: 100%;
    max-width: 500px;
`

export const TopLine = styled.h1`
    width: 427px;
    height: 86px;
    object-fit: contain;
    font-family: NanumSquareOTFEB;
    margin-bottom: 49.3px;
    font-size: 78px;
    letter-spacing: -3.12px;
    text-align: left;
    color: #000;
    
`

export const Subtitle = styled.h3`
    width: 560px;
    max-width: 560px;
    margin-bottom: 0;
    font-family: NanumSquareOTFR;
    font-size: 18px;
    line-height: 1.67;
    letter-spacing: -0.72px;
    text-align: left;
    color: #8d8d8d;
    
    

    @media screen and (max-width: 480px){
        font-size: 12px;
    }
`
