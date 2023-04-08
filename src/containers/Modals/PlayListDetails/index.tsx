import { useNavigation, useRoute } from '@react-navigation/native'
import type { PlayListDetailsRouteProps as Props } from '../../../navigator/types'
import { Container, GoBackButton, ImageBackground, Title } from './styles'
import { Ionicons } from '@expo/vector-icons'
import SongList from './SongList'

const PlayListDetails = () => {
  const { goBack } = useNavigation()
  const { params } = useRoute<Props['route']>()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = params

  return (
    <Container>
      <GoBackButton onPress={goBack}>
        <Ionicons name='arrow-back' size={28} color='white' />
      </GoBackButton>
      <Title>PEGAO</Title>
      <ImageBackground />
      <SongList />
    </Container>
  )
}

export default PlayListDetails
