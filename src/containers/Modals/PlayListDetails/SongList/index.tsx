import React from 'react'
import styled from 'styled-components/native'
import SongCard from './SongCard'

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    paddingTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
})`
    width: 100%;
  `

const SongList = () => {
  return (
    <Container>
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
    </Container>
  )
}

export default SongList
