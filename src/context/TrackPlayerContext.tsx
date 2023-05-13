import { createContext } from 'react'
import { Song } from '../models/Song/types'

interface TrackContextProps {
  currentSong: Song | null

  handlePressNewSong: (newSong: Song) => Promise<void>
  pauseCurrent: () => void
  playCurrent: () => void
}

const TrackPlayerContext = createContext<TrackContextProps>({
  currentSong: null,

  handlePressNewSong: async (newSong: Song) => {},
  pauseCurrent: () => {},
  playCurrent: () => {}
})

export default TrackPlayerContext
