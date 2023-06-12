import type { FC } from 'react'
import { Image } from 'expo-image'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Text } from '../../../../../components'
import { Button, Container, Info } from './styles'
import { Song } from '../../../../../models/Song/types'
import { useAppDispatch } from '../../../../../redux/hooks'
import { handlePlayNewSong } from '../../../../../redux/slices/trackPlayer'
interface Props {
  song: Song | null
}
const SongCard: FC<Props> = ({ song }) => {
  const dispatch = useAppDispatch()

  const onPress = () => {
    if (song === null) return
    dispatch(handlePlayNewSong(song))
  }

  return (
    <Button onPress={onPress}>
      <Container>
        <Image
          source={{ uri: song?.image }}
          style={{ width: 65, height: 65 }}
        />
        <Info>
          <Text size={16} weight={600}>{song?.title.slice(0, 25)}</Text>
          <Text size={12} weight={300}>{song?.type} - {song?.title.slice(0, 24)}</Text>
        </Info>
        <MaterialCommunityIcons
          name='dots-vertical' size={22} color='gray' style={{
            position: 'absolute',
            right: 0
          }}
        />
      </Container>
    </Button>
  )
}

export default SongCard
