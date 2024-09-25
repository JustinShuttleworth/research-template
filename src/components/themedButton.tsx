// components/ThemedButton.tsx

import React from "react"
import {
  Text,
  Pressable,
  ActivityIndicator,
  GestureResponderEvent
} from "react-native"
import clsx from "clsx"

type Variant = "primary" | "secondary" | "outline"

interface ThemedButtonProps {
  variant?: Variant
  onPress?: (event: GestureResponderEvent) => void
  disabled?: boolean
  loading?: boolean
  className?: string
  children: React.ReactNode
  // Add any other props you might need
}

const variantStyles: Record<Variant, string> = {
  primary: "bg-primary-base dark:bg-primary-dark",
  secondary: "bg-secondary-base dark:bg-secondary-dark",
  outline: "bg-transparent border border-gray-500 dark:border-gray-700"
}

const textVariantStyles: Record<Variant, string> = {
  primary: "text-white dark:text-white",
  secondary: "text-white dark:text-white",
  outline: "text-gray-700 dark:text-gray-300"
}

const ThemedButton: React.FC<ThemedButtonProps> = ({
  variant = "primary",
  onPress,
  disabled = false,
  loading = false,
  children,
  className,
  ...props
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      className={clsx(
        "px-4 py-2 rounded-md items-center justify-center",
        variantStyles[variant],
        disabled && "opacity-50",
        className
      )}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          size='small'
          color={variant === "outline" ? "#4B5563" /* gray-700 */ : "#FFFFFF"}
        />
      ) : (
        <Text className={clsx("text-sm font-medium", textVariantStyles[variant])}>
          {children}
        </Text>
      )}
    </Pressable>
  )
}

export default ThemedButton
