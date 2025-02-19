import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { View, Text } from 'react-native'

const CustomDrawer = (props:DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView
      { ...props }
    >
      <View className="flex justify-center items-center mx-3 p-10 h-[160px] rounded-xl bg-primary mb-4">
        <View className="flex justify-center items-center bg-white rounded-full h-24 w-24">
          <Text className="text-primary font-work-black text-3xl">TS</Text>
        </View>
      </View>

      {/* Draweritems */}
      <DrawerItemList { ...props } />

    </DrawerContentScrollView>
  )
}

export default CustomDrawer