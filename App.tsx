import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'

import theme from './src/theme'
import Navigator from './src/navigator'
import CurrentSong from './src/components/CurrentSong'
import { MOCK_SONGS } from './src/zustand/constants'
import { useEffect } from 'react'
import useTrackPlayer from './src/zustand/useStore'
import { Audio } from 'expo-av'

export default function App () {
  const {
    sound,
    updatePlayList,
    currentSong,
    updateSound
  } = useTrackPlayer()

  useEffect(() => {
    async function setupInitialAudioConfig () {
      // --> Load default playList
      updatePlayList(MOCK_SONGS)

      // --> Load initial audio
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
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='light' />
      <SafeAreaProvider>
        <CurrentSong />
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
