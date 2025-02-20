import CustomDrawer from '@/components/ui/CustomDrawer';
import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        overlayColor: 'rgba(0,0,0,0.4)',
        drawerActiveTintColor:'#49129C',
        headerShadowVisible: false,
        headerShown: false,
        sceneStyle: {
          backgroundColor: '#FFF'
        },
      }}
      
    >
      <Drawer.Screen
        name="user/index"
        options={{
          drawerLabel: 'User',
          title: 'Usuario',
          drawerIcon: ({ color, size })=> ( 
            <Ionicons name="person-circle-outline" size={size} color={color} /> 
          ),
        }}
      />

      <Drawer.Screen
        name="schedule/index"
        options={{
          drawerLabel: 'Schedule',
          title: 'Horarios',
          drawerIcon: ({ color, size })=> ( 
            <Ionicons name="calendar-outline" size={size} color={color} /> 
          ),
        }}
      />

      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: 'Tabs',
          title: 'Tabs + Stack',
          drawerIcon: ({ color, size })=> ( 
            <Ionicons name="analytics-outline" size={size} color={color} /> 
          ),
        }}
      />

    </Drawer>
  )
}

export default DrawerLayout