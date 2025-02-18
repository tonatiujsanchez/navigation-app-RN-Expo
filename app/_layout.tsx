import { useEffect } from 'react'
import { Slot, SplashScreen } from 'expo-router'
import { useFonts } from 'expo-font'
import "./global.css"

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {

  const [fontLoaded, error] = useFonts({
    'WorkSans-Black': require('@/assets/fonts/WorkSans-Black.ttf'),
    'WorkSans-Light': require('@/assets/fonts/WorkSans-Light.ttf'),
    'WorkSans-Medium': require('@/assets/fonts/WorkSans-Medium.ttf'),
  })


  useEffect(() => {
    
    if( error ){
      throw error
    }
  
    if( fontLoaded ){
      SplashScreen.hideAsync()
    }

  }, [fontLoaded, error])
  

  if( !fontLoaded && !error ){
    return null
  }

  return (
      <Slot />
  )
}

export default RootLayout