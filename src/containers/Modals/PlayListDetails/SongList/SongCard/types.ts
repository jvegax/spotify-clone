import { Song } from '../../../../../models/Song/types'

export interface Props {
  song: Song
  playAudio: () => void // TODO: type correctly
}
