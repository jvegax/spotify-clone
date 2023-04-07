import type { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  modalStackScreenOptions,
  generalStackScreenOptions,
} from './constants';
import type { Props } from './types';
import Tabs from '../containers/Tabs';

const { Navigator, Group, Screen } = createNativeStackNavigator();

const AppNavigator: FC<Props> = () => (
  <Navigator screenOptions={generalStackScreenOptions}>
    <Screen name="Tabs" component={Tabs} />

    {/* <Group screenOptions={modalStackScreenOptions}>
      <Screen
        name="HomeDetails"
        component={HomeDetails}
      />
      <Screen name="SearchDetails" component={SearchDetails} />

      <Screen name="LibraryDetails" component={LibraryDetails} />
    </Group> */}
  </Navigator>
);

export default AppNavigator;
