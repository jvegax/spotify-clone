import styled from 'styled-components/native';
import Text from '../../../components/Text';

const Header = () => {
  return (
    <ImageBackground>
      <TextContainer>
        <Text size={36} weight={900}>HELLO WORLD</Text>
      </TextContainer>
    </ImageBackground>
  );
};

const ImageBackground = styled.ImageBackground.attrs({
  source: require('./album.png'),
})`
  flex: 0.4;
  opacity: 0.8;
`;

const TextContainer = styled.View`
  flex: 1;
  padding: 0 10px;
  justify-content: flex-end;
  align-items: flex-start;
`;


export default Header;