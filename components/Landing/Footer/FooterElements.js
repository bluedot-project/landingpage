import styled from 'styled-components'
import { Form, Input, Button } from 'antd';
import mBg from '../../../assets/images/mobile-section-4-contact.png';

export const Bg = styled.div`

    @media screen and (max-width: 480px){
        background-image: url(${mBg});
        background-color: #fff;
    }
    overflow: auto;
`
export const FooterContainer = styled.div`
    display: flex;
    height: 1360px;
    margin :  0 13.2299% 0 13.3335%;
    max-width: 1920px;
    flex-direction: column;
        
    

    @media screen and (max-width: 1920px){
        height: 1300px;
    }

    @media screen and (max-width: 768px){
        height: 1200px;
    }

    
    @media screen and (max-width: 480px){
        margin: 0;
        height: 1000px;
    }
`
export const FooterInfoWrapper = styled.div`
    max-width: 1920px;
    display: grid;
    word-break: keep-all;
    text-align: left;
    margin-top: 16.69%;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        margin :  11.69% 8.2159% 0 8.2159%;
        padding: 0;
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

export const FooterContactWrapper = styled.div`
    max-width: 1920px;
    display: grid;
    margin-top: 5.6%;
    
    grid-template-columns: 1fr 1fr;
    
    
    @media screen and (max-width: 1620px){
        grid-template-columns:  1fr;
    }
    @media screen and (max-width: 1080px){
        max-width: 500px;
        margin-top: 20.6%;
    }

    @media screen and (max-width: 768px){
        margin-top: 5.6%;
    }

    
    
    
`

export const FooterH1 = styled.h1`
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

@media screen and (max-width: 480px){
    width: 104px;
    height: 34px;
    font-size: 30px;
    line-height: 2.53;
    letter-spacing: -1.8px;
    margin-block-end: 10.35%;
}
`
export const FooterH3 = styled.h3`
width: 442px;
object-fit: contain;
font-family: NanumSquare;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: -0.92px;


font-stretch: normal;
font-style: normal;
line-height: 1.67;
letter-spacing: -0.72px;
text-align: left;
color: #000;

margin-block: 0;
margin-inline: 0;

    @media screen and (max-width: 480px){
    width: 340px;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.16px;
    
}


@media screen and (max-width: 378px){
    width: 300px;
    
}
`


export const FooterInputWrapper = styled(Form)`
    margin-top: 1.45%;
    display: grid;
    align-items: center;
  

    @media screen and (max-width: 768px){
        width: 100%;
        
    }
  
   
`

export const Row1 = styled.div`
    margin-top: 3.45%;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr 1fr;
        
    }

  
   
`

export const Row2 = styled.div`
    margin-top: 3.45%;
    display: grid;
    grid-template-columns: 1fr ;
    align-items: center;
  
   
`
export const Row3 = styled.div`
    margin-top: 3.45%;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
  
   
`

export const TextInput = styled(Input)`
        opacity: 0.83;
        font-family: NanumSquare;
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.71;
        letter-spacing: -1px;
        text-align: left;
        color: #565656;

        width: auto;


        height: 76px;
        object-fit: contain;
        border-radius: 16px;
        box-shadow: 2px 4px 12px 0 rgba(0, 0, 0, 0.3);
        background-color: #fff;

        margin-block-end: -5%;
        margin-inline-end: ${({ id }) => (id==='email' ? `0` : `5.102%`)};
        padding: 25px 32px;

        @media screen and (max-width: 768px){
            border-radius: 8px;
            box-shadow: 2px 3px 6px 0 rgba(0, 0, 0, 0.3);
            height: 46px;
            font-size: 14px;
            margin-inline-end: ${({ id }) => (id==='email' || id ==='phoneNumber' ? `0` : `5.102%`)};
            width: ${({ id }) => (id==='email' ? `200%` : `autow`)};
            margin-block-end: 5%;
            
        }

`

export const TextInput2 = styled(Input)`
        opacity: 0.83;
        font-family: NanumSquare;
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.71;
        letter-spacing: -0.96px;
        text-align: left;
        color: #565656;

        height: 76px;
        object-fit: contain;
        border-radius: 16px;
        box-shadow: 2px 4px 12px 0 rgba(0, 0, 0, 0.3);
        background-color: #fff;
        padding: 25px 32px;
        margin-block-end: -2%;

        @media screen and (max-width: 768px){
            border-radius: 8px;
            box-shadow: 2px 3px 6px 0 rgba(0, 0, 0, 0.3);
            height: 46px;
            font-size: 14px;
            margin-inline-end: 0;
            margin-block-end: 2%;
        }
            
`

export const TextInput3 = styled(Input)`
        opacity: 0.83;
        font-family: NanumSquare;
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.71;
        letter-spacing: -0.96px;
        text-align: left;
        color: #565656;
        padding: 25px 32px;

        height: 281px;
        object-fit: contain;
        border-radius: 16px;
        box-shadow: 2px 4px 12px 0 rgba(0, 0, 0, 0.3);
        background-color: #fff;

        @media screen and (max-width: 768px){
            border-radius: 8px;
            box-shadow: 2px 3px 6px 0 rgba(0, 0, 0, 0.3);
            height: 190px;
            font-size: 14px;
        }
