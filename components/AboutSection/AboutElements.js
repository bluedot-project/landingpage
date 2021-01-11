import styled from 'styled-components'

export const AboutContainer = styled.div`
    height: 1122px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #e2e2e2;
    // background: #fff;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`
export const AboutInfoWrapper = styled.div`

    display: grid;
    word-break: keep-all;
    margin: 0 auto;
    margin-top: 7.8%; 
    margin-left: 13.3%; 
    text-align: left;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
    
`

export const AboutH1 = styled.h1`
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
export const AboutH3 = styled.h3`
width: 532px;
height: 50px;
object-fit: contain;
font-family: NanumSquareOTFR;
font-size: 18px;
line-height: 1.67;
letter-spacing: -0.72px;
text-align: left;
color: #8d8d8d;

`
export const AboutCardWrapper = styled.div`

    margin: 0 auto;
    margin-top: 9.2%;
    margin-bottom: 13%;
    margin-left: 13%;
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;


    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
    
`

export const AboutCard = styled.div`
    background: #fff;
    display: flex;
    width: 457px;
    height: 359.6px;
    margin-right : 7%;
    word-break: keep-all;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const CardIcon = styled.img`
    width: 440.8px;
    height: 353.4px;
    vertical-align: middle;
`

export const CardH2 = styled.h2`
    position: absolute;
    width: 250px;
    height: 38px;
    margin: 3% 3.5% 0 3%;
    object-fit: contain;
    text-align: center;
    font-family: Ubuntu;
    font-size: 34px;
    letter-spacing: -1.36px;
    color: #3d3d3d;
`

export const CardH3 = styled.h3`
    position: absolute;
    width: 314px;
    height: 200px;
    margin: 6.7% 3.5% 0 3%;
    word-break: keep-all;
    object-fit: contain;
    font-family: NanumSquareOTFR;
    font-size: 20px;
    line-height: 1.8;
    letter-spacing: -0.8px;
    text-align: center;
    color: #303030;
}
`
