import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import theme from '../../theme'

export const tabStackScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarStyle: { backgroundColor: theme.colors.black, borderTopColor: theme.colors.black, height: 70, paddingBottom: 10 },
  tabBarActiveTintColor: theme.colors.white,
  tabBarInactiveTintColor: theme.colors.gray
}
