import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {
  modalStackScreenOptions,
  generalStackScreenOptions
} from './constants'
import Tabs from '../containers/Tabs'
import { PlayListDetails } from '../containers/Modals'

const { Navigator, Group, Screen } = createNativeStackNavigator()

const AppNavigator = () => (
  <Navigator screenOptions={generalStackScreenOptions}>
    <Screen name="Tabs" component={Tabs} />

    <Group screenOptions={modalStackScreenOptions}>
      <Screen name="PlayListDetails" component={PlayListDetails} />
    </Group>
  </Navigator>
)

export default AppNavigator
