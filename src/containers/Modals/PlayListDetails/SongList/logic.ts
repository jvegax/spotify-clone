/* eslint-disable @typescript-eslint/restrict-plus-operands */

import { Audio } from 'expo-av'
import { MOCK_SONGS_NORMALIZED } from '../../../../models/Song/mock'

interface Props {
  sound: Audio.Sound | null
  currentSongIndex: number
  setCurrentSongIndex: (index: number) => void
  setSound: (sound: Audio.Sound) => void
}

const useLogic = ({ sound, currentSongIndex, setCurrentSongIndex, setSound }: Props) => {
  const playAudio = async (songIndex: number) => {
    if (sound !== null) {
      await sound.stopAsync()
      await sound.unloadAsync()
    }
    const { sound: newSound } = await Audio.Sound.createAsync({
      uri: MOCK_SONGS_NORMALIZED[songIndex].uri
    })
    setSound(newSound)
    await newSound.playAsync()
  }

  const pauseAudio = async () => {
    if (sound === null) return
    await sound.pauseAsync()
  }

  const stopAudio = async () => {
    if (sound === null) return
    await sound.stopAsync()
  }

  const playNextSong = async () => {
    if (sound === null) return
    await sound.stopAsync()
    setCurrentSongIndex((currentSongIndex + 1) % MOCK_SONGS_NORMALIZED.length)
  }

  const playPreviousSong = async () => {
    if (sound === null) return
    await sound.stopAsync()
    setCurrentSongIndex(
      currentSongIndex === 0 ? MOCK_SONGS_NORMALIZED.length - 1 : currentSongIndex - 1
    )
  }
  return {
    playAudio,
    pauseAudio,
    stopAudio,
    playNextSong,
    playPreviousSong
  }
}

export default useLogic
