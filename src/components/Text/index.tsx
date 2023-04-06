import type { FC } from 'react'
import { Props } from './types'
import { StyledText } from './styles'

const Text: FC<Props> = ({ children, weight, size }) => {
    return (
        <StyledText weight={weight} size={size}>
            {children}
        </StyledText>
    )
}

export default Text