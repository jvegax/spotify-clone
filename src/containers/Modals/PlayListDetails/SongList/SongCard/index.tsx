import { Image } from 'expo-image'
import React from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { Text } from '@components/index'

export const Button = styled(TouchableOpacity)`
  width: 90%;
  height: auto;
  margin: 10px 0;
`

export const Container = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const Info = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 10px;
`

const SongCard = () => {
  return (
    <Button>
      <Container>
        <Image
          source={{ uri: 'https://i.ibb.co/zZLHD6Q/jacyco.png' }}
          style={{ width: 65, height: 65 }}
        />
        <Info>
          <Text size={18} weight={400}>Coco Chanel</Text>
          <Text size={14} weight={200}>Eladio Carrion, Bad Bunny</Text>
        </Info>
        <MaterialCommunityIcons
          name='dots-vertical' size={32} color='white' style={{
            position: 'absolute',
            right: 0
          }}
        />
      </Container>
    </Button>
  )
}

export default SongCard
