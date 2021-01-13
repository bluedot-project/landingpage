import styled from 'styled-components'
import bg from '../../assets/images/section-2-service.png';

export const Bg = styled.div`
    background-image: url(${bg});
    backgooun-size: cover;
    background-position: center;
    background-repeat: no-repeat;

`

export const ServiceContainer = styled.div`
    display: flex;
    height: 3226px;
    margin :  0 13.427% 0 13.23%;
    max-width: 1920px;
    flex-direction: column;

    @media screen and (max-width: 1680px){
     height: 2600px;
    }

    @media screen and (max-width: 1400px){
        height: 2200px;
    }
    @media screen and (max-width: 1080px){
        height: 1800px;
    }
    @media screen and (max-width: 768px){
        height: 3100px;
        max-width:700px;
    }

    @media screen and (max-width: 480px){
        height: 2900px;
    }
`
export const ServiceInfoWrapper = styled.div`
    display: grid;
    word-break: keep-all;
    margin: 0 auto;
    margin-top: 101px; 
    margin-left: 0;
    margin-bottom: 11.364%;
    text-align: left;
    max-width: 1400px;
    

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
    
`

export const ServiceH1 = styled.h1`
    color: #000;
    width: 202px;
    height: 67px;
    object-fit: contain;
    font-family: Ubuntu;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    font-size: 60px;
    letter-spacing: -3.6px;
    text-align: left;
    color: #000;

    margin-block-start: 0;
    margin-block-end: 8.1%;
    margin-inline: 0;



    @media screen and(max-width: 480px){
        font-size: 2rem;
    }
`
export const ServiceH3 = styled.h3`

    width: 532px;
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

    margin-block: 0;
    margin-inline: 0;
    
`

export const ServiceCardContainer = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;
    max-width: 1920px;
    
    @media screen and (max-width: 768px){
        max-width: 580px;
        padding: 100px 0;
    }
`


export const InfoWrapper = styled.div`
display: grid;
margin: 0 auto;
margin-left: ${({imgStart}) => (imgStart ? `-6%` : `0`)};
margin-bottom: 12.3%;
grid-template-columns: 1fr;
justify-content: center;
align-items: center;

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr;
}

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
    margin: 0 auto;
}
    
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
    grid-area: col2;
   
`

export const ImgWrap = styled.div`
    width:100%;

    @media screen and (max-width: 1680px){
        margin-right: -80px;
    }

    @media screen and (max-width: 1400px){
        margin-right: -20px;
    }
    @media screen and (max-width: 768px){
        margin-top: -100px;
        max-width: 500px;
    }
`

export const Img = styled.img`
    width: 933.5px;
    height: 690.1px;
    object-fit: contain;

    @media screen and (max-width: 1680px){
        width: 800.5px;
        height: 500.1px;
    }
    @media screen and (max-width: 1400px){
        width: 600.5px;
        height: 400.1px;
    }

    @media screen and (max-width: 1080px){
        width: 450.5px;
        height: 300.1px;
    }
    @media screen and (max-width: 768px){
        width: 500.5px;
        height: 400.1px;
    }
`

export const Column2 = styled.div`
    margin-bottom: ${ ({ num }) => (num===1 ? `250px` :
        (num===2 ? `-110px` : 
        (num===3 ? `-350px` : `0`)))};
    grid-area: col1;
    width:100%;
    word-break: keep-all;

    @media screen and (max-width: 1080px){
        
        margin-bottom: ${ ({ num }) => (num===1 ? `180px` :
        (num===2 ? `-50px` : 
        (num===3 ? `-120px` : `0`)))};
    margin-right:  ${ ({ num }) => (num===2 ? `-250px`: `0px` )};
    }

    @media screen and (max-width: 768px){
        margin-bottom: 180px;
    }
`

export const TextWrapper = styled.div`
    height: 100%;
    max-width: 520px;
    padding-left: ${ ({ num }) => (num===2 ? `0px` : `90px`)};
    
    @media screen and (max-width: 1080px){
        max-width: 300px;
    }
    @media screen and (max-width: 768px){
        padding-left: 90px;
    }
`

export const TopLine = styled.h1`
    object-fit: contain;
    width: 480px;
    font-family: NanumSquareOTFEB;
    font-size: 78px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: -3.12px;
    text-align: left;
    color: #000;

    margin-block-start: 0;
    margin-block-end: 5.163%;

    @media screen and (max-width: 1680px){
        font-size : 62px;
        margin-bottom: 30px;

    }

    @media screen and (max-width: 1400px){
        width: 280px;
        font-size: 48px;
        height: 60px;
        margin-bottom: 30px;
    }

    @media screen and (max-width: 1080px){
        font-size: 36px;
        margin-bottom: 2px;
    }
    @media screen and (max-width: 768px){
        font-size: 48px;
        margin-bottom: 40px;
    }
    
`

export const Subtitle = styled.h3`
    width: 560px;
    max-width: 560px;
    margin-bottom: 0;
    font-family: NanumSquareOTFR;
    font-size: 18px;
    font-weight: normal;
    line-height: 1.67;
    letter-spacing: -0.72px;
    text-align: left;
    color: #8d8d8d;

    margin-block: 0;
    margin-inline:0;
    
    @media screen and (max-width: 1680px){
        font-size : 16px
    }
    
    @media screen and (max-width: 1400px){
        font-size: 14px;
        width: 440px;
    }

    @media screen and (max-width: 1080px){
        font-size: 10px;
        width: 200px;
    }

    @media screen and (max-width: 768px){
        font-size: 14px;
        width: 560px;
    }
    @media screen and (max-width: 480px){
        font-size: 8px;
    }
`
