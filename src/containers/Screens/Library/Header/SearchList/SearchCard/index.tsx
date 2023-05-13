import type { FC } from 'react'
import { memo } from 'react'
import { Text } from '../../../../../../components'

import { TouchableOpacity } from 'react-native'
import { Props } from './types'
import { Container } from './styles'

const SearchCard: FC<Props> = ({ type }) => (
  <TouchableOpacity>
    <Container>
      <Text size={12} weight={400}>{type}</Text>
    </Container>
  </TouchableOpacity>
)

export default memo(SearchCard)
