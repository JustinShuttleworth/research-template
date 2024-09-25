import ThemedButton from "@components/themedButton"
import ThemedText from "@components/themedText"
import { useNavigation } from "@react-navigation/native"
import { useRouter } from "expo-router"
import { View } from "react-native"

export default function VirtualLiftScreen() {
  const router = useRouter()
  const navigation = useNavigation()

  return (
    <View>
      {/* Title */}
      <ThemedText variant='title' className='text-xl pb-4'>
        Virtual Lift Screen
      </ThemedText>

      {/* Description */}
      <ThemedText className='pb-4'>
        Virtual Lift screen is an example of a route that lives in the React Native
        navigation stack. This represents our current navigation pattern in Ice
        Breaker.
      </ThemedText>

      {/* Button: Navigate to Apex */}
      <ThemedButton onPress={() => navigation.navigate("Apex")}>
        Navigate to Apex (Inside of React Navigation)
      </ThemedButton>

      <View className='p-2' />

      {/* Button: Navigate to Home Screen */}
      <ThemedButton variant='secondary' onPress={() => router.push("")}>
        Navigate to Home Screen (expo-router screen)
      </ThemedButton>
    </View>
  )
}
