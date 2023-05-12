import SongCard from './SongCard'
import { Container } from './styles'
import { MOCK_SONGS } from '../../../../zustand/constants'

const SongList = () => {
  const handleRenderSongCards = () => {
    return MOCK_SONGS.map((song: any) => ( // TODO: remove any
      <SongCard
        key={song.key}
        song={song}
        playAudio={() => {}}
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
