import styled from 'styled-components/native'

const MOCK_IMAGE = { uri: 'https://i.ibb.co/zZLHD6Q/jacyco.png' }

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.black};
  justify-content: flex-start;
  align-items: center;
`

export const ImageBackground = styled.ImageBackground.attrs({
  source: MOCK_IMAGE
})`
    width: 100%;
    height: 270px;
    opacity: 0.7;
    z-index: -1;
    position: relative;
`

export const GoBackButton = styled.TouchableOpacity`
    position: absolute;
    top: 45px;
    left: 25px;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: ${({ theme }) => theme.colors.lightBlack};
    opacity: 0.8;
    justify-content: center;
    align-items: center;
`

export const Title = styled.Text`
  position: absolute;
  bottom: 480px;
  left: 0;
  margin-left: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 54px;
  font-weight: bold;
`
