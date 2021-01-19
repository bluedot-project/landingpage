import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document{
    static async getInitialProps(ctx){
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try{
            //css를 ssr해주는 메소드
            ctx.renderPage = () => originalRenderPage({
                enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
            });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            };
        }catch(error){
            console.log(error);
        }finally{
            sheet.seal();
        }
    }

    render(){
        return(
            <Html>
                <Head>
                    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css"/>
                    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet" />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="icon" type="image/png" size="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" size="16x16" href="/favicon-16x16.png" />

                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://bluedot.im/" />
                    <meta property="og:title" content="아티스트 영상 소통 브랜딩 커뮤니티 플랫폼 | 블루닷 Bludeot (2021) " />
                    <meta property="og:image" content="/bdot_logo2.png" />
                    <meta property="og:description" content="영상과 팬 전용 커뮤니티로 이루어지는 소통과 수익 창출을 함께 하는 새로운 아티스트 퍼스널브랜딩 커뮤니티" />
                    
                </Head>
                <body>
                    <Main />
                    <script src="https://polyfill.io/v3/polyfill.min.js?features=default%2Ces2015%2Ces2016%2Ces2017%2Ces2018%2Ces2019" />
                    <NextScript />
                </body>
            </Html>
        )
    }
}