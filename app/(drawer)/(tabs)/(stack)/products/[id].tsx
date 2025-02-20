import { View, Text } from 'react-native'
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router';
import { productsData } from '@/store/products.store'
import { useEffect } from 'react'

const ProductDetailsScreen = () => {

  const { id } = useLocalSearchParams()
  const navigation = useNavigation()

  const product = productsData.find(product => product.id === id)

  useEffect(()=>{
    navigation.setOptions({
      title: product?.title ?? 'Producto'
    })
  },[product])

  
  if( !product ){
    return <Redirect href={'/'} />
  }

  return (
    <View className="flex-1 my-3 px-4">
      <Text className="text-2xl font-work-black">{ product.title }</Text>
      <Text className="text-gray-700 leading-6 font-work-medium">{ product.description }</Text>
      <Text className="font-work-black text-3xl mt-2">{ product.price }</Text>
    </View>
  )
}

export default ProductDetailsScreen