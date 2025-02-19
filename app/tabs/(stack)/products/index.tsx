import { View, Text, FlatList } from 'react-native'
import { productsData } from '@/store/products.store'
import { Link } from 'expo-router'

const ProductsScreen = () => {
  return (
    <View className="flex-1 px-4">
      <FlatList
        data={productsData}
        keyExtractor={ item => item.id }
        renderItem={({ item }) => (
          <View className="mb-4">
            <View className="flex flex-row justify-between gap-1">
              <Text className="font-work-black text-xl">{ item.title }</Text>
              <Text className="font-work-black text-2xl">${ item.price }</Text>
            </View>
            <Text className="text-gray-700 leading-6 font-work-medium">{ item.description }</Text>
            <View className="flex flex-row justify-end">
              <Link 
                href={`/tabs/(stack)/products/${ item.id }`}
                className="text-primary"
              >
                Ver detalles
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default ProductsScreen