import React from 'react'
import styled from 'styled-components/native'
import { MaterialIcons, MaterialCommunityIcons, FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons'

export const Container = styled.View`
    width: 100%;
    height: 80px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const RightContainer = styled.View`
    width: 40%;
    flex-direction: row;
    justify-content: flex-start;
    gap: 12px;
    padding-left: 18px;
`
export const LeftContainer = styled.View`
    width: 60%;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    padding-right: 18px;
`

const IconSection = () => {
  return (
    <Container>
      <RightContainer>
        <MaterialIcons name='favorite' size={24} color='green' />
        <MaterialCommunityIcons name='progress-download' size={24} color='gray' />
        <MaterialCommunityIcons name='dots-vertical' size={22} color='gray' />
        <Ionicons name='person-add-outline' size={24} color='gray' />
      </RightContainer>

      <LeftContainer>
        <FontAwesome name='random' size={24} color='green' />
        <AntDesign name='play' size={38} color='green' />
      </LeftContainer>
    </Container>
  )
}

export default IconSection
