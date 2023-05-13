import { Image } from 'expo-image'
import type { FC } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Text } from '../../../../../components'
import { Button, Container, Info } from './styles'
import { Song } from '../../../../../models/Song/types'
import { useTrackContext } from '../../../../../context/useTrackPlayer'
interface Props {
  song: Song | null
}
const SongCard: FC<Props> = ({ song }) => {
  const { handlePressNewSong } = useTrackContext()
  const onPress = () => {
    if (song === null) return
    handlePressNewSong(song)
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
