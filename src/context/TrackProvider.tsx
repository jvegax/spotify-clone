import { useState, useEffect, useRef, useCallback } from 'react'
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

  const pauseCurrent = () => {
    if (sound) sound.pauseAsync()
  }

  const playCurrent = () => {
    if (sound) sound.playAsync()
  }

  const handlePressNewSong = useCallback(async (newSong: Song) => {
    if (currentSong?.id === newSong.id) return

    pauseCurrent()

    const { sound: newSound } = await Audio.Sound.createAsync(
      { uri: newSong.uri },
      { shouldPlay: true }
    )

    setSound(newSound)
    setCurrentSong(newSong)
    soundRef.current = newSound
  }, [currentSong])

  useEffect(() => {
    return () => {
      if (soundRef.current) soundRef.current.unloadAsync()
    }
  }, [])

  const value = {
    sound,
    currentSong,
    playCurrent,
    pauseCurrent,
    handlePressNewSong
  }

  return (
    <TrackContext.Provider value={value}>
      {children}
    </TrackContext.Provider>
  )
}

export default TrackProvider
