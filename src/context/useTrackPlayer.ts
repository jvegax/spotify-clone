import { useContext } from 'react'
import TrackPlayerContext from './TrackPlayerContext'

export const useTrackContext = () => {
  const context = useContext(TrackPlayerContext)
  return context
}
