import React from 'react'
import { Container, LeftContainer, ProfileContainer, ProfileImage, RightContainer, SearchContainer } from './styles'
import { Text } from '../../../../components'
import { AntDesign } from '@expo/vector-icons'

const MOCK_IMAGE = 'https://scontent-cdg4-2.xx.fbcdn.net/v/t1.6435-1/83170277_2690236534391242_3429242622319788032_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=110&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=E2aRLFlrzhMAX95uLPj&_nc_ht=scontent-cdg4-2.xx&edm=AP4hL3IEAAAA&oh=00_AfDWyc8n93RagtHGJLeZnUbFEALiZDzTt1YL2KRIdMzW2w&oe=645708B7'

const Header = () => {
  return (
    <Container>
      <ProfileContainer>
        <RightContainer>
          <ProfileImage
            source={{
              uri: MOCK_IMAGE
            }}
          />
          <Text size={22} weight={600}>Tu Biblioteca</Text>
        </RightContainer>
        <LeftContainer>
          <AntDesign name="search1" size={24} color="white" />
          <AntDesign name="plus" size={26} color="white" />
        </LeftContainer>
      </ProfileContainer>
      <SearchContainer>
        <Text size={22} weight={400}>Search container</Text>
      </SearchContainer>
    </Container>
  )
}

export default Header
