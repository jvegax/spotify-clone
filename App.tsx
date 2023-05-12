import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'

import theme from './src/theme'
import Navigator from './src/navigator'
import CurrentSong from './src/components/CurrentSong'
import TrackProvider from './src/context/TrackProvider'

export default function App () {
  return (
    <TrackProvider>
      <ThemeProvider theme={theme}>
        <StatusBar style='light' />
        <SafeAreaProvider>
          <CurrentSong />
          <NavigationContainer>
            <Navigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </TrackProvider>
  )
}
