import React from 'react'
import { ArtistContainer, ArtistInfoWrapper, ArtistH1, ArtistH3, ArtistCardRow1, ArtistCardRow2,
        ArtistInfoCard,  Column, Column2,
        ArtistRequired, RequiredH2, RequiredH3, InfoIcon, InfoNum,
        InfoH2, InfoH3, WhoIcon} from './ArtistElements';
import TitleUnderline from '../../images/shape-titleunderline.png';
import artistField from '..//../images/shape-artist-textfield.png';
import artistWho from '../../images/textfield-artist-who.png'

const ArtistSection = () => {
    return (
        <>
        <div style={{    height: '1300px',
            background: '#fff',
        }}>
        <ArtistContainer id="Artists"> 
            <ArtistInfoWrapper>
                <ArtistH1>Artist</ArtistH1>
                <img src={TitleUnderline} class="shape_titleunderline"
                style={{ marginBottom: '27.8px'}}/>
                <ArtistH3>여러분들은 모두 붓을 들고 있습니다. 점만 찍는다면 아티스트가 될 거예요.</ArtistH3>
                
                <Column>
                    <ArtistCardRow1>
                        <ArtistInfoCard>
                            <InfoIcon src={artistField} alt="artistInfo" />
                            <InfoNum>01</InfoNum>
                            <InfoH2>아티스트 인증</InfoH2>
                            <InfoH3>자신을 소개하기 위한 프로필을 만들어보세요</InfoH3>
                        </ArtistInfoCard>

                        <ArtistInfoCard>
                            <InfoIcon src={artistField} alt="artistInfo" />
                            <InfoNum>02</InfoNum>
                            <InfoH2 style={{margin: '0 0 3% 8.4%'}}>작업물 인증</InfoH2>
                            <InfoH3 style={{margin: '2% 0 0 9%'}}>자신의 작업물이나 닷비디오를 제작하고 프로필페이지에 업로드 하세요</InfoH3>
                        </ArtistInfoCard>
                    </ArtistCardRow1>
                
                    <ArtistCardRow2>
                        <ArtistInfoCard>
                            <InfoIcon src={artistField} alt="artistInfo" />
                            <InfoNum>03</InfoNum>
                            <InfoH2>계좌 인증</InfoH2>
                            <InfoH3>수익을 정산 받을 계좌를 등록해주세요</InfoH3>
                        </ArtistInfoCard>

                        <ArtistInfoCard>
                            <InfoIcon src={artistField} alt="artistInfo" />
                            <InfoNum>04</InfoNum>
                            <InfoH2>팔로워 초대</InfoH2>
                            <InfoH3>다른 SNS의 자신의 팬이나 친구들을 초대하세요</InfoH3>
                        </ArtistInfoCard>
                    </ArtistCardRow2>
                </Column>


                <Column2>
                        <ArtistRequired>
                            <WhoIcon src={artistWho} alt="artistRequired" />
                            <RequiredH2>창작 욕구가 있으신 분</RequiredH2>
                            <RequiredH3>타인의 작품을 감상하는 것도 좋지만 자신만의 작품을 만들고 발전시켜보세요</RequiredH3>
                        </ArtistRequired>

                        <ArtistRequired>
                            <WhoIcon src={artistWho} alt="artistRequired" />
                            <RequiredH2>대중의 반응이 궁금하신 분</RequiredH2>
                            <RequiredH3>블루닷의 서비스를 통해 당신의 작품을 세상에 선보이고 반응을 보세요</RequiredH3>
                        </ArtistRequired>

                        <ArtistRequired>
                            <WhoIcon src={artistWho} alt="artistRequired" />
                            <RequiredH2>예술을 하고자 하는 분</RequiredH2>
                            <RequiredH3>음악 · 미술 · 미디어아트의 다양한 분야에서 꿈을 갖고 자신의 개성을 표현하세요.</RequiredH3>
                        </ArtistRequired>
                </Column2>

                
            </ArtistInfoWrapper>



        </ArtistContainer>



        </div>

        </>
    )
}

export default ArtistSection
