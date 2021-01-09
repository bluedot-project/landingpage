import React from 'react'
import Link from 'next/link';
import { Nav, Logo, NavbarContainer, LeftMenu, RightMenu,
    HomeLink, DotVideoLink, FollowLink, SearchLink, LoginBtn } from './NavbarElements'
import { Button } from 'antd';


const Navbar = () => {
    return (
        <>
            <Nav>
            <NavbarContainer>
                        
                    <Link href="/" src="https://i.pinimg.com/236x/05/52/37/055237cde9e33fc7b4e4146289731648.jpg">
                        <Logo>로고</Logo>
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
                        로그인 회원가입
                    </Button>

                    

                </RightMenu>         
                    {/* <NavMenu>
                        <NavItem>
                            <Link href="/"><a>홈</a></Link>
                        </NavItem>

                        <NavItem>
                            <Link href="/dotvideo"><a>닷비디오</a></Link>
                        </NavItem>

                        <NavItem>
                            <Link href="/follow"><a>팔로우</a></Link>
                        </NavItem>
                    </NavMenu> */}
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
