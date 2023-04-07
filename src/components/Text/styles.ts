import styled from 'styled-components/native'
import { Props } from './types'

export const StyledText = styled.Text<Props>`
    font-weight: ${props => props.weight};
    font-size: ${props => props.size}px;
    color: ${({ theme }) => theme.colors.white};
`
