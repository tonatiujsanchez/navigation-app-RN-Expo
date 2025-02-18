import { Text, Pressable, PressableProps, View } from 'react-native'
import React, { ReactNode } from 'react'

const bgThemes = {
  'primary'  : 'bg-primary',
  'secondary': 'bg-secondary',
  'tertiary' : 'bg-tertiary',
}
const textThemes = {
  'primary'  : 'text-primary',
  'secondary': 'text-secondary',
  'tertiary' : 'text-tertiary',
}

interface Props extends PressableProps {
  children: ReactNode
  color?: 'primary' | 'secondary' | 'tertiary'
  variant?: 'text-only' | 'block'
  className?: string
}
const CustomButton = React.forwardRef(
  ({ children, color = "primary", variant = 'block', className = '', ...props }: Props,
    ref: React.Ref<View>
  ) => {

    if (variant === 'text-only') {
      return (
        <Pressable
          className={`px-4 py-2 active:scale-[0.99] active:opacity-90 active:bg-slate-50 ${className}`}
          ref={ref}
          {...props}
        >
          <Text className={`${textThemes[color]} text-center`}>
            {children}
          </Text>
        </Pressable>
      )
    }

    return (
      <Pressable
        className={`px-4 py-2 rounded-md active:scale-[0.99] active:opacity-90 ${bgThemes[color]} ${className}`}
        ref={ref}
        {...props}
      >
        <Text className={`text-white text-center`}>
          {children}
        </Text>
      </Pressable>
    )
  })

export default CustomButton