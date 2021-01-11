import React from 'react'
import { FooterContainer, FooterInfoWrapper, FooterH1, FooterH3,
        FooterEmail, FooterContactWrapper, Contact1,
        Contact2, ShareH2, VisitH2, ShareH3, VisitH3} from './FooterElements'
import TitleUnderline from '../../images/shape-titleunderline.png';
import emailTextfield from '../../images/textfield-email.png'
import kakao from '../../images/img-kakao.png'
import facebook from '../../images/img-facebook.png'
import url from '../../images/img-url.png'
import youtube from '../../images/img-youtube.png'
import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <div style={{ height: '925px'}}>
            <FooterContainer id="Footers"> 
                <FooterInfoWrapper>
                    <FooterH1>Contact</FooterH1>
                    <img src={TitleUnderline} class="shape_titleunderline"
                    style={{ marginBottom: '27.8px'}}/>
                    <FooterH3>이메일을 입력하시면 블루닷에 대한 자세한 정보받을 수 있습니다.</FooterH3>
                
                    <FooterEmail>
                        <img src={emailTextfield} alt="textfield_email"/>
                        <button>btn</button>
                    </FooterEmail>
                </FooterInfoWrapper>


                <FooterContactWrapper>
                    <Contact1>
                        <ShareH2>share</ShareH2>
                        <ShareH3>블루닷의 소식을 친구에게 공유해보세요</ShareH3>

                        <div style={{ display: 'flex', width:'44px', height:'44px', marginTop:'10px'}}>
                            <Link href="/" class="kakao">
                                <img src={kakao} 
                                    style={{ marginRight:'6px'}}/>
                            </Link>

                            <Link href="/" class="facebook">
                                <img src={facebook}
                                    style={{ marginRight:'6px'}}/>
                            </Link>

                            <Link href="/" class="url">
                                <img src={url}/>
                            </Link>
                        </div>
                    </Contact1>

                    <Contact2>
                        <VisitH2>visit</VisitH2>
                        <VisitH3>블루닷의 유튜브를 방문해보세요</VisitH3>

                        <div style={{ display: 'flex', width:'233px', height:'55px', marginTop:'5px'}}>
                            <Link href="/" class="youtube">
                                <img src={youtube} />
                            </Link>
                        </div>
                    </Contact2>

                </FooterContactWrapper>

        </FooterContainer>

            </div>
        </>
    )
}

export default Footer
