import type { FC } from 'react'
import { memo } from 'react'
import { PlayList } from '../../../../../models/PlayList/mock'
import { Text } from '../../../../../components'
import { Image } from 'expo-image'
import { Info, Container, Button } from './styles'

export interface Props {
  playList: PlayList
  onPressNavigatePlayList: (id: string) => void
}

const PlayListCard: FC<Props> = ({ playList, onPressNavigatePlayList }) => (
  <Button onPress={() => onPressNavigatePlayList(playList.id)}>
    <Container>
      <Image
        source={playList.image}
        style={{ width: 65, height: 65 }}
      />
      <Info>
        <Text size={16} weight={500}>{playList.name}</Text>
        <Text size={14} weight={300}>{playList.type} - {playList.author}</Text>
      </Info>
    </Container>
  </Button>
)

export default memo(PlayListCard)
