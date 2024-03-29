import React from 'react'
import { ArtistContainer, ArtistInfoWrapper, ArtistH1, ArtistH3, ArtistCardRow1, ArtistCardRow2, Bg,
        ArtistInfoCard, ArtistCardWrapper, ArtistWhoWrapper, Line,
        ArtistRequiredCard, RequiredH2, RequiredH3, InfoNum,
        InfoH2, InfoH3} from './ArtistElements';
import one from '../../../assets/images/number-01.png';
import two from '../../../assets/images/number-02.png';
import three from '../../../assets/images/number-03.png';
import four from '../../../assets/images/number-04.png';

const ArtistSection = () => {
    return (
        <>
        <Bg>
        <ArtistContainer id="artist"> 
            <ArtistInfoWrapper>
                <ArtistH1>Artist</ArtistH1>
                <Line />
                <ArtistH3>여러분들은 모두 붓을 들고 있습니다. 점만 찍는다면 아티스트가 될 거예요.</ArtistH3>
            </ArtistInfoWrapper>

            <ArtistCardWrapper>
                {/* <Column> */}
                    <ArtistCardRow1>
                        <ArtistInfoCard>
                            {/* <InfoIcon src={artistField} alt="artistInfo" /> */}
                            <InfoNum src={one} />
                            <InfoH2>아티스트 인증</InfoH2>
                            <InfoH3>자신을 소개하기 위한 프로필을 만들어보세요</InfoH3>
                        </ArtistInfoCard>

                        <ArtistInfoCard>
                            <InfoNum src={two} />
                            <InfoH2 num='2'>작업물 인증</InfoH2>
                            <InfoH3 num='2'>자신의 작업물이나 닷비디오를 제작하고 프로필페이지에 업로드 해주세요</InfoH3>
                        </ArtistInfoCard>
                    </ArtistCardRow1>
                
                    <ArtistCardRow2>
                        <ArtistInfoCard>
                            <InfoNum src={three} />
                            <InfoH2>계좌 인증</InfoH2>
                            <InfoH3>수익을 정산 받을 계좌를 등록해주세요</InfoH3>
                        </ArtistInfoCard>

                        <ArtistInfoCard>
                            <InfoNum src={four} />
                            <InfoH2>팔로워 초대</InfoH2>
                            <InfoH3>다른 SNS의 자신의 팬이나 친구들을 초대하세요</InfoH3>
                        </ArtistInfoCard>
                    </ArtistCardRow2>
            </ArtistCardWrapper>

            <ArtistWhoWrapper>
                        <ArtistRequiredCard>
                            <RequiredH2>창작 욕구가 있으신 분</RequiredH2>
                            <RequiredH3>타인의 작품을 감상하는 것도 좋지만</RequiredH3>
                            <RequiredH3>자신만의 작품을 만들고 발전시켜보세요</RequiredH3>
                        </ArtistRequiredCard>

                        <ArtistRequiredCard>
                            <RequiredH2>대중의 반응이 궁금하신 분</RequiredH2>
                            <RequiredH3>블루닷의 서비스를 통해 </RequiredH3>
                            <RequiredH3>당신의 작품을 세상에 선보이고 반응을 보세요</RequiredH3>
                        </ArtistRequiredCard>

                        <ArtistRequiredCard>
                            <RequiredH2>예술을 하고자 하는 분</RequiredH2>
                            <RequiredH3>음악 · 미술 · 미디어아트의 다양한 분야에서 꿈을 갖고 자신의 개성을 표현하세요.</RequiredH3>
                        </ArtistRequiredCard>
            </ArtistWhoWrapper>
            
            
                




        </ArtistContainer>


        </Bg>

        </>
    )
}

export default ArtistSection
