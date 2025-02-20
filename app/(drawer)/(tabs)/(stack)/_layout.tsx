import { Ionicons } from '@expo/vector-icons'
import { DrawerActions } from '@react-navigation/native'
import { router, Stack, useNavigation } from 'expo-router'

const StackLayout = () => {

  const navigation = useNavigation()

  const onHandleLeftPress = (canGoBack: boolean|undefined) => {
    if( canGoBack ){
      return router.back()
    }
    navigation.dispatch( DrawerActions.toggleDrawer )
  }

  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: '#FFF'
        },
        headerLeft: ({ tintColor, canGoBack })=> {
          return ( 
            <Ionicons 
              name={ canGoBack ? 'arrow-back-outline' :'add'} 
              size={ 20 }
              onPress={ () => onHandleLeftPress(canGoBack) } 
              className="mr-3" /> 
            )
        }
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: 'Inicio'
        }}
      />
      <Stack.Screen
        name="products/index"
        options={{
          title: 'Productos'
        }}
      />
      <Stack.Screen
        name="profile/index"
        options={{
          title: 'Perfil'
        }}
      />
      
      <Stack.Screen
        name="settings/index"
        options={{
          title: 'Ajustes',
          animation: 'slide_from_bottom'
        }}
      />
      
    </Stack>
  )
}

export default StackLayout