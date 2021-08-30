import React, { useCallback, useState } from 'react'
import {
    FooterContainer, FooterInfoWrapper, FooterH1, FooterH3, Line, Bg, SocialLink, ErrMsg,
    FooterInputWrapper, FooterContactWrapper, Contact1, TextInput, TextInput2, TextInput3, SocialImg,
    Row1, Row2, Row3, Contact2, ShareH2, VisitH2, ShareH3, VisitH3, EmailBtn
} from './FooterElements'
import youtube from '../../../assets/images/img-youtube.png'
import tistory from '../../../assets/images/img-tstroy.png'
import insta from '../../../assets/images/img-instar.png'
import Link from 'next/link';

const Footer = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [submitted, setSubmitted] = useState('false');

    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const onChangePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    }
    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const onChangeDescription = (e) => {
        setDescription(e.target.value);
    }
    const [err, setErr] = useState('');
    const isEmail = email => {
        const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

        return emailRegex.test(email);
    }

    const isNumber = phoneNumber => {
        const numberRegex = /^\d{3}-\d{3,4}-\d{4}$/;

        return numberRegex.test(phoneNumber);
    }
    const onFormValid = () => {

        if (!isEmail(email)) {
            setErr("이메일을 정확히 입력해주세요");
            return false;
        } else if (!isNumber(phoneNumber)) {
            setErr("번호를 제대로 입력해주세요.");
            return false;
        }
        return true;
    }

    const onSubmit = () => {

        const variable = {
            email: email,
            name: name,
            message: description,
            phoneNumber: phoneNumber,
            title: title,
        }

        if (!onFormValid()) {
            console.log("error");
        }

        else {
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(variable)

            }).then((res) => {
                if (res.status === 200) {
                    setSubmitted(true);
                    console.log("true", res.status);
                    window.location.reload();
                }

            })
            setEmail("");
            setName("");
            setPhoneNumber("");
            setTitle("");
            setDescription("");

        }


    }

    const refreshPage = () => {

    }

    return (

        <>
            <div id="contact" >


                <Bg>
                    <FooterContainer >
                        <FooterInfoWrapper>
                            <FooterH1>Contact</FooterH1>
                            <Line />
                            <FooterH3>블루닷과 함께 하고싶으신 아티스트/ 크리에이터분 또는 궁금한 점이 있으면 여기를 통해 소통해주세요.</FooterH3>

                            <FooterInputWrapper onFinish={onSubmit}>
                                <Row1>
                                    <TextInput
                                        id="name"
                                        placeholder="이름"
                                        type="name"
                                        value={name}
                                        onChange={onChangeName}
                                        required
                                    />
                                    <TextInput
                                        id="phoneNumber"
                                        placeholder="연락처('-'포함)"
                                        type="phoneNumber"
                                        value={phoneNumber}
                                        onChange={onChangePhoneNumber}
                                        required
                                    />
                                    <TextInput
                                        id="email"
                                        placeholder="이메일"
                                        type="email"
                                        value={email}
                                        onChange={onChangeEmail}
                                        required
                                    />


                                </Row1>

                                <Row2>
                                    <TextInput2
                                        id="title"
                                        placeholder="제목"
                                        type="title"
                                        value={title}
                                        onChange={onChangeTitle}
                                        required
                                    />
                                </Row2>

                                <Row3>
                                    <TextInput3
                                        id="description"
                                        placeholder="내용"
                                        type="description"
                                        value={description}
                                        onChange={onChangeDescription}
                                        required
                                    />
                                </Row3>



                                <EmailBtn type="primary" htmlType="submit" onClick={refreshPage}>
                                    Send
                                </EmailBtn>

                                {err && <ErrMsg >{err}</ErrMsg>}


                            </FooterInputWrapper>

                        </FooterInfoWrapper>


                        <FooterContactWrapper>


                            <Contact1>
                                <VisitH2>visit</VisitH2>

                                <div style={{ display: 'flex' }}>
                                    <VisitH3>블루닷의 다른 소식도 들어보세요</VisitH3>

                                    <SocialLink >
                                        <Link href="https://www.youtube.com/channel/UCTVRD06NSlyXlo41Dbz2JEQ" class="youtube">
                                            <SocialImg src={youtube} />
                                        </Link>

                                        <Link href="https://loosie.tistory.com/" class="tistory">
                                            <SocialImg src={tistory} />
                                        </Link>

                                        <Link href="https://www.instagram.com/loosie999/" class="instagram">
                                            <SocialImg id="insta" src={insta} />
                                        </Link>
                                    </SocialLink>
                                </div>


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
