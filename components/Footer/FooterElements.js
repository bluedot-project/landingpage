import styled from 'styled-components'
import { Input} from 'antd';

export const FooterContainer = styled.div`
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
export const FooterInfoWrapper = styled.div`
    display: grid;
    margin: 0 auto;
    margin-top: 10.6%; 
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

export const FooterContactWrapper = styled.div`
    
    display: flex;
    margin: 0 auto;
    margin-left: 13.4%; 
    margin-top: 10.6%;
    margin-bottom: 8.75%;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
    
`

export const FooterH1 = styled.h1`
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
export const FooterH3 = styled.h3`
    width: 532px;
    margin-bottom: 0;
    object-fit: contain;
    font-family: NanumSquareOTFR;
    font-size: 18px;
    letter-spacing: -0.72px;
    text-align: left;
    color: #8d8d8d;
`


export const FooterEmail = styled.div`
    margin-left: -18px;
    margin-top: 3%;
    padding-top: 11%;
    background: #fff;
    display: flex;
    width: 450px;
    height: 100px;
    justify-content: flex-start;
    align-items: center;
   
`
export const EmailInput = styled(Input)`
    background: #fff;
    outline: none;
    width: 380px;
    height: 50px;
    border: none;
    position: absolute; 
    margin: 0 0 2px 2%;
    padding: 0 auto;
`


export const EmailBtn = styled.div`
    background: #fff;
    outline: none;
    border: none;
    position: absolute; 
    margin: 0 0 0.2% 21%;
`


export const Contact1 = styled.div`
    display: flex;
    width: 650px;
    justify-content: flex-start;
    align-items: center;
    max-height: 340px;
   
`
export const Contact2 = styled.div`
    display: flex;
    width: 650px;
    justify-content: flex-end;
    align-items: center;
    max-height: 340px;
`

export const ShareH2 = styled.h2`
    width: 100px;
    height: 45px;
    font-family: Ubuntu;
    font-size: 40px;
    letter-spacing: -1.6px;
    text-align: center;
    color: #686868;
`

export const VisitH2 = styled.h2`
    width: 100px;
    height: 45px;
    font-family: Ubuntu;
    font-size: 40px;
    letter-spacing: -1.6px;
    text-align: center;
    color: #686868;
`
export const ShareH3 = styled.h2`
    width: 270px;
    height: 23px;
    font-size: 16px;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 2.5%;
    font-family: S-CoreDream-4;
    font-size: 16px;
    letter-spacing: -0.64px;
    text-align: center;
    color: #999999;

`

export const VisitH3 = styled.h2`
    width: 270px;
    height: 23px;
    font-size: 16px;
    margin-top: 2.5%;
    font-family: S-CoreDream-4;
    font-size: 16px;
    letter-spacing: -0.64px;
    text-align: center;
    color: #999999;

`