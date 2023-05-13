import { MaterialIcons, MaterialCommunityIcons, FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons'
import { Container, LeftContainer, RightContainer } from './styles'

const IconSection = () => (
  <Container>
    <RightContainer>
      <MaterialIcons name='favorite' size={24} color='green' />
      <MaterialCommunityIcons name='progress-download' size={24} color='gray' />
      <MaterialCommunityIcons name='dots-vertical' size={22} color='gray' />
      <Ionicons name='person-add-outline' size={24} color='gray' />
    </RightContainer>

    <LeftContainer>
      <FontAwesome name='random' size={24} color='green' />
      <AntDesign name='play' size={38} color='green' />
    </LeftContainer>
  </Container>
)

export default IconSection
