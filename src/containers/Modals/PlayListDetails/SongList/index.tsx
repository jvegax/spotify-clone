import { Song } from '../../../../models/Song/types'
import SongCard from './SongCard'
import { Container } from './styles'
import type { FC } from 'react'
interface Props {
  songs: Song[]
}
const SongList: FC<Props> = ({ songs }) => {
  const handleRenderSongCards = () => {
    return songs.map((song) => (
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
