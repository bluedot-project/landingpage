import styled from 'styled-components';

export const Nav = styled.nav`
    background: #000;
    width: 100%;
    height: 78.7px;
    padding: 13px 258px 5.7px 235.5px;
    object-fit: contain;
    // margin-top: -80px;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    
`

export const NavbarContainer = styled.div`
    display: flex;
`

export const Logo = styled.a`
    background-image: url('https://i.pinimg.com/236x/05/52/37/055237cde9e33fc7b4e4146289731648.jpg');
    width: 62px;
    height: 60px;
    margin: 0 19.25px 0 0;
    object-fit: contain;
    
`

export const LeftMenu = styled.div`
    
    display : flex;
    width: 643.25px;

`

export const HomeLink = styled.a`
width: 18px;
height: 22px;
margin: 16px 25px 22px 19.25px;
object-fit: contain;

`

export const DotVideoLink = styled.a`
width: 72px;
height: 22px;
margin: 16px 25px 22px;
object-fit: contain;
`

export const FollowLink = styled.a`
width: 54px;
height: 22px;
margin: 16px 398px 22px 25px;
object-fit: contain;
`
export const RightMenu = styled.div`
    display : flex;

`

export const SearchLink = styled.a`
    width: 30px;
  height: 30px;
  margin: 12px 12.55px 18px 472px;
  object-fit: contain;
`
