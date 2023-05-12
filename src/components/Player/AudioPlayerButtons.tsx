// import { TouchableOpacity } from 'react-native'
// import theme from '../../theme'
// import Text from '../Text'
// import { useTrackContext } from '../../context/useTrackPlayer'

// const AudioPlayerButtons = () => {
//   const { playAudio, pauseAudio, previousAudio, nextAudio, currentSongIndex } = useTrackContext()
//   return (
//     <>
//       <Text size={22} weight={400}>Current song: {currentSongIndex}</Text>
//       <TouchableOpacity
//         onPress={() => playAudio()}
//         style={{
//           backgroundColor: theme.colors.green,
//           width: 75,
//           height: 75,
//           borderRadius: 50,
//           justifyContent: 'center',
//           alignItems: 'center',
//           marginBottom: 20
//         }}
//       >
//         <Text size={18} weight={600}>Play</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={() => pauseAudio()}
//         style={{
//           backgroundColor: theme.colors.green,
//           width: 75,
//           height: 75,
//           borderRadius: 50,
//           justifyContent: 'center',
//           alignItems: 'center',
//           marginBottom: 20
//         }}
//       >
//         <Text size={18} weight={600}>Pause</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={() => nextAudio()}
//         style={{
//           backgroundColor: theme.colors.green,
//           width: 75,
//           height: 75,
//           borderRadius: 50,
//           justifyContent: 'center',
//           alignItems: 'center',
//           marginBottom: 20
//         }}
//       >
//         <Text size={18} weight={600}>Next</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={() => previousAudio()}
//         style={{
//           backgroundColor: theme.colors.green,
//           width: 75,
//           height: 75,
//           borderRadius: 50,
//           justifyContent: 'center',
//           alignItems: 'center',
//           marginBottom: 20
//         }}
//       >
//         <Text size={18} weight={600}>Previous</Text>
//       </TouchableOpacity>

//     </>
//   )
// }

// export default AudioPlayerButtons
