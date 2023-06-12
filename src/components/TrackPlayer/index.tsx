import { useState } from 'react'
import Text from '../Text'
import { Center, Container, Left, Right, SongImage } from './styles'
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { pauseCurrentSong, playCurrentSong } from '../../redux/slices/trackPlayer'

const TrackPlayer = () => {
  const [paused, setPaused] = useState(false)
  const currentSong = useAppSelector((state) => state.trackPlayer.currentSong)
  const dispatch = useAppDispatch()

  const normalizeTitle = currentSong?.title.slice(0, 25)

  const renderActionButtons = () => {
    if (paused) {
      return (
        <TouchableOpacity onPress={() => {
          setPaused(false)
          dispatch(playCurrentSong())
        }}
        >
          <FontAwesome name='play' size={26} color='white' />
        </TouchableOpacity>
      )
    }

    return (
      <TouchableOpacity onPress={() => {
        setPaused(true)
        dispatch(pauseCurrentSong())
      }}
      >
        <MaterialIcons name='pause' size={34} color='white' />
      </TouchableOpacity>
    )
  }

  if (currentSong === null) return null

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
          <MaterialIcons name='favorite' size={28} color='white' />
        </TouchableOpacity>
        {renderActionButtons()}
      </Right>
    </Container>
  )
}

export default TrackPlayer
