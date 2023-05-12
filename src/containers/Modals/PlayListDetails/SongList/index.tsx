import { MOCK_SONGS_NORMALIZED } from '../../../../models/Song/mock'
import SongCard from './SongCard'
import { Container } from './styles'

const SongList = () => {
  const handleRenderSongCards = () => {
    return MOCK_SONGS_NORMALIZED.map((song) => (
      <SongCard
        key={song.id}
        song={song}
      />
    ))
  }
  return (
    <Container>
      {handleRenderSongCards()}
    </Container>
  )
}

export default SongList
