import type { FC } from 'react'
import { memo } from 'react'
import { Props } from './types'
import { StyledText } from './styles'

const Text: FC<Props> = ({ children, weight = 300, size = 18 }) => (
  <StyledText weight={weight} size={size}>
    {children}
  </StyledText>
)

export default memo(Text)
