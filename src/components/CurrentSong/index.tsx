import React from 'react'
import styled from 'styled-components/native'

export const CurrentSongCard = styled.View`
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 95%;
  z-index: 1;
  
  height: 70px;
  border-radius: 8px;
  margin-left: 10px;

  background-color: ${({ theme }) => theme.colors.lightBlack};
`

const CurrentSong = () => {
  return (
    <CurrentSongCard />
  )
}

export default CurrentSong
