import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { FaBars } from 'react-icons/fa'
import { Nav, Logo, NavbarContainer, NavMenu, LeftMenu, RightMenu, NavLinks, 
    NavContact, MobileIcon, HomeLink, DotVideoLink, FollowLink, SearchLink } from './NavbarElements'
import logo from '../../assets/images/logo@2x.png';
import { animateScroll as scroll } from 'react-scroll';
import search from '../../assets/images/search.png';
import loginBtn from '../../assets/images/login.png';


const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 800){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    })

    const toggleHome = () => {
        scroll.scrollToTop();
    };


    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavMenu>
                        <Link href="/">
                            <Logo src={logo} alt="" />
                        </Link>
                        <MobileIcon to="contact"
                        smooth={true} 
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80} >
                            C
                        </MobileIcon>

                        <LeftMenu>
                            <NavLinks to="about" 
                            smooth={true} 
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>
                                About
                            </NavLinks>
                            <NavLinks to="service"
                            smooth={true} 
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>
                                Service
                            </NavLinks>
                            <NavLinks to="artist"
                            smooth={true} 
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>
                                Artist
                            </NavLinks>
                           


                           
                            {/* <Link href="/home">
                                <HomeLink>홈</HomeLink>
                            </Link>

                            <Link href="/dotvideo">
                                <DotVideoLink>닷비디오</DotVideoLink>
                            </Link>

                            <Link href="/follow">
                                <FollowLink>팔로우</FollowLink>
                            </Link> */}
                        </LeftMenu>

                        

                        <RightMenu>
                            {/* <Link href="/search">
                                <SearchLink>
                                    <img src={search} alt="search" />
                                </SearchLink>
                            </Link> */}
                             <NavContact to="contact"
                            smooth={true} 
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>
                                Contact
                            </NavContact>
                            {/* <nav
                            style={{  width: '159px', height: '40px', margin: '6px 0 14px 0', cursor: 'pointer'
                                    }}>
                                <img src={loginBtn} alt="button_login" />
            
                            </nav> */}
                        </RightMenu>
                    </NavMenu>     
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
