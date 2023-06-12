import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Song } from '../../../models/Song/types'
import { Audio } from 'expo-av'

export interface TrackPlayerState {
  currentSong: Song | null
  currentSound: Audio.Sound | null
}

const initialState: TrackPlayerState = {
  currentSong: null,
  currentSound: null
}

const trackPlayerSlice = createSlice({
  name: 'trackPlayer',
  initialState,
  reducers: {
    pauseCurrentSong: (state) => {
      if (state.currentSound) {
        console.log('🙌 Pausing current song')
        state.currentSound.pauseAsync()
      }
    },
    playCurrentSong: (state) => {
      if (state.currentSound) {
        state.currentSound.playAsync()
      }
    },
    handlePlayNewSong: {
      reducer: (state, action: PayloadAction<Song>) => {
        const newSong = action.payload
        state.currentSong = newSong

        state.currentSound?.unloadAsync()
          .then(() => console.log('🙌 Unloaded previous song'))
          .catch(err => console.error('❌ Error unloading previous song', err))

        Audio.Sound.createAsync(
          { uri: newSong.uri },
          { shouldPlay: true }
        ).then(({ sound }) => {
          state.currentSound = sound as any
        }).catch((error) => {
          console.error('❌ Error playing sound', error)
        })
      },
      prepare: (newSong: Song) => ({ payload: newSong })
    }
  }
})

export const {
  pauseCurrentSong,
  playCurrentSong,
  handlePlayNewSong
} = trackPlayerSlice.actions

export default trackPlayerSlice.reducer
