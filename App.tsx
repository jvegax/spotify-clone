import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Home } from './src/containers';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <SafeAreaProvider>
          {/* <NavigationContainer> */}
            <Home />
          {/* </NavigationContainer> */}
        </SafeAreaProvider>
    </ThemeProvider>
  );
}

