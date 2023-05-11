import { useNavigation } from '@react-navigation/native'
import { Container, GoBackButton, ImageBackground, SpotifyContainer, Title } from './styles'
import { Ionicons, Entypo } from '@expo/vector-icons'
import SongList from './SongList'
import IconSection from './IconSection'
import { Text } from '../../../components'
import { CurrentSongCard } from '../../../components/CurrentSong'

const PlayListDetails = () => {
  const { goBack } = useNavigation()

  return (
    <Container>
      <GoBackButton onPress={goBack}>
        <Ionicons name='arrow-back' size={28} color='white' />
      </GoBackButton>
      <Title>PEGAO</Title>
      <ImageBackground />
      <SpotifyContainer>
        <Entypo name='spotify' size={24} color='green' /><Text size={14} weight={600}>Spotify</Text>
      </SpotifyContainer>
      <IconSection />
      <SongList />
      <CurrentSongCard />
    </Container>
  )
}

export default PlayListDetails
