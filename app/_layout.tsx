// app/_layout.tsx
import { Slot } from "expo-router"
import "../global.css"
import { View } from "react-native"
import { AppProvider } from "src/context/appProvider"

export default function RootLayout() {
  return (
    // <AuthProvider>  use layouts to wrap the directory and it's children in a provider
    <AppProvider>
      <View className='flex-1 p-4 pt-16 md:p-8 lg:p-12 dark:bg-zinc-900'>
        <Slot />
      </View>
    </AppProvider>
    // </AuthProvider>
  )
}
