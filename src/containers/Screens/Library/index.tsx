import { useCallback } from 'react'
import Content from './Content'
import Header from './Header'
import { Container } from './styles'
import { useNavigation } from '@react-navigation/native'

// type Props = MainStackScreenProps<'Library'> & {}

const Library = () => {
  const { navigate } = useNavigation()

  const onPressNavigatePlayList = useCallback(
    (id: string) => {
      navigate('PlayListDetails', { id })
    },
    [navigate]
  )

  return (
    <Container>
      <Header />
      <Content onPressNavigatePlayList={onPressNavigatePlayList} />
    </Container>
  )
}

export default Library
