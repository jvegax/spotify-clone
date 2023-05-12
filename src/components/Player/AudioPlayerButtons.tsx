/* eslint-disable */
import { TouchableOpacity } from 'react-native'
import theme from '../../theme'
import Text from '../Text'
import { playAudio, pauseAudio, nextAudio, previousAudio } from '../../utils/Audio'
import useTrackPlayer from '../../zustand/useStore'

const AudioPlayerButtons = () => {
  const {
    sound,
    currentSongIndex,
    updateCurrentSongIndex
  } = useTrackPlayer()
  return (
    <>
      <Text size={22} weight={400}>Current song: {currentSongIndex}</Text>
      <TouchableOpacity
        onPress={() => playAudio(sound)}
        style={{
          backgroundColor: theme.colors.green,
          width: 75,
          height: 75,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20
        }}
      >
        <Text size={18} weight={600}>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => pauseAudio(sound)}
        style={{
          backgroundColor: theme.colors.green,
          width: 75,
          height: 75,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20
        }}
      >
        <Text size={18} weight={600}>Pause</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => nextAudio({ sound, currentSongIndex, updateCurrentSongIndex })}
        style={{
          backgroundColor: theme.colors.green,
          width: 75,
          height: 75,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20
        }}
      >
        <Text size={18} weight={600}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => previousAudio({ sound, currentSongIndex, updateCurrentSongIndex })}
        style={{
          backgroundColor: theme.colors.green,
          width: 75,
          height: 75,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20
        }}
      >
        <Text size={18} weight={600}>Previous</Text>
      </TouchableOpacity>

    </>
  )
}

export default AudioPlayerButtons
