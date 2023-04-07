import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {
  modalStackScreenOptions,
  generalStackScreenOptions
} from './constants'
import Tabs from '../containers/Tabs'
import { HomeDetails, LibraryDetails, SearchDetails } from '../containers/Modals'

const { Navigator, Group, Screen } = createNativeStackNavigator()

const AppNavigator = () => (
  <Navigator screenOptions={generalStackScreenOptions}>
    <Screen name="Tabs" component={Tabs} />

    <Group screenOptions={modalStackScreenOptions}>
      <Screen
        name="HomeDetails"
        component={HomeDetails}
      />
      <Screen name="SearchDetails" component={SearchDetails} />

      <Screen name="LibraryDetails" component={LibraryDetails} />
    </Group>
  </Navigator>
)

export default AppNavigator
