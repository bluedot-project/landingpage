import styled from 'styled-components';

export const Nav = styled.nav`
    background: #000;
    height: 78.7px;
    padding: 13px 0 5.7px 0;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
    
    
`

export const NavbarContainer = styled.div`
    display: flex;
    margin-left: 12.265%;
    margin-right: 13.427%;
    max-width: 1920px;

`

export const Logo = styled.img`
    height: 60px;
    margin: 0 3% 0 0;
    
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
    width:100%;
`

export const HomeLink = styled.a`
    width: 18px;
    height: 22px;
    color: #fff;
    font-size: 18px;
    margin: 14px 3.95% 22px 0;
    object-fit: contain;

`

export const DotVideoLink = styled.a`
font-color: #565656;
width: 72px;
height: 22px;
font-size: 18px;
color: #fff;
margin: 14px 3.95% 22px 0;
object-fit: contain;
`

export const FollowLink = styled.a`
width: 54px;
height: 22px;
font-size: 18px;
margin: 14px 45.3% 22px 0;
color: #fff;
object-fit: contain;
`
export const RightMenu = styled.div`
    display : flex;

`

export const SearchLink = styled.a`
    width: 30px;
    height: 30px;
    color: #fff;
     margin: 12px 0 18px 0;
    object-fit: contain;
`
