import styled from 'styled-components'
import { Input} from 'antd';

export const FooterContainer = styled.div`
    display: flex;
    height: 1500px;
    margin :  0 13.2299% 0 13.3335%;
    margin-bottom: 10.6%;
    max-width: 1920px;
    flex-direction: column;

    @media screen and (max-width: 1920px){
        height: 1300px;
    }

    @media screen and (max-width: 768px){
        height: 800px;
    }
    
    @media screen and (max-width: 480px){
        margin :  0 8.2159% 0 8.2159%;
        height: 600px;
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
        padding: 0 20px;
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
margin-block-start: 0;
margin-block-end: 9.31%;
margin-inline: 0;


    margin-block-start: 0;
    margin-block-end: 4.31%;
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
font-family: NanumSquareOTFR;
font-size: 18px;
font-weight: normal;
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

`


export const FooterInputWrapper = styled.div`
    margin-top: 1.45%;
    display: grid;
    align-items: center;
  
   
`

export const Row1 = styled.div`
    margin-top: 3.45%;
    display: grid;
    
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
  
   
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
        font-family: NanumSquareOTFR;
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

        margin-block-end: -5%;
        margin-inline-end: 5%;
        padding: 25px 32px;
`

export const TextInput2 = styled(Input)`
        opacity: 0.83;
        font-family: NanumSquareOTFR;
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
`

export const TextInput3 = styled(Input)`
        opacity: 0.83;
        font-family: NanumSquareOTFR;
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
`


export const EmailBtn = styled.div`
    width: 138px;
    height: 76px;
    padding: 20px 42px 24px;
    object-fit: contain;
    border-radius: 16px;
    box-shadow: 2px 4px 12px 0 rgba(0, 0, 0, 0.3);
    cursor: pointer;
    background-color: #1127fe;

    align-items: center;
  object-fit: contain;
  font-family: Ubuntu;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: -0.96px;
  text-align: left;
  color: #fff;
  
    margin-block: 20px;
    margin-inline-start: 0px;
    margin-inline-end: 19px;    

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
    margin-inline-start: 0px;
    margin-inline-end: 19px;
`

export const VisitH2 = styled.h2`
width: 68px;
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
`
export const ShareH3 = styled.h2`
width: 208px;
height: 18px;
object-fit: contain;
font-family: NanumSquareOTFR;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 2.56;
letter-spacing: -0.64px;
text-align: center;
color: #999999;

    margin-block: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`

export const VisitH3 = styled.h2`
width: 208px;
height: 18px;
object-fit: contain;
font-family: NanumSquareOTFR;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 2.56;
letter-spacing: -0.64px;
text-align: center;
color: #999999;

    margin-block: 0;
    margin-inline-start: 0px;
    margin-inline-end: 19px;    

`
