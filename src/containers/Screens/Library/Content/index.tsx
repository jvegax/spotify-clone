import PlayListCard from './PlayListCard'
import { Container } from './styles'
import { MOCK_PLAYLISTS } from '../../../../models/PlayList/mock'

const Content = () => {
  const handleRenderPlayListCard = () => MOCK_PLAYLISTS.map((playList) => <PlayListCard key={playList.id} playList={playList} />)

  return (
    <Container>
      {handleRenderPlayListCard()}
    </Container>
  )
}
export default Content
