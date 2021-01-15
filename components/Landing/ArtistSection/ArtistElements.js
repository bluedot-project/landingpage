import styled from 'styled-components'
import bg from '../../../assets/images/section-3-artist.png';
import mBg from '../../../assets/images/mobile-section-3-artist.png';
import artistField from '../../../assets/images/shape-artist-textfield.png';
import mArtistField from '../../../assets/images/mobile-shape-artist-textfield.png';

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
        height: 1552px;
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


    @media screen and (max-width: 768px){
        max-width: 500px;
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 480px){
        margin-top: 5.41%;
        margin-bottom: 12%;
    }
   


`

export const ArtistWhoWrapper = styled.div`
    margin-top: 8.8%;
    margin-bottom: 8.75%;
    margin-left: 0.5%;
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
        width: 500px;
    }

    @media screen and (max-width: 480px){
        width: 414px;
        margin-left: 1%;
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
export const ArtistH3 = styled.h3`
width: 592px;
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

    @media screen and (max-width: 480px){
        margin-top: 2%;
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
    background-repeat: no-repeat;

    @media screen and (max-width: 1920px){
        margin-right : 5%;
    }
    
    @media screen and (max-width: 1080px){
        margin-top: 5%;
        
    }

    @media screen and (max-width: 480px){
        background-image: url(${mArtistField});
        width: 360px;
        height: 147px;
        margin-top: 0;
        
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
    margin: ${({ num }) => (num ==='2' ? `39.5px 0 0 72.5px` : `53.5px 0 0 72.5px`)};
    margin: 63.5px 0 0 72.5px;
    color: var(--vivid-blue-color);

    @media screen and (max-width: 480px){
        margin: ${({ num }) => (num ==='2' ? `30px 0 0 38.5px` : `30px 0 0 38.5px`)};
        width: 36px;
        height: 28px;
        
    }
` 

export const InfoH2 = styled.h2`
    position: relative;
    width: 150px;
    height: 22px;
    padding: ${({ num }) => (num ==='2' ? `85.4px 0 0 0` : `80.4px 0 0 0`)};
    margin: ${({ num }) => (num ==='2' ? `0 0 0 -290px` : `0 0 0 -360px`)};
    padding: 92.4px 0 0 0;
    
    
    font-stretch: normal;
    font-style: normal;
    line-height: 1.45;
    

    font-family: NanumSquare;
    font-weight: 800;
    font-size: 20px;
    letter-spacing: -0.8px;

    
    text-align: left;
    color: var(--vivid-blue-color);


    @media screen and (max-width: 1400px){
        font-size: 18px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
        line-height: 0.33;
        letter-spacing: -0.72px;
        padding-top: 50px;
        margin: ${({ num }) => (num ==='2' ? `0 0 0 -260px` : `0 0 0 -282px`)};
        
    }

  


`
export const InfoH3 = styled.h3`
    height: 18px;
    margin:${({ num }) => (num ==='2' ? `0 0 39.5px 152.5px` : `0 0 39.5px 122.5px`)};
    width: ${({ num }) => (num ==='2' ? `300px` : `400px`)};
    
    
    font-family: NanumSquare;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: -0.72px;

    font-stretch: normal;
    font-style: normal;
    line-height: 1.63;

    text-align: left;
    color: #1127fe;



    @media screen and (max-width: 1400px){
        font-size: 14px;
    }

    @media screen and (max-width: 480px){
        width: ${({ num }) => (num ==='2' ? `280px` : `320px`)};
        margin:${({ num }) => (num ==='2' ? `0 0 39.5px 81.5px` : `0 0 39.5px 65.5px`)};
        font-size: 14px;
        line-height: 1.57;
        letter-spacing: -1.2px;
        
    }
`



export const ArtistRequiredCard = styled.div`
    align-items: center;
    width: 454px;
    height: 258px;
    padding: 67px 32px 60px 32px;
    object-fit: contain;
    border-radius: 30px;
    box-shadow: 4px 8px 14px 0 rgba(0, 0, 0, 0.26);
    border: solid 1px rgba(0, 0, 0, 0);
    background-color: var(--white-color);
    

    @media screen and (max-width: 1920px){
        margin-right : 1%;
    }
    @media screen and (max-width: 1400px){
        margin-top: 5%;
    }

    @media screen and (max-width: 480px){
        margin: 0;
        width: 338px;
        height: 186px;
        padding: 41px 41px 15px;
        border-radius: 20px;
        margin-bottom: 3.7%;
    }

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.26);
    }

`

export const RequiredH2 = styled.h2`
    height: 33px;
  
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: -0.96px;
    text-align: center;
    color: var(--black-color);

    font-family: NanumSquare;
    font-weight: 800;
    font-size: 24px;
    letter-spacing: -0.96px;


    margin-block-start: 0;
    margin-block-end: 6.715%;
    margin-inline-start: 15%;
    margin-inline-end: 15%;

    @media screen and (max-width: 480px){
        font-size: 20px;
        line-height: 2.05;
        letter-spacing: -0.8px;

        margin-block-start: 0;
        margin-block-end: 7.715%;
        margin-inline-start: 5%;
        margin-inline-end: 5%;
    }

`

export const RequiredH3 = styled.h3`
    

    font-stretch: normal;
    font-style: normal;
    line-height: 1.8;
    color: #6d6d6d;
    text-align: center;

    font-family: NanumSquare;
    font-weight: 700;
    font-size: 21px;
    letter-spacing: -0.8px;

    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 3%;
    margin-inline-end: 0;

    @media screen and (max-width: 480px){
        width: 240px;
        font-size: 14px;
        font-style: normal;
        line-height: 1.71;
        letter-spacing: -0.56px;
    }

`