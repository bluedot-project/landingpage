import React, { useCallback, useState } from 'react'
import { FooterContainer, FooterInfoWrapper, FooterH1, FooterH3, Line, Bg, SocialLink,
    FooterInputWrapper, FooterContactWrapper, Contact1, TextInput, TextInput2, TextInput3,
    Row1, Row2, Row3, Contact2, ShareH2, VisitH2, ShareH3, VisitH3, EmailBtn} from './FooterElements'
import youtube from '../../../assets/images/img-youtube.png'
import tistory from '../../../assets/images/img-tstroy.png'
import insta from '../../../assets/images/img-instar.png'
import url from '../../../assets/images/img-url.png'
import Link from 'next/link';

const Footer = () => {
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const onChangeEmail = (e) =>  {
        setEmail(e.target.value);
    }
    const onChangePhoneNumber = (e) =>  {
        setPhoneNumber(e.target.value);
    }
    const onChangeTitle = (e) =>  {
        setTitle(e.target.value);
    }

    const onChangeDescription = (e) =>  {
        setDescription(e.target.value);
    }
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

        
             <Bg>
            <FooterContainer > 
                <FooterInfoWrapper>
                    <FooterH1>Contact</FooterH1>
                    <Line />
                    <FooterH3>블루닷과 함께 하고싶으신 아티스트/ 크리에이터 혹은 다른 의견이 있으면 여기를 통해 소통해주세요.</FooterH3>
                
                    <FooterInputWrapper >
                        <Row1>
                            <TextInput 
                                id="name"
                                placeholder="이름"
                                type="name"
                                value={name}
                                onChange={onChangeName}
                            />

                            <TextInput 
                                id="email"
                                placeholder="이메일"
                                type="email"
                                value={email}
                                onChange={onChangeEmail}
                            />
                            
                            <TextInput 
                                id="phoneNumber"
                                placeholder="전화번호"
                                type="phoneNumber"
                                value={phoneNumber}
                                onChange={onChangePhoneNumber}
                            />
                        </Row1>

                        <Row2>
                        <TextInput2
                            id="title"
                            placeholder="제목"
                            type="email"
                            value={title}
                            onChange={onChangeTitle}
                        />
                        </Row2>
                        
                        <Row3>
                        <TextInput3 
                            id="description"
                            placeholder="내용"
                            type="description"
                            value={description}
                            onChange={onChangeDescription}
                        />
                        </Row3>
                        

                      
                    <EmailBtn onClick={onSubmit} >
                                Send
                    </EmailBtn>

                        {/* {err && <div 
                                style={{ color:'#1127fe',  
                                    fontFamily: 'NanumSquareOTFR', 
                                    fontSize: '20px',
                                    position: 'absolute', 
                                    margin:'150px 0 0 8%',
                                    lineHeight: '1.71',
                                    letterSpacing: '-0.96px'}}>{err}</div>} */}
                        


                        
                           
                        
                    </FooterInputWrapper>

                </FooterInfoWrapper>


                <FooterContactWrapper>


                    <Contact1>
                        <VisitH2>visit</VisitH2>
                        <VisitH3>블루닷의 유튜브,블로그, SNS를 방문해보세요</VisitH3>

                        <SocialLink >
                        <Link href="https://www.youtube.com/channel/UCTVRD06NSlyXlo41Dbz2JEQ" class="youtube">
                                <img src={youtube} 
                                    style={{ marginRight:'6px', cursor: 'pointer'}}/>
                             </Link>           

                            <Link href="https://bluedot.tistory.com/" class="tistory">
                                <img src={tistory}
                                    style={{ marginRight:'6px', cursor: 'pointer'}}/>
                            </Link>

                            <Link href="https://www.instagram.com/bluedot_korea/" class="instagram">
                                <img src={insta} style={{ cursor: 'pointer'}}/>
                            </Link>
                            </SocialLink>
                        
                            
                    </Contact1>


                    <Contact2>
                        <ShareH2>address</ShareH2>
                        <ShareH3>문의 : bluedot900214@gmail.com</ShareH3>

                    </Contact2>


                </FooterContactWrapper>

        </FooterContainer>
        </Bg>   
            </div>
        </>
        
    )
    
}

export default Footer
