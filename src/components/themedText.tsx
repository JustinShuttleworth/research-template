// components/ThemedText.tsx

import React from "react"
import { Text, TextProps } from "react-native"
import clsx from "clsx"

type Variant = "title" | "subtitle" | "caption" | "default"

interface ThemedTextProps extends TextProps {
  variant?: Variant
  children: React.ReactNode
  className?: string
}

const variantStyles: Record<Variant, string> = {
  title:
    "text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100",
  subtitle:
    "text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300",
  caption: "text-sm md:text-base lg:text-lg text-gray-500 dark:text-gray-400",
  default: "text-base md:text-lg lg:text-xl text-gray-800 dark:text-gray-200"
}
const ThemedText: React.FC<ThemedTextProps> = ({
  variant = "default",
  children,
  className,
  ...props
}) => {
  return (
    <Text
      className={clsx(
        "font-sans", // Base font family
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </Text>
  )
}

export default ThemedText
