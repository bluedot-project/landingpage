import styled from 'styled-components'


export const ArtistContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #e2e2e2;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`
export const ArtistInfoWrapper = styled.div`
    display: grid;
    word-break: keep-all;
    margin: 0 auto;
    margin-top: 92px; 
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

export const ArtistH1 = styled.h1`
    color: #000;
    margin-bottom: 42.5px;
    width: 202px;
    height: 67px;
    object-fit: contain;
    font-family: Ubuntu;
    font-size: 60px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
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
    object-fit: contain;
    font-family: NanumSquareOTFR;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: -0.72px;
    text-align: left;
    color: #8d8d8d;
`
export const Column = styled.div`
    margin-top: 48px;
`

export const Column2 = styled.div`
    margin: 0 auto;
    margin-top: 8%;
    margin-bottom: 5%;
    display: flex;
    

`

export const ArtistCardRow1 = styled.div`
    width: 495px;
    height: 204px;
    display: flex;

`

export const ArtistInfoCard1 = styled.div`
    margin-right: 32px;
    
`
export const ArtistInfoCard2 = styled.div`
`

export const ArtistCardRow2 = styled.div`
    margin-left: 279.5px;
    margin-top: 50px;
    display: flex;

`
export const ArtistInfoCard3 = styled.div`
    margin-right: 32px;
    
`

export const ArtistInfoCard4 = styled.div`

`


export const ArtistRequired1 = styled.div`

`

export const ArtistRequired2 = styled.div`
`

export const ArtistRequired3 = styled.div`
`