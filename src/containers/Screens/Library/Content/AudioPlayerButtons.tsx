import React, { useEffect, useState } from 'react'
import { MOCK_SONG } from '../../../../models/Song/mock';
import { Audio } from 'expo-av';
import { TouchableOpacity } from 'react-native';
import theme from '../../../../theme';
import { Text } from '../../../../components';

const AudioPlayerButtons = () => {
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
          uri: MOCK_SONG.player.uri,
        });
        setSound(sound);
      }
      loadAudio();
    }, []);
    return (
        <>
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
        </>
    )
}

export default AudioPlayerButtons