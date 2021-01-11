import React from 'react'
import Link from 'next/link';
import { Nav, Logo, NavbarContainer, NavMenu, LeftMenu, RightMenu,
    HomeLink, DotVideoLink, FollowLink, SearchLink } from './NavbarElements'
import { Button } from 'antd';
import logo from '../../images/logo@2x.png';
import search from '../../images/search.png';
import loginBtn from '../../images/login.png';

const Navbar = () => {
    return (
        <>
            <Nav>
            <NavbarContainer>
                        
                    
                <NavMenu>
                    <LeftMenu>
                    <Link href="/">
                        <Logo src={logo} alt="" />
                    </Link>

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
                        {/* <Link href="/search">
                            <SearchLink>
                                <img src={search} alt="search" />
                            </SearchLink>
                        </Link> */}
                        <nav
                        style={{  width: '159px', height: '40px', margin: '6px 0 14px 0'}}>
                             <img src={loginBtn} alt="button_login" />
         
                        </nav>
                    </RightMenu>
                </NavMenu>     

             
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
