import styled from 'styled-components'
import bg from '../../assets/images/section-3-artist.png';


export const ArtistContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 1300px;
    align-items: center;
    background: #fff;
    background-image: url(${bg});

    @media screen and (max-width: 1600px){
        height: 1700px;
    }

    @media screen and (max-width: 760px){
        height: 2100px;
    }
`
export const ArtistInfoWrapper = styled.div`
    display: grid;
    word-break: keep-all;
    margin: 0 auto;
    margin-top: 4.8%;
    text-align: left;
    
`

export const ArtistH1 = styled.h1`
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
export const ArtistH3 = styled.h3`
    width: 532px;
    margin-bottom: 0;
    font-family: NanumSquareOTFR;
    font-size: 18px;
    line-height: 1.67;
    letter-spacing: -0.72px;
    text-align: left;
    color: #8d8d8d;
`
export const Column = styled.div`
    margin: 0 auto;
    width:100%;
    margin-top: 48px;
    display: grid;
    grid-template-columns: 1fr;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const Column2 = styled.div`
    margin: 0 auto;
    margin-top: 10.8%;
    max-width:2500px;
    margin-bottom: 8.75%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    @media screen and (max-width: 1600px){
        width: 80%;
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ArtistCardRow1 = styled.div`
    display: grid;
    margin: 0 auto;
    margin-left: 0; 
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 1400px){
        margin: 0 auto;
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`


export const ArtistCardRow2 = styled.div`
    display: grid;
    margin: 0 auto;
    margin-top: 3.5%;
    margin-left: 19.45%; 
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width: 1400px){
        margin: 0 auto;
        grid-template-columns: 1fr;
    }


`

export const ArtistInfoCard = styled.div`
    background: #fff;
    display: flex;
    width: 495px;
    height: 204px;
    margin-right : 5%;
    word-break: keep-all;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    transition: all 0.2s ease-in-out;
    
`
export const InfoIcon = styled.img`
    width: 494.5px;
    height: 204px;
    vertical-align: middle;
`
export const InfoNum = styled.img`
    position: absolute;
    width: 78.9px;
    height: 54.3px;
    font-family: NanumSquareOTFEB;
    margin: 0 0 0 3.2%;
    letter-spacing: -0.8px;
    color: #1127fe;
` 
export const InfoH2 = styled.h2`
    position: absolute;
    width: 110px;
    height: 22px;
    margin: 0 auto;
    margin-left: 8.6%;
    margin-bottom: 2%;
    font-family: NanumSquareOTFEB;
    font-size: 20px;
    line-height: 1.45;
    letter-spacing: -0.8px;
    text-align: left;
    color: #1127fe;
    @media screen and (max-width: 1400px){
        font-size: 18px;
        margin: 0 0 2% 10%;
    }
`
export const InfoH3 = styled.h3`
    position: absolute;
    width: 300px;
    height: 18px;
    margin: 0 auto;
    margin-left: 9%;
    margin-top: 3%;
    font-family: NanumSquareOTFR;
    font-size: 16px;
    line-height: 1.63;
    letter-spacing: -0.32px;
    text-align: left;
    color: #1127fe;
    @media screen and (max-width: 1400px){
        width: 380px;
        font-size: 14px;
        margin: 4% 0 0 11%;
    }
`


export const WhoIcon = styled.img`
    width: 475.5px;
    height: 302.5px;
`


export const ArtistRequired = styled.div`
    display: flex;
    width: 474.5px;
    height: 270.5px;
    margin-right : 1%;
    word-break: keep-all;
    justify-content: flex-start;
    align-items: center;
    max-height: 300px;
`

export const RequiredH2 = styled.h2`
position: absolute;
width: 262px;
height: 33px;
margin: 0 5% 7.6% 5%;
font-family: NanumSquareOTFEB;
font-size: 24px;
font-weight: bold;
line-height: 1.71;
letter-spacing: -0.96px;
text-align: center;
color: #474747;
`

export const RequiredH3 = styled.h3`
position: absolute;
width: 350px;
height: 70px;
margin: 2% 3% 0 3%;
font-family: S-CoreDream-4;
font-size: 21px;
line-height: 1.95;
letter-spacing: -0.84px;
text-align: left;
color: #6d6d6d;
text-align: center;

`