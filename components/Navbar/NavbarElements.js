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
    
    
`

export const MobileIcon = styled(LinkS)`
    border-radius: 9px;
    background: #275AEE;
    white-space: nowrap;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    display: none;
    margin: -18px 38px 0 0;
    padding: 4px 16px;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        // padding: 0 8px;


        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
      
    }
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    margin-right: 2%;
    height: 100%;
    cursor: pointer;
    font-family: Ubuntu;
    font-size: 18px;
    & :hover {
        color: #fff;
    }
    &.active {
        color: #275AEE;
        border-bottom: 3px solid #275AEE;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    margin-left: 12.265%;
    margin-right: 13.427%;
    max-width: 1920px;

`

export const Logo = styled.img`
    height: 60px;
    margin: 3px 3% 0 0;
    @media screen and (max-width: 768px){
        margin: 15px 3% 0 0;
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
    @media screen and (max-width: 768px){
        display: none;
    }

`
export const NavContact = styled(LinkS)`
border-radius: 9px;
background: #275AEE;
white-space: nowrap;
padding: 10px 22px;
color: #fff;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

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





