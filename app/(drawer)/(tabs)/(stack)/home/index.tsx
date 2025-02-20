import { View, Text, SafeAreaView } from 'react-native'
import { Link, useNavigation } from 'expo-router'
import CustomButton from '@/components/ui/CustomButton';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';

const HomeScreen = () => {

  const navigation = useNavigation()

  const onToggleMenuDrawer = () => {
    navigation.dispatch( DrawerActions.toggleDrawer )
  }

  return (
    <SafeAreaView>
      <View className="mt-7 mx-2.5">
        <Text className="text-center ml-5 text-4xl font-work-black my-2">
          HOME VIEW
        </Text>

        <Link href={'/products'} asChild>
          <CustomButton
            color='primary'
            className='mb-1'
          >
            👕 Productos
          </CustomButton>
        </Link>
        <CustomButton
          onPress={ ()=>console.log('OnPress... Text Only') }
          color='primary'
          className='mb-1'
          variant='text-only'
        >
          Text Only
        </CustomButton>
        <CustomButton
          onPress={ ()=>console.log('OnPress... Text Only') }
          color='secondary'
          className='mb-1'
          variant='text-only'
        >
          Text Only
        </CustomButton>

        <CustomButton
          onPress={ ()=>console.log('OnPress...') }
          color='primary'
        >
          My custom Buton
        </CustomButton>
        
        {/*=== === Link === ===*/}
        <Link href="/home" className="mt-3" asChild>
          <CustomButton variant="text-only">
            Home
          </CustomButton>
        </Link>
        <Link href="/products" className="mt-3" asChild>
          <CustomButton variant='text-only'>
            Productos
          </CustomButton>
        </Link>
        <Link href="/profile" className="mt-3" asChild>
          <CustomButton variant="text-only">
            Perfil
          </CustomButton>
        </Link>
        <Link href="/settings" className="mt-3" asChild>
          <CustomButton variant='text-only'>
            Ajustes
          </CustomButton>
        </Link>
        <CustomButton
          onPress={ onToggleMenuDrawer }
          color='tertiary'
          className='mb-1'
        >
          <Ionicons name="menu-outline" size={20} /> Menú
        </CustomButton>
      </View>
  </SafeAreaView>
  )
}

export default HomeScreen