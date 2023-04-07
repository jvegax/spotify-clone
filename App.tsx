import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigator from './src/navigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      <SafeAreaProvider>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

