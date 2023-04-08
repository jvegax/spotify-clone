/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import theme from '../../theme'
import Text from '../Text'
import { Audio } from 'expo-av'
import { MOCK_SONGS } from './constants'

const AudioPlayerButtons = () => {
  const [sound, setSound] = useState<Audio.Sound | null>(null)
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0)

  const playAudio = async () => {
    if (sound === null) return
    await sound.playAsync()
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
    setCurrentSongIndex((currentSongIndex + 1) % MOCK_SONGS.length)
  }

  const playPreviousSong = async () => {
    if (sound === null) return
    await sound.stopAsync()
    setCurrentSongIndex(
      currentSongIndex === 0 ? MOCK_SONGS.length - 1 : currentSongIndex - 1
    )
  }

  useEffect(() => {
    async function loadAudio () {
      const { sound } = await Audio.Sound.createAsync({
        uri: MOCK_SONGS[currentSongIndex].uri
      })
      setSound(sound)
    }
    loadAudio().catch((error) => console.log(error))
    return () => {
      if (sound !== null) {
        sound.unloadAsync()
      }
    }
  }, [currentSongIndex])
  return (
    <>
      <Text size={22} weight={400}>Current song: {currentSongIndex}</Text>
      <TouchableOpacity
        onPress={playAudio}
        style={{
          backgroundColor: theme.colors.green,
          width: 75,
          height: 75,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20
        }}
      >
        <Text size={18} weight={600}>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={pauseAudio}
        style={{
          backgroundColor: theme.colors.green,
          width: 75,
          height: 75,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20
        }}
      >
        <Text size={18} weight={600}>Pause</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={playNextSong}
        style={{
          backgroundColor: theme.colors.green,
          width: 75,
          height: 75,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20
        }}
      >
        <Text size={18} weight={600}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={playPreviousSong}
        style={{
          backgroundColor: theme.colors.green,
          width: 75,
          height: 75,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20
        }}
      >
        <Text size={18} weight={600}>Previous</Text>
      </TouchableOpacity>

    </>
  )
}

export default AudioPlayerButtons
