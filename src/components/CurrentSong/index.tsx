import React from 'react'
import styled from 'styled-components/native'
import Text from '../Text'
// import { MOCK_SONGS } from '../../zustand/constants'
import useTrackPlayer from '../../zustand/useStore'
export const Container = styled.View`
  position: absolute;
  bottom: 72px;
  left: 0;
  width: 95%;
  z-index: 1;
  
  height: 60px;
  border-radius: 8px;
  margin-left: 10px;

  background-color: #27202f;
`

const CurrentSong = () => {
  const { currentSong } = useTrackPlayer()
  // const song = MOCK_SONGS[0]
  return (
    <Container>
      <Text weight={300} size={16}>{currentSong?.title}</Text>
    </Container>
  )
}

export default CurrentSong
