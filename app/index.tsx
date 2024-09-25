import ThemedButton from "@components/themedButton"
import ThemedText from "@components/themedText"

import { useRouter } from "expo-router"
import { Text, View } from "react-native"

export default function App() {
  const router = useRouter()

  return (
    <View>
      {/* Main Title */}
      <ThemedText variant='title'>Home</ThemedText>
      <View className='border border-gray-300 rounded-md p-4 mt-8'>
        <ThemedText>
          Blue buttons represent routes inside of expo-router while orange represent
          routes inside of a react-navigation stack.
        </ThemedText>
      </View>
      {/* Section: Dynamic Routing Example */}
      <View className='pt-4'>
        <ThemedText>
          Explore dynamic routes and integration between react-navigation and
          expo-router
        </ThemedText>
        <ThemedButton variant='secondary' onPress={() => router.push("/1234")}>
          Go to Detail Page (ID: 1234)
        </ThemedButton>
      </View>

      {/* Section: Platform-Specific Screens */}
      <ThemedText className='pt-4'>
        Platform-specific screens are supported using naming conventions (e.g.,
        screen.web.tsx, screen.ios.tsx). The default screen.tsx is always required.
      </ThemedText>
      <ThemedButton variant='secondary' onPress={() => router.push("/platform")}>
        View Platform-Specific Screen
      </ThemedButton>
    </View>
  )
}
