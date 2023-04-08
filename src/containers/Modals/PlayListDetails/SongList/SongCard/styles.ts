import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

export const Button = styled(TouchableOpacity)`
  width: 90%;
  height: auto;
  margin: 10px 0;
`

export const Container = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const Info = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 10px;
`
