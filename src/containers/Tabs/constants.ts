import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import theme from '../../theme';

export const tabStackScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: { backgroundColor: theme.colors.black },
  tabBarActiveTintColor: theme.colors.white,
};
