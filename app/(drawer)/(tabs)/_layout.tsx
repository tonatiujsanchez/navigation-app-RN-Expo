import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

const TabsLayout = () => {
  return (
    <Tabs 
      screenOptions={{ 
        tabBarActiveTintColor: '#49129C',
      }}
    >
      <Tabs.Screen
        name="(stack)"
        options={{
          title: 'Stack',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="analytics-outline" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="heart-outline" color={color} />,
        }}
      />
    </Tabs>
  )
}

export default TabsLayout