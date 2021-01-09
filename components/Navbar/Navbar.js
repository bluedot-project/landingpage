import React from 'react'
import Link from 'next/link';
import { Nav, Logo, NavbarContainer, LeftMenu, RightMenu,
    HomeLink, DotVideoLink, FollowLink, SearchLink } from './NavbarElements'
import { Button } from 'antd';
import logo from '../../images/logo.svg';


const Navbar = () => {
    return (
        <>
            <Nav>
            <NavbarContainer>
                        
                    <Link href="/">
                        <Logo>
                            <img src={logo} alt=""/>
                        </Logo>
                        {/* <Logo/> */}
                    </Link>
                <LeftMenu>
                    <Link href="/home">
                        <HomeLink>홈</HomeLink>
                    </Link>

                    <Link href="/dotvideo">
                        <DotVideoLink>닷비디오</DotVideoLink>
                    </Link>

                    <Link href="/follow">
                        <FollowLink>팔로우</FollowLink>
                    </Link>
                </LeftMenu>     

                <RightMenu>
                    <Link href="/search">
                        <SearchLink>검색</SearchLink>
                    </Link>

                    <Button
                        style={{ borderRight: 'none', borderLeft: 'none', borderBottom: 'none',
                        borderTop: 'none' , padding: '0 0 0 0', width: '159px', height: '40px'
                        ,margin: '6px 0 14px 12.55px'}}>
                       <Link href="/signin">로그인 회원가입</Link> 
                    </Button>

                    

                </RightMenu>         
        
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
