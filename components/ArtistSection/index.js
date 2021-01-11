import React from 'react'
import { ArtistContainer, ArtistInfoWrapper, ArtistH1, ArtistH3, ArtistCardRow1, ArtistCardRow2,
        ArtistInfoCard1, ArtistInfoCard2, ArtistInfoCard3, ArtistInfoCard4, Column, Column2,
        ArtistRequired1, ArtistRequired2, ArtistRequired3} from './ArtistElements';
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
                        <ArtistInfoCard1>
                            <img src={artistField} alt="artistInfo"/>
                        </ArtistInfoCard1>

                        <ArtistInfoCard2>
                            <img src={artistField} alt="artistInfo"/>
                        </ArtistInfoCard2>
                    </ArtistCardRow1>
                
                    <ArtistCardRow2>
                        <ArtistInfoCard3>
                            <img src={artistField} alt="artistInfo"/>
                        </ArtistInfoCard3>

                        <ArtistInfoCard4>
                            <img src={artistField} alt="artistInfo"/>
                        </ArtistInfoCard4>
                    </ArtistCardRow2>
                </Column>


                <Column2>
                        <ArtistRequired1>
                            <img src={artistWho} alt="artistRequired"/>
                        </ArtistRequired1>

                        <ArtistRequired2>
                            <img src={artistWho} alt="artistRequired"/>
                        </ArtistRequired2>

                        <ArtistRequired3>
                            <img src={artistWho} alt="artistRequired"/>
                        </ArtistRequired3>
                </Column2>

                
            </ArtistInfoWrapper>



        </ArtistContainer>



        </div>

        </>
    )
}

export default ArtistSection
