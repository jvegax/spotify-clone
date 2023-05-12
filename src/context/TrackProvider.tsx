
import { useState, useEffect, useRef } from 'react'
import type { FC } from 'react'
import TrackContext from './TrackPlayerContext'
import { TrackProviderProps } from './types'
import { Audio } from 'expo-av'

interface Song {
  id: string
  type: string
  title: string
  author: string
  image: string
  uri: string
}

const TrackProvider: FC<TrackProviderProps> = ({ children }) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null)
  const [sound, setSound] = useState<Audio.Sound | null>(null)
  const soundRef = useRef<Audio.Sound>()

  const pauseCurrent = async () => {
    if (sound) {
      await sound.pauseAsync()
    }
  }

  const handlePressNewSong = async (newSong: Song) => {
    if (currentSong?.id === newSong.id) {
      return
    }

    await pauseCurrent()

    const { sound: newSound } = await Audio.Sound.createAsync(
      { uri: newSong.uri },
      { shouldPlay: true }
    )

    setSound(newSound)
    setCurrentSong(newSong)
    soundRef.current = newSound
  }

  useEffect(() => {
    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync()
      }
    }
  }, [])

  const value = {
    currentSong,
    handlePressNewSong
  }

  return (
    <TrackContext.Provider value={value}>
      {children}
    </TrackContext.Provider>
  )
}

export default TrackProvider
