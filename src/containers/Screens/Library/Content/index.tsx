import { FC, memo, useCallback } from 'react'
import PlayListCard from './PlayListCard'
import { Container } from './styles'
import { MOCK_PLAYLISTS } from '../../../../models/PlayList/mock'

interface Props {
  onPressNavigatePlayList: (id: string) => void
}

const Content: FC<Props> = ({ onPressNavigatePlayList }) => {
  const handleRenderPlayListCard = useCallback(() => {
    return MOCK_PLAYLISTS.map((playList) =>
      <PlayListCard
        key={playList.id}
        playList={playList}
        onPressNavigatePlayList={onPressNavigatePlayList}
      />
    )
  }, [onPressNavigatePlayList])

  return (
    <Container>
      {handleRenderPlayListCard()}
    </Container>
  )
}
export default memo(Content)
