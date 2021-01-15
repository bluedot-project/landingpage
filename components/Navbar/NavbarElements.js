import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: #000;
    height: 78.7px;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
    
    @media screen and (max-width: 480px){
        height: 65.9px;
    }
    
`

export const NavbarContainer = styled.div`
    display: flex;
    margin-left: 12.396%;
    margin-right: 13.49%;
    max-width: 1920px;

    @media screen and (max-width: 480px){
        margin-left: 0;
        margin-right: 0;
        
      
    }

`

export const MobileIcon = styled.img`
    height: 36px;
    margin: 15px 8.215%;
    padding: 0 30.195%;
    cursor: pointer;
    display: none;
    @media screen and (max-width: 480px){
        display: block;
        
      
    }
`

export const NavLinks = styled(LinkS)`
 
  object-fit: contain;
  font-family: Ubuntu;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: -0.34px;
  text-align: left;

  color: #8e8e8e;
  display: flex;
  align-items: center;
  padding:${({ id }) => (id==='1' ? `0 `: `0 1rem;`)};
  height: 100%;
  cursor: pointer;


    & :hover {
        color: #fff;
    }
    &.active {
        color: #275AEE;
        border-bottom: ${({ id }) => (id==='1' ? `0 `: `3px solid #275AEE`)};
    }
`;



export const Logo = styled.img`
    height: 60px;
    margin: 3px 3% 0 0;
    padding-right: 24.399%;
    cursor: pointer;
    @media screen and (max-width: 768px){
        margin: 15px 3% 0 0;
    }

    @media screen and (max-width: 480px){
       display: none;
    }
    
`
export const NavMenu = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
list-style: none;
list-style: none;
text-align: center;
width: 100%
`


export const LeftMenu = styled.div`
    display : flex;
    height: 78.7px;
    width:100%;

    @media screen and (max-width: 768px){
        display: none;
    }
   

`

export const RightMenu = styled.div`
    display : flex;
    @media screen and (max-width: 480px){
        display: none;
    }

`
export const NavContact = styled(LinkS)`
  font-family: NanumSquareOTFR;
  margin-left: -113%;
  padding: 19.2% 55.99%;
  white-space: nowrap;
  background: #4052fe;
  color: #fff;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;

outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
border-radius: 4px;

&:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`

// export const HomeLink = styled.a`
//     width: 18px;
//     height: 22px;
//     color: #fff;
//     font-size: 18px;
//     margin: 14px 3.95% 22px 0;
//     object-fit: contain;

// `

// export const DotVideoLink = styled.a`
// font-color: #565656;
// width: 72px;
// height: 22px;
// font-size: 18px;
// color: #fff;
// margin: 14px 3.95% 22px 0;
// object-fit: contain;
// `

// export const FollowLink = styled.a`
// width: 54px;
// height: 22px;
// font-size: 18px;
// margin: 14px 45.3% 22px 0;
// color: #fff;
// object-fit: contain;
// `
// export const SearchLink = styled.a`
//     width: 30px;
//     height: 30px;
//     color: #fff;
//      margin: 12px 0 18px 0;
//     object-fit: contain;
// ` 





