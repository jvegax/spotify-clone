import { useEffect } from 'react'
import useTrackPlayer from '../zustand/useStore'
import { MOCK_SONGS } from '../zustand/constants'
import { Audio } from 'expo-av'

const useAudioConfig = () => {
  const {
    sound,
    updatePlayList,
    currentSong,
    updateSound
  } = useTrackPlayer()

  useEffect(() => {
    async function setupInitialAudioConfig () {
      // 1. Load mocked playList
      updatePlayList(MOCK_SONGS)

      // 2. Load initial audio
      const { sound } = await Audio.Sound.createAsync({
        uri: currentSong.uri
      })

      updateSound(sound)
    }
    setupInitialAudioConfig().catch(err => console.log(err))
    return () => {
      if (sound !== null) sound.unloadAsync()
    }
  }, [sound])

  return {}
}

export default useAudioConfig
