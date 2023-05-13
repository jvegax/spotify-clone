import React from 'react'
import Text from '../Text'
import { useTrackContext } from '../../context/useTrackPlayer'
import { Center, Container, Left, Right, SongImage } from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

const TrackPlayer = () => {
  const { currentSong } = useTrackContext()
  const normalizeTitle = currentSong?.title.slice(0, 25)
  return (
    <Container>
      <Left>
        <SongImage source={currentSong?.image} />
      </Left>
      <Center>
        <Text weight={600} size={14}>
          {normalizeTitle}
        </Text>
        <Text weight={300} size={12}>
          {currentSong?.author}
        </Text>
      </Center>
      <Right>
        <TouchableOpacity>
          <MaterialIcons name='favorite' size={32} color='white' />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name='pause' size={38} color='white' />
        </TouchableOpacity>
      </Right>
    </Container>
  )
}

export default TrackPlayer
