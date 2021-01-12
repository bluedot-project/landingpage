import styled from 'styled-components'
import bg from '../../assets/images/section-3-artist.png';
import artistField from '..//../assets/images/shape-artist-textfield.png';
import artistWho from '../../assets/images/textfield-artist-who.png'

export const ArtistContainer = styled.div`
    height: 1300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    background-image: url(${bg});

    @media screen and (max-width: 1600px){
        height: 1400px;
    }
    @media screen and (max-width: 1400px){
        height: 1600px;
    }
    @media screen and (max-width: 1080px){
        height: 2300px;
    }
  
`
export const ArtistInfoWrapper = styled.div`
    display: grid;
    word-break: keep-all;
    margin: 0 auto;
    margin-left: 13.25%;
    margin-top: 4.8%;
    text-align: left;
    
`

export const ArtistCardWrapper = styled.div`
    margin: 0 auto;
    margin-top: 48px;
    display: grid;
    grid-template-columns: 1fr;
    max-width: 1400px;

    @media screen and (max-width: 1920px){
        margin-left: 12.55%;
        margin-right:0;
        
    }
    @media screen and (max-width: 1400px){
        max-width: 1200px;
    }

    @media screen and (max-width: 1080px){
        margin-left: -7%;
    }

    @media screen and (max-width: 768px){
        margin-left: 200px;
        max-width: 500px;
        margin-left: 0;
        grid-template-columns: 1fr;
    }
   


`

export const ArtistWhoWrapper = styled.div`


    margin: 0 auto;
    margin-top: 7.5%;
    max-width:2500px;
    margin-bottom: 8.75%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    @media screen and (max-width: 1920px){
        margin-left: 12.55%;
        margin-right:0;
        
    }
    @media screen and (max-width: 1400px){
        max-width:1200px;
        margin-left: 12%;
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 1080px){
        grid-template-columns: 1fr;
        width: 500px;
        margin-left: 0;
    }

    @media screen and (max-width: 768px){
        padding: 0 20px;
    }
`


export const ArtistH1 = styled.h1`
    margin-bottom: 42.5px;
    position: relative;
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
    background: #fff;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 500px;
    height: 206px;
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
    margin: ${({ num }) => (num ==='2' ? `39.5px 0 0 71.5px` : `53.5px 0 0 71.5px`)};
    letter-spacing: -0.8px;
    color: #1127fe;
` 

export const InfoH2 = styled.h2`
    position: relative;
    width: 150px;
    height: 22px;
    padding: ${({ num }) => (num ==='2' ? `70.4px 0 0 0` : `80.4px 0 0 0`)};
    margin:${({ num }) => (num ==='2' ? `0 0 0 -345px` : `0 0 0 -340px`)};
    font-family: NanumSquareOTFEB;
    font-size: 20px;
    line-height: 1.45;
    letter-spacing: -0.8px;
    text-align: left;
    color: #1127fe;

    @media screen and (max-width: 1400px){
        font-size: 18px;
    }
`
export const InfoH3 = styled.h3`
    width: 340px;
    height: 18px;
    margin: ${({ num }) => (num ==='2' ? `0 0 39.5px 169.5px` : `0 0 39.5px 170.5px`)};
    font-family: NanumSquareOTFR;
    font-size: 16px;
    line-height: 1.63;
    letter-spacing: -0.32px;
    text-align: left;
    color: #1127fe;


    @media screen and (max-width: 1400px){
        font-size: 14px;
    }
`



export const ArtistRequiredCard = styled.div`
    display: grid;
    width: 478.5px;
    height: 290.5px;
    margin-right : 20%;
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
    margin: 15% 0 0 0;
    font-family: NanumSquareOTFEB;
    font-size: 24px;
    font-weight: bold;
    line-height: 1.71;
    letter-spacing: -0.96px;
    text-align: center;
    color: #474747;
`

export const RequiredH3 = styled.h3`
    width: 350px;
    height: 70px;
    padding: 0 0 0 0;
    margin : 40px 10% 80px 15% ;
    font-family: S-CoreDream-4;
    font-size: 21px;
    line-height: 1.95;
    letter-spacing: -0.84px;
    color: #6d6d6d;
    text-align: center;

`