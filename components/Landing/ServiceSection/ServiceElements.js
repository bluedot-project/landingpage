import styled from 'styled-components'
import bg from '../../../assets/images/section-2-service.png';


export const Bg = styled.div`
    background-image: url(${bg});
    // color: #000;
    backgooun-size: cover;
    background-position: center;
    background-repeat: no-repeat;

`

export const ServiceContainer = styled.div`
    display: flex;
    height: 2916px;
    margin :  0 13.2299% 0 13.3335%;
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
        margin :  0 8.2159% 0 8.2159%;
        height: 2900px;
    }

`

export const Line = styled.div`

        width: 45px;
        height: 2px;
        object-fit: contain;
        border-radius: 0.5px;
        background-color: #3d3d3d;
        
        margin: 10px 0 21px 0;

    @media screen and (max-width: 480px){
        width: 30px;
        height: 2.5px;
        
    }

`

export const ServiceInfoWrapper = styled.div`
    display: grid;
    word-break: keep-all;
    margin: 0 auto;
    margin-top: 200px; 
    margin-left: 0;
    margin-bottom: 9.717%;
    text-align: left;
    max-width: 1400px;
    

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
    
`

export const ServiceH1 = styled.h1`

    width: 164px;
    height: 56px;
    object-fit: contain;
    font-family: Ubuntu;
    font-size: 50px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.18;
    letter-spacing: -2px;
    text-align: left;
    color: #000;
    margin-block-start: 0;
    margin-block-end: 10.91%;
    margin-inline: 0;

    @media screen and (max-width: 480px){
        width: 104px;
        height: 34px;
        font-size: 30px;
        line-height: 2.53;
        letter-spacing: -1.8px;
        margin-block-end: 10.35%;
    }
`
export const ServiceH3 = styled.h3`

    width: 432px;
    object-fit: contain;
    font-family: NanumSquareOTFB;
    font-weight: normal;
    font-size: 18px;

    font-family: 'NanumSquare';
    font-weight: normal;
    font-size: 18px;


    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: -0.72px;
    text-align: left;
    color: #000;

    margin-block: 0;
    margin-inline: 0;
    @media screen and (max-width: 480px){
        width: 290px;
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: -0.16px;
        
    }
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
margin-left: ${({num}) => (num===3 ? `-1%` : `0`)};
margin-top: ${({num}) => (num===3 ? `3%` : `0`)};
margin-bottom: 6.3%;
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
    padding: ${ ({ num }) => (num===1 ? `0` :
    (num===2 ? `0 0 0 150px` : 
    (num===3 ? `0` : `0`)))};
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
    width: 835px;
    height: 589px;
    object-fit: contain;
    width: ${ ({ num }) => (num===1 ? `835px` :
    (num===2 ? `884.9px` : 
    (num===3 ? `880px` : `0`)))};
    height: ${ ({ num }) => (num===1 ? `589px` :
    (num===2 ? `598.2px` : 
    (num===3 ? `721.9px` : `0`)))};

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
    margin: ${ ({ num }) => (num===1 ? `90px 0 0 0` :
        (num===2 ? `0 0 -110px 0` : 
        (num===3 ? `0 0 -200px 0` : `0`)))};
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
    padding-left: ${ ({ num }) => (num===2 ? `0px` : `85px`)};
    margin-left: ${ ({ num }) => (num===2 ? `40px` : `0`)};
    @media screen and (max-width: 1080px){
        max-width: 300px;
    }
    @media screen and (max-width: 768px){
        padding-left: 90px;
    }
`

export const TopLine = styled.h1`
 
    width: 400px;
    object-fit: contain;
    font-family: Ubuntu;
    font-size: 78px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: -3.12px;
    text-align: left;
    margin-block-start: 0;
    margin-block-end: 5.163%;
    color: #000;
    margin-block: 0;
    margin-inline:0;

    margin: ${({ num }) => (num === 1? `0 0 0 0` :
        num==='1'? `-50px 0 5.856% 140px` : '0 0 4.156% 0')};
    


    @media screen and (max-width: 1680px){
        font-size : 62px;
        margin-bottom: 30px;

    }

    @media screen and (max-width: 1400px){
        width: 280px;
        font-size: 48px;
        height: 60px;
        margin-bottom: 30px;
        margin-left: ${ ({ num }) => (num===2 ? `175px` : `0`)};
    }

    @media screen and (max-width: 1080px){
        font-size: 36px;
        margin-bottom: 2px;
        margin-left: 0;

    }
    @media screen and (max-width: 768px){
        font-size: 48px;
        margin-bottom: 40px;
    }
    
`

export const Subtitle = styled.h3`
    width: 400px;
    max-width: 560px;
    font-family: NanumSquareOTFB;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: -0.72px;
    text-align: ${({ num }) => (num===2? `right`: `left`)};
    color: ##3d3d3d;

    margin-block: 0;
    margin-inline:0;
    padding-right: ${({ num }) => (num===2? `55px` : `0`)};

    
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
