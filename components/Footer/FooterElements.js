import styled from 'styled-components'


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
    // width:100%;
    margin-top: 200px; 
    margin-right: 15.1%;
    
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
    margin-top: 8%
   
`
export const Contact1 = styled.div`
display: flex;
width: 100%;
margin-right: 40%;

`

export const Contact2 = styled.div`
    display: flex;
    
`
export const ShareH2 = styled.h2`
width: 92px;
  height: 45px;
  object-fit: contain;
  font-family: Ubuntu;
  font-size: 40px;
  letter-spacing: -1.6px;
  text-align: center;
  color: #686868;
`

export const VisitH2 = styled.h2`
width: 68px;
height: 45px;
object-fit: contain;
font-family: Ubuntu;
font-size: 40px;
letter-spacing: -1.6px;
text-align: center;
color: #686868;
`
export const ShareH3 = styled.h2`
width: 262px;
height: 23px;
font-size: 16px;
margin-left: 0.8%;
margin-top: 5%;
margin-right: 1%;
object-fit: contain;
font-family: S-CoreDream-4;
font-size: 16px;
letter-spacing: -0.64px;
text-align: center;
color: #999999;

`

export const VisitH3 = styled.h2`
    width: 214px;
    height: 23px;
    font-size: 16px;
    margin-left:12px;
    margin-top: 23px;
    object-fit: contain;
    font-family: S-CoreDream-4;
    font-size: 16px;
    letter-spacing: -0.64px;
    text-align: center;
    color: #999999;

`