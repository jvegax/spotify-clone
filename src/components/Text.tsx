import styled from 'styled-components/native'

interface TextProps {
    weight: number
    size: number
    children: string
}

const StyledText = styled.Text<TextProps>`
    font-weight: ${props => props.weight};
    font-size: ${props => props.size}px;
    color: ${({ theme }) => theme.colors.white};
`

const Text = ({ children, weight, size }: TextProps) => {
    return (
        <StyledText weight={weight} size={size}>
            {children}
        </StyledText>
    )
}

export default Text