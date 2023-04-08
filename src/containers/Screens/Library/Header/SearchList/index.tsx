import React from 'react'
import SearchCard from './SearchCard'
import { Container } from './styled'
import { SearchField } from './SearchCard/types'

const MOCK_SEARCH_LIST = [
  SearchField.Album,
  SearchField.Artist,
  SearchField.Playlist,
  SearchField.Song,
  SearchField.Podcast,
  SearchField.Audiobook
]

const SearchList = () => {
  const handleRenderSearchCards = () => MOCK_SEARCH_LIST.map((item, index) => <SearchCard key={index} type={item} />)

  return (
    <Container>
      {handleRenderSearchCards()}
    </Container>

  )
}

export default SearchList
