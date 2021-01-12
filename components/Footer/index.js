import React, { useCallback, useState } from 'react'
import { FooterContainer, FooterInfoWrapper, FooterH1, FooterH3,
        FooterEmail, FooterContactWrapper, Contact1, Contact, EmailInput,
        Contact2, ShareH2, VisitH2, ShareH3, VisitH3, EmailBtn} from './FooterElements'
import TitleUnderline from '../../assets/images/shape-titleunderline.png';
import emailTextfield from '../../assets/images/textfield-email.png'
import kakao from '../../assets/images/img-kakao.png'
import facebook from '../../assets/images/img-facebook.png'
import url from '../../assets/images/img-url.png'
import youtube from '../../assets/images/img-youtube.png'
import emailBtn from '../../assets/images/btn-next.png'
import Link from 'next/link';

const Footer = () => {
  
    const [email, setEmail] = useState('');
    const [err, setErr] = useState('');
    const isEmail = email => {
        const emailRegex =  /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

        return emailRegex.test(email);
    }
    const onEmailValid = () => {

        if(!isEmail(email)){
            setErr("이메일 형식으로 입력해주세요");
            return false;
        }
        return true;
    }
    const onChangeEmail = (e) =>{
        setEmail(e.target.value);
        setErr("");
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(!onEmailValid()){
            console.log("email error");
        }else{
            console.log(email);
        }
        
        setEmail("");
    }

    return (
        
        <>
            <div id="contact" >
            <FooterContainer > 
                <FooterInfoWrapper>
                    <FooterH1>Contact</FooterH1>
                    <img src={TitleUnderline} class="shape_titleunderline"
                    style={{ marginBottom: '27.8px'}}/>
                    <FooterH3>이메일을 입력하시면 블루닷에 대한 자세한 정보받을 수 있습니다.</FooterH3>
                
                    <FooterEmail >
                        <img src={emailTextfield} alt="textfield_email"/>
                        

                        <EmailInput 
                        id="email"
                        placeholder="이메일"
                        style= {{    
                        fontFamily: 'NanumSquareOTFR',
                        fontSize: '24px'}}
                        type="email"
                        value={email}
                        onChange={onChangeEmail}
                        />
                        
                        {err && <div 
                                style={{ color:'#1127fe',  
                                    fontFamily: 'NanumSquareOTFR', 
                                    fontSize: '20px',
                                    position: 'absolute', 
                                    margin:'150px 0 0 8%',
                                    lineHeight: '1.71',
                                    letterSpacing: '-0.96px'}}>{err}</div>}
                        
                        <EmailBtn onClick={onSubmit} >
                                <img src={emailBtn} alt="btn_next"/>
                        </EmailBtn>
                           
                        
                    </FooterEmail>
                </FooterInfoWrapper>


                <FooterContactWrapper>
                    <Contact1>
                        <ShareH2>share</ShareH2>
                        <ShareH3>블루닷의 소식을 친구에게 공유해보세요</ShareH3>

                        <div style={{  width:'150px', height:'44px', marginTop:'10px'
                                        ,cursor: 'pointer'}}>
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

                        <div style={{  width:'150px', height:'55px', marginTop:'5px',cursor: 'pointer'}}>
                            <Link href="https://www.youtube.com/channel/UCTVRD06NSlyXlo41Dbz2JEQ" class="youtube">
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
