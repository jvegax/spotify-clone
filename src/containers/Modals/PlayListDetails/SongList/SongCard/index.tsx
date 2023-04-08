/* eslint-disable @typescript-eslint/no-misused-promises */
import { Image } from 'expo-image'
import type { FC } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Text } from '../../../../../components'
import { Button, Container, Info } from './styles'
import { Props } from './types'

const SongCard: FC<Props> = ({ playAudio, song }) => {
  return (
    <Button onPress={playAudio}>
      <Container>
        <Image
          source={{ uri: song.share.image }}
          style={{ width: 65, height: 65 }}
        />
        <Info>
          <Text size={16} weight={600}>{song.title.slice(0, 25)}</Text>
          <Text size={12} weight={300}>{song.type} - {song.subtitle.slice(0, 24)}</Text>
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
