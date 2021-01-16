import styled from 'styled-components';
import bg from '../../../assets/images/section-1-about.png';
import Textbox from '../../../assets/images/img-textfield.png';
import mTextbox from '../../../assets/images/mobile-img-textfield.png';
import mBg from '../../../assets/images/mobile-section-1-about.png';

export const Bg = styled.div`
    background-image: url(${bg});
    backgooun-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #f6f6f6;

    @media screen and (max-width: 480px){
        background-image: url(${mBg});
        background-color: #fff;
    }
    overflow: auto;


`

export const Line = styled.div`

        width: 45px;
        height: 2px;
        object-fit: contain;
        border-radius: 0.5px;
        background-color: #3d3d3d;
        
        margin: 10px 0 21px 0;

    @media screen and (max-width: 768px){
        width: 30px;
        height: 2.5px;
        
    }

`
export const AboutContainer = styled.div`
    position: relative;
    height: 1074px;
    margin :  0 13.2299% 0 13.3335%;
    max-width: 1920px;
    display:flex;
    flex-direction: column;
    
    

    @media screen and (max-width: 1920px){
        height: 1200px;
    }

    @media screen and (max-width: 1080px){
        height: 1400px;
    }

    @media screen and (max-width: 768px){
        margin: 0;
    }

    @media screen and (max-width: 414px){
        margin: 0;
        // height: 1163px;
        height: 100%;
    }
`
export const AboutInfoWrapper = styled.div`
    max-width: 1920px;
    display: grid;
    word-break: keep-all;
    text-align: left;
    margin-top: 14.335%;
    
    @media screen and (max-width: 768px){
        margin :  0 8.2159% 0 8.2159%;
        margin-top: 4.335%;
    }
    
`
export const AboutCardWrapper = styled.div`
    max-width: 1920px;
    margin-top: 6%;
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;

    @media screen and (max-width: 1920px){
        margin-top: 6.809%;
    }
    @media screen and (max-width: 1680px){
        grid-template-columns: 1fr 1fr;
    }


    @media screen and (max-width: 1080px){
        grid-template-columns: 1fr;
        padding: 0 20px;
        margin-left: 18.55%;
    }



    @media screen and (max-width: 768px){
        padding: 0;
        margin :  10.7% 10.2159% 21% 10.2159%;

    }
    
`

export const AboutH1 = styled.h1`
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

    margin: 0;
    margin-block-start: 0;
    margin-block-end: 3.35%;
    margin-inline: 0;
   
    @media screen and (max-width: 768px){
        width: 104px;
        height: 34px;
        font-size: 30px;
        letter-spacing: -1.8px;
        margin-block-end: 10.35%;
    }
`
export const AboutH3 = styled.h3`
    width: 600px;
    object-fit: contain;

    font-family: NanumSquare;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: -0.92px;

    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    text-align: left;
    color: #3d3d3d;
    margin-block: 0;
    margin-inline: 0;


    @media screen and (max-width: 768px){
        width: 300px;
        font-size: 16px;
        letter-spacing: -0.16px;
        
    }

`

export const About2H3 = styled.h3`
    width: 532px;
    object-fit: contain;
    font-family: NanumSquare;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: -0.92px;

    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    text-align: left;
    color: #3d3d3d;
    
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline: 0;

    @media screen and (max-width: 768px){
        width: 300px;
        font-size: 16px;
        letter-spacing: -0.16px;
    }

`




export const AboutCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-height: 340px;
    margin-right: 3%;
    width: 460.8px;
    height: 370.4px;
    padding: 30px;
    transition: all 0.2s ease-in-out;
    background-image: url(${Textbox});
    background-repeat: no-repeat;

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
    
    @media screen and (max-width: 768px){
        background-image: url(${mTextbox});
        width: 359px;
        height: 217px;
        margin :  0;
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
    padding: 9.5% 0;
    text-align: center;
    font-family: Ubuntu;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    font-size: 34px;
    letter-spacing: -1.36px;
    color: #3d3d3d;


    margin-block: 0;
    margin-inline: 0;
   

@media screen and (max-width: 768px){
    width: 250px;
    height: 24px;
    font-size: 20px;
    letter-spacing: -0.8px;
    padding: 0;
    margin: 5.69% 5% 4.7% 5%;
} 
`

export const CardH3 = styled.h3`
    padding : ${({num}) => (num ==='3' ?`6% 5% 0 5%` : `6% 8% 0 8%`)};
    word-break: keep-all;
    object-fit: contain;


    font-family: NanumSquare;
    font-weight: 400;
    font-size: 20px;
    letter-spacing: -1.2px;
    line-height: 1.8;

    font-stretch: normal;
    font-style: normal;
    text-align: center;
    color: #616161;

    margin-block: 0;
    margin-inline: 0;

    @media screen and (max-width: 768px){
        width: 230px;
        
        font-size: 14px;
        line-height: 1.71;
        letter-spacing: -0.7px;
        padding: 0;
        margin: 0 10%;
    }  
`
export const Card2H3 = styled.h3`
    padding:${({ id }) => (id === 'communication' ? ` 0 18% 0 18%;` : ` 0 15% 0 15%;`)};
    word-break: keep-all;
    margin: 0;
    object-fit: contain;
    

    font-family: NanumSquare;
    font-weight: 400;
    font-size: 20px;
    letter-spacing: -1.2px;
    line-height: 1.8;

    font-stretch: normal;
    font-style: normal;
    text-align: center;
    color: #616161;


    margin-block: 0;
    margin-inline: 0;

    @media screen and (max-width: 768px){
        width: 170px;
        width: ${({num}) => (num ==='3' ?`200px` : `170px`)};
        font-size: 14px;
        line-height: 1.71;
        letter-spacing: -0.7px;
        padding: 0;
        margin: 0 10%;
    }  
`
