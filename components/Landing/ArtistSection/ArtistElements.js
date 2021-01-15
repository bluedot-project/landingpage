import styled from 'styled-components'
import bg from '../../../assets/images/section-3-artist.png';
import artistField from '../../../assets/images/shape-artist-textfield.png';
import artistWho from '../../../assets/images/textfield-artist-who.png'

export const Bg = styled.div`
    background-image: url(${bg});
    backgooun-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #f6f6f6;
`

export const ArtistContainer = styled.div`
    display: flex;
    height: 1668px;
    margin :  0 13.2299% 0 13.3335%;
    max-width: 1920px;
    flex-direction: column;

    @media screen and (max-width: 1600px){
        height: 1400px;
    }
    @media screen and (max-width: 1400px){
        height: 1600px;
    }
    @media screen and (max-width: 1080px){
        height: 2300px;
    }
    @media screen and (max-width: 480px){
        margin :  0 8.2159% 0 8.2159%;
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

export const ArtistInfoWrapper = styled.div`
    max-width: 1920px;
    display: grid;
    word-break: keep-all;
    text-align: left;
    margin-top: 14.335%;
    
`

export const ArtistCardWrapper = styled.div`
    margin-top: 3.41%;
    display: grid;
    grid-template-columns: 1fr;
    max-width: 1920px;

    @media screen and (max-width: 1400px){
        max-width: 1200px;
    }

    @media screen and (max-width: 1080px){
    }

    @media screen and (max-width: 768px){
        max-width: 500px;
        padding: 0 20px;
        grid-template-columns: 1fr;
    }
   


`

export const ArtistWhoWrapper = styled.div`
    margin-top: 10.8%;
    margin-bottom: 8.75%;
    margin-left: -1%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 1920px;

 
    @media screen and (max-width: 1400px){
        max-width: 1200px;
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 1080px){
        grid-template-columns: 1fr;
        width: 500px;
        margin: 0 auto;
    }

    @media screen and (max-width: 768px){
        padding: 0 20px;
        max-width: 500px;
    }
`


export const ArtistH1 = styled.h1`
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
export const ArtistH3 = styled.h3`
width: 592px;
object-fit: contain;

font-family: NanumSquareOTFB;
font-size: 18px;
font-weight: normal;
letter-spacing: -0.72px;

font-family: 'NanumSquare';
font-weight: normal;
font-size: 18px;
letter-spacing: -1.5px;

font-stretch: normal;
font-style: normal;
line-height: 1.67;

text-align: left;
color: #000;
margin-block: 0;
margin-inline: 0;


    @media screen and (max-width: 480px){
        width: 250px;
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: -0.16px;
        
    }
`


export const ArtistCardRow1 = styled.div`
    display: grid;
    margin: 0 auto;
    margin-left: 0; 
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 1080px){
        margin: 0 auto;
        grid-template-columns: 1fr;
        margin-left: 13%;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        margin-left: 0;
        margin-top: 5%;
    }
`


export const ArtistCardRow2 = styled.div`
    display: grid;
    margin: 0 auto;
    margin-top: 5%;
    margin-left: 19.45%; 
    grid-template-columns: 1fr 1fr;


    @media screen and (max-width: 1920px){
        margin-top: 3.5%;
    }
    @media screen and (max-width: 1400px){
        margin-left: 0;
    }

    @media screen and (max-width: 1080px){
        grid-template-columns: 1fr;
        margin-left: 13%;
    }

    
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        margin-left: 0;
        margin-top: 5%;
    }


`

export const ArtistInfoCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 512px;
    height: 228px;
    margin-right : 20%;
    word-break: keep-all;
    border-radius: 10px;
    max-height: 340px;
    transition: all 0.2s ease-in-out;

    background-image: url(${artistField});

    @media screen and (max-width: 1920px){
        margin-right : 5%;
    }
    
    @media screen and (max-width: 1080px){
        margin-top: 5%;
        
    }

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }

    
`

export const InfoNum = styled.img`
    position: relative;
    width: 69.4px;
    height: 54.3px;
    font-family: NanumSquareOTFEB;
    margin: ${({ num }) => (num ==='2' ? `39.5px 0 0 72.5px` : `53.5px 0 0 72.5px`)};
    margin: 63.5px 0 0 72.5px;
    letter-spacing: -0.8px;
    color: #1127fe;
` 

export const InfoH2 = styled.h2`
    position: relative;
    width: 150px;
    height: 22px;
    padding: ${({ num }) => (num ==='2' ? `85.4px 0 0 0` : `80.4px 0 0 0`)};
    margin: ${({ num }) => (num ==='2' ? `0 0 0 -360px` : `0 0 0 -360px`)};
    padding: 92.4px 0 0 0;
    
    font-family: NanumSquareOTFEB;
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.45;
    letter-spacing: -0.8px;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.45;
    

    font-family: 'NanumSquare';
    font-weight: 700;
    font-size: 20px;
    letter-spacing: -1.5px;

    
    text-align: left;
    color: #1127fe;

  


    @media screen and (max-width: 1400px){
        font-size: 18px;
    }
`
export const InfoH3 = styled.h3`
    width: 400px;
    height: 18px;
    margin:${({ num }) => (num ==='2' ? `0 0 39.5px 122.5px` : `0 0 39.5px 122.5px`)};
    
    
    font-family: NanumSquareOTFB;
    font-size: 16px;
    font-weight: normal;
    letter-spacing: -0.32px;


    font-family: 'NanumSquare';
    font-weight: normal;
    font-size: 15px;
    letter-spacing: -0.92px;

    font-stretch: normal;
    font-style: normal;
    line-height: 1.63;

    text-align: left;
    color: #1127fe;



    @media screen and (max-width: 1400px){
        font-size: 14px;
    }
`



export const ArtistRequiredCard = styled.div`
    display: grid;
    width: 488.5px;
    height: 290.5px;
    margin-left : -2.2%;
    flex-direction: column;
    word-break: keep-all;
    align-items: center;
    max-height: 300px;
    background-image: url(${artistWho});

    

    @media screen and (max-width: 1920px){
        margin-right : 1%;
    }
    @media screen and (max-width: 1400px){
        margin-top: 5%;
    }

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }

`

export const RequiredH2 = styled.h2`
    position: relative;
    height: 33px;
    font-family: NanumSquareOTFEB;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: -0.96px;
    text-align: center;
    color: #474747;

    margin-block-start: 12.95%;
    margin-block-end: 2%;
    margin-inline-start: 15%;
    margin-inline-end: 15%;

`

export const RequiredH3 = styled.h3`
    width: 350px;
    height: 70px;
    
    font-family: NanumSquareOTFB;
    font-size: 21px;
    font-weight: normal;

    font-family: 'NanumSquare';
    font-weight: 500;
    font-size: 20px;

    font-stretch: normal;
    font-style: normal;
    line-height: 1.8;
    letter-spacing: -0.84px;
    color: #6d6d6d;
    text-align: center;

    margin-block-start: 2%;
    margin-block-end: 13.6%;
    margin-inline-start: 15%;
    margin-inline-end: 10%;

`