import { createContext } from 'react'
import { Song } from '../models/Song/types'
import { MOCK_SONGS_NORMALIZED } from '../models/Song/mock'

interface TrackContextProps {
  currentSong: Song | null
  handlePressNewSong: (newSong: Song) => Promise<void>
}

const TrackPlayerContext = createContext<TrackContextProps>({
  currentSong: MOCK_SONGS_NORMALIZED[0],
  handlePressNewSong: async (newSong: Song) => {}
})

export default TrackPlayerContext
