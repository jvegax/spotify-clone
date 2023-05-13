import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'

import theme from './src/theme'
import Navigator from './src/navigator'
import TrackProvider from './src/context/TrackProvider'
import TrackPlayer from './src/components/TrackPlayer'

export default function App () {
  return (
    <TrackProvider>
      <ThemeProvider theme={theme}>
        <StatusBar style='light' />
        <SafeAreaProvider>
          <TrackPlayer />
          <NavigationContainer>
            <Navigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </TrackProvider>
  )
}
