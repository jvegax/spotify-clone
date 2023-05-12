import { create } from 'zustand'
import { Audio } from 'expo-av'
import { MOCK_SONGS, Song } from './constants'

export interface State {
  playList: Song[] | null
  currentSongIndex: number | null
  currentSong: Song
  sound: Audio.Sound | null
}

export interface Actions {
  updateSound: (newSound: Audio.Sound) => void
  updateCurrentSong: (newSong: Song) => void
  updateCurrentSongIndex: (newIndex: number) => void
  updatePlayList: (newPlayList: Song[]) => void
}

const useTrackPlayer = create<State & Actions>((set) => ({
  playList: MOCK_SONGS, // TODO - Default playlist should be the one that user clicked on
  currentSongIndex: 0, // TODO -
  currentSong: MOCK_SONGS[0], // TODO -
  sound: null,

  updateSound: (newSound: Audio.Sound) => set({ sound: newSound }),
  updateCurrentSong: (newSong: Song) => set({ currentSong: newSong }),
  updateCurrentSongIndex: (newSongIndex: number) => set({ currentSongIndex: newSongIndex }),
  updatePlayList: (newPlayList: Song[]) => set({ playList: newPlayList })
}))

export default useTrackPlayer
