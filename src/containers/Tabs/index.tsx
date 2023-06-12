import { memo } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, Search, Library } from '../Screens'
import { Ionicons } from '@expo/vector-icons'
import { tabStackScreenOptions } from './constants'

const Tab = createBottomTabNavigator()

const TabBarBottom = () => {
  return (
    <Tab.Navigator screenOptions={tabStackScreenOptions}>
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home-outline' size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='Search'
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='search-outline' size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='Library'
        component={Library}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='book-outline' size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default memo(TabBarBottom)
