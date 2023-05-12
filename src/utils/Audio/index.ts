import { Audio } from 'expo-av'
import { MOCK_SONGS } from '../../zustand/constants'

// ADD play, pause, ......
export const playAudio = async (sound: Audio.Sound | null) => {
  if (sound === null) return
  await sound.playAsync()
}

export const pauseAudio = async (sound: Audio.Sound | null) => {
  if (sound === null) return
  await sound.pauseAsync()
}

export const stopAudio = async (sound: Audio.Sound | null) => {
  if (sound === null) return
  await sound.stopAsync()
}

interface AudioProps {
  sound: Audio.Sound | null
  currentSongIndex: number | null
  updateCurrentSongIndex: (newIndex: number) => void
}
export const nextAudio = async ({
  sound,
  currentSongIndex,
  updateCurrentSongIndex
}: AudioProps) => {
  if (sound === null || currentSongIndex === null) return
  await sound.stopAsync()
  updateCurrentSongIndex((currentSongIndex + 1) % MOCK_SONGS.length)
  await playAudio(sound)
}

export const previousAudio = async ({
  sound,
  currentSongIndex,
  updateCurrentSongIndex
}: AudioProps) => {
  if (sound === null || currentSongIndex === null) return
  await sound.stopAsync()
  updateCurrentSongIndex(
    currentSongIndex === 0 ? MOCK_SONGS.length - 1 : currentSongIndex - 1
  )
}
