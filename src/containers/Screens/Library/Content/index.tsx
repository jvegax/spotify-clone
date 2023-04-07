import React, { useEffect, useState } from 'react'
import { Text } from '../../../../components'
import { Container } from './styles'
import { Audio } from 'expo-av';
import { MOCK_CHART } from '../../../../models/Chart/mock';
import { TouchableOpacity } from 'react-native';
import theme from '../../../../theme';

const Content = () => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  const playAudio = async () => {
    if (!sound) return;
    await sound.playAsync();
  }

  const stopAudio = async () => {
    if (!sound) return;
    await sound.stopAsync();
  }

  useEffect(() => {
    async function loadAudio() {
      const { sound } = await Audio.Sound.createAsync({
        uri: MOCK_CHART.player.uri,
      });
      setSound(sound);
    }
    loadAudio();
  }, []);

  return (
    <Container>
      <TouchableOpacity onPress={playAudio}
        style={{
          backgroundColor: theme.colors.green,
          width: 100,
          height: 100,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20
        }}
      >
        <Text size={28} weight={600}>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={stopAudio}
              style={{
                backgroundColor: 'red',
                width: 100,
                height: 100,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 20
              }}
      >
        <Text size={26} weight={600}>Stop</Text>
      </TouchableOpacity>
    </Container>
  )
}
export default Content
