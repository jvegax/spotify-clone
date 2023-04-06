import { Text } from '../../../components';
import { ImageBackground, TextContainer } from './styles';

const Header = () => {
  return (
    <ImageBackground>
      <TextContainer>
        <Text size={36} weight={900}>HELLO WORLD</Text>
      </TextContainer>
    </ImageBackground>
  );
};

export default Header;