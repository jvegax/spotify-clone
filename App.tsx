import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import theme from './src/theme'
import Navigator from './src/navigator'
import TrackPlayer from './src/components/TrackPlayer'
import store from './src/redux/store'
import { Audio } from 'expo-av'

Audio.setAudioModeAsync({})

export default function App () {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar style='light' />
        <SafeAreaProvider>
          <TrackPlayer />
          <NavigationContainer>
            <Navigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  )
}
