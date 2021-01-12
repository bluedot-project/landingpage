import styled from 'styled-components';
import bg from '../../assets/images/section-1-about.png';
import Textbox from '../../assets/images/about-textbox.png'

export const AboutContainer = styled.div`
    height: 1122px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    background-image: url(${bg});

    @media screen and (max-width: 1080px){
        height: 1400px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`
export const AboutInfoWrapper = styled.div`

    display: grid;
    word-break: keep-all;
    margin: 0 auto;
    margin-top: 7.56%; 
    margin-left: 13.25%;
    text-align: left;

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
    line-height: 1.67;
    letter-spacing: -0.72px;
    text-align: left;
    color: #8d8d8d;
`


export const AboutCardWrapper = styled.div`
    max-width: 1480px;
    margin: 0 auto;
    margin-top: 8.65%;
    margin-left: 18.55%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;

    @media screen and (max-width: 1920px){
        margin-left: 12.55%;
    }
    @media screen and (max-width: 1680px){
        grid-template-columns: 1fr 1fr;
    }


    @media screen and (max-width: 1080px){
        grid-template-columns: 1fr;
        padding: 0 20px;
        margin-left: 18.55%;
    }
    
`

export const AboutCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-height: 340px;
    margin-right: 20%;
    width: 460.8px;
    height: 353.4px;
    padding: 30px;
    transition: all 0.2s ease-in-out;
    background-image: url(${Textbox});

    @media screen and (max-width: 1920px){
        margin-right: 3%;
    }
    @media screen and (max-width: 1680px){
        margin-top: ${ ({ num }) => (num==='3' ? `50px` : `0px`)};
        margin-left: ${ ({ num }) => (num==='3' ? `270px` : 
                                    (num==='2'? `-270px` : `0px`))};
    }

    @media screen and (max-width: 1080px){
        margin-top: 0;
        margin-left: 0;
    }
    

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
     
    }

    
`

export const CardH2 = styled.h2`
    position: relative;
    width: 250px;
    height: 38px;
    padding: 12% 3.5% 3% 3.5%;
    text-align: center;
    font-family: Ubuntu;
    font-size: 34px;
    letter-spacing: -1.36px;
    color: #3d3d3d;

@media screen and(max-width: 480px){
    font-size: 2rem;
}  
`

export const CardH3 = styled.h3`
    padding: 10% 11% 0 11%;
    word-break: keep-all;
    font-family: NanumSquareOTFR;
    font-size: 20px;
    margin: 0;
    line-height: 1.8;
    letter-spacing: -0.8px;
    text-align: center;
    color: #303030;
`
export const Card2H3 = styled.h3`
    padding: 0 13% 0 13%;
    word-break: keep-all;
    margin: 0;
    font-family: NanumSquareOTFR;
    font-size: 20px;
    line-height: 1.8;
    letter-spacing: -0.8px;
    text-align: center;
    color: #303030;
`
