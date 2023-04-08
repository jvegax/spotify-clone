/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useEffect, useState } from 'react'

import { Audio } from 'expo-av'
import { TouchableOpacity } from 'react-native'
import theme from '../../../../theme'
import { Text } from '../../../../components'

const AudioPlayerButtons = () => {
  const [sound, setSound] = useState<Audio.Sound | null>(null)

  const playAudio = async () => {
    if (sound == null) return
    await sound.playAsync()
  }

  const stopAudio = async () => {
    if (sound == null) return
    await sound.stopAsync()
  }

  useEffect(() => {
    async function loadAudio () {
      const { sound } = await Audio.Sound.createAsync({
        uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/bc/5c/5c/bc5c5ca1-0aa1-457d-65ce-f0f56f8a8245/mzaf_12809811648741532519.plus.aac.ep.m4a'
      })
      setSound(sound)
    }
    loadAudio().catch((error) => console.log(error))
  }, [])
  return (
    <>
      <TouchableOpacity
        onPress={playAudio}
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
      <TouchableOpacity
        onPress={stopAudio}
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