`


export const EmailBtn = styled(Button)`
    width: 138px;
    height: 76px;
    padding: 20px 42px 24px;
    border-radius: 16px;
    box-shadow: 2px 4px 12px 0 rgba(0, 0, 0, 0.3);
    cursor: pointer;
    background-color: #1127fe;
    border: 0;

    align-items: center;
  object-fit: contain;
  font-family: Ubuntu;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -0.96px;
  text-align: left;
  color: #fff;
  
    margin-block: 20px;
    margin-inline-start: 0px;
    margin-inline-end: 19px;    

    @media screen and (max-width: 768px){
        width: 40px;
        height: 20px;
        font-size: 18px;
        
        margin-block-start: 8.5%;
        width: 99px;
        height: 46px;
        padding: 8px 29px 13px 30px;
  
    }

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`


export const Contact1 = styled.div`
    display: flex;
    width: 650px;
    justify-content: flex-start;
    align-items: center;
    max-height: 340px;
    

    @media screen and (max-width: 1620px){
        margin-left: 20%;
        margin-bottom: 2%;
    }

    @media screen and (max-width: 1080px){
        margin-left: 0;
    }
    @media screen and (max-width: 768px){
        width:380px;
        display: grid;
        margin-bottom: 10px;
    }

    @media screen and (max-width: 480px){
        width:320px;
    }
   
`
export const Contact2 = styled.div`
    display: flex;
    width: 650px;
    justify-content: flex-start;
    padding-right: 50px;
    align-items: center;
    max-height: 340px;

    @media screen and (max-width: 1620px){
        margin-left: 20%;
        margin-bottom: 2%;
    }
    @media screen and (max-width: 1080px){
        margin-left: 0;
    }


    @media screen and (max-width: 768px){
        width:380px;
        display: grid;
        margin-bottom: 10px;
    }
    @media screen and (max-width: 480px){
        width:320px;
    }
   
`

export const ShareH2 = styled.h2`
width: 131px;
height: 45px;
object-fit: contain;
font-family: Ubuntu;
font-size: 40px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 1.5;
letter-spacing: -1.6px;
text-align: center;
color: #686868;

    margin-block: 0;
    margin-inline-start: 100px;
    margin-inline-end: 19px;
    @media screen and (max-width: 1080px){
        margin-inline-start: 80px;
        margin-inline-end: 19px;
        margin-block: 10px;
    }
    

    @media screen and (max-width: 768px){
        width:78px;
        font-size: 20px;
        font-weight: 500;
        line-height: 3;
        letter-spacing: -0.8px;
        margin-inline-start: 10%;
        margin-block: 0px;
    }
`

export const VisitH2 = styled.h2`
    width:78px;
    height: 45px;
    object-fit: contain;
    font-family: Ubuntu;
    font-size: 40px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: -1.6px;
    text-align: center;
    color: #686868;

    margin-block: 0;
    margin-inline-start: 0px;
    margin-inline-end: 19px;

    @media screen and (max-width: 1080px){
        margin-inline-start: 80px;
        margin-block: 10px;
    }

    @media screen and (max-width: 768px){
        font-size: 20px;
        font-weight: 500;
        line-height: 3;
        letter-spacing: -0.8px;
        margin-inline-start: 3%;
        margin-block: 0px;
    }
`
export const ShareH3 = styled.h2`
width: 328px;
height: 18px;
object-fit: contain;
font-family: NanumSquare;
font-size: 16px;
font-weight: 700;
font-stretch: normal;
font-style: normal;
line-height: 2.56;
letter-spacing: -0.64px;
text-align: center;
color: #999999;

    margin-block: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

    @media screen and (max-width: 1080px){
        margin-block-end: 10px;
    }
    @media screen and (max-width: 768px){
        font-size: 14px;
    }

    @media screen and (max-width: 480px){
        width: 250px;
        margin-inline-start: 3%;
        margin-inline-end: 0;
        margin-block-start: 1%;
        margin-block-end: 3%;
    }
`

export const VisitH3 = styled.h2`
width: 328px;
height: 18px;
object-fit: contain;
font-family: NanumSquare;
font-size: 16px;
font-weight: 700;
font-stretch: normal;
font-style: normal;
line-height: 2.56;
letter-spacing: -0.64px;
text-align: center;
color: #999999;

    margin-block: 0;
    margin-inline-start: 0px;
    margin-inline-end: 19px; 
    
    @media screen and (max-width: 768px){
        width: 328px;
        margin-block-end: 10px;

        font-size: 14px;
        letter-spacing: -0.56px;
    }

    @media screen and (max-width: 480px){
        width: 250px;
        margin-inline-start: 10%;
        margin-inline-end: 0;
        margin-block-start: 1%;
        margin-block-end: 3%;

    }

`


export const SocialLink = styled.div`
    display: flex;
    @media screen and (max-width: 768px){
        width:220px;
        margin-inline-start: 85px;
        margin-block-start:10px;
        margin-block-end:20px;
    }
`

export const ErrMsg =styled.div`
    color: #1127fe;
    font-family: NanumSquare;
    font-size: 20px;
    position: relative;
    margin:-10% 0 0 18%;
    letterSpacing: -0.96px;

    @media screen and (max-width: 768px){
        font-size: 12px;
        margin: -25% 0 0 38%;
    }

`