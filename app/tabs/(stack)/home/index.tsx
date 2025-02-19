import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import CustomButton from '../../../../components/ui/CustomButton';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="mt-7 mx-2.5">
        <Text className="text-center ml-5 text-4xl font-work-black my-2">
          HOME VIEW
        </Text>

        <Link href={'/tabs/products'} asChild>
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
        <Link href="/tabs/(stack)/home" className="mt-3" asChild>
          <CustomButton variant="text-only">
            Home
          </CustomButton>
        </Link>
        <Link href="/tabs/(stack)/products" className="mt-3" asChild>
          <CustomButton variant='text-only'>
            Productos
          </CustomButton>
        </Link>
        <Link href="/tabs/(stack)/profile" className="mt-3" asChild>
          <CustomButton variant="text-only">
            Perfil
          </CustomButton>
        </Link>
        <Link href="/tabs/(stack)/settings" className="mt-3" asChild>
          <CustomButton variant='text-only'>
            Ajustes
          </CustomButton>
        </Link>
      </View>
  </SafeAreaView>
  )
}

export default HomeScreen