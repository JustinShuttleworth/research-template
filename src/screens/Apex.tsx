import ThemedButton from "@components/themedButton"
import ThemedText from "@components/themedText"
import { useNavigation } from "@react-navigation/native"
import { useRouter } from "expo-router"
import { View } from "react-native"
import { useApp } from "src/context/appProvider"

export default function ApexScreen() {
  console.log("ApexScreen")
  const navigation = useNavigation()
  const router = useRouter()
  const { test } = useApp()
  return (
    <View>
      <ThemedText variant='title' className='text-xl pb-4'>
        Apex Screen
      </ThemedText>
      <ThemedText className='pb-4'>
        Apex screen is an example of a route that lives in the react-native
        navigation stack. This represents our current navigation pattern in Ice
        Breaker.
      </ThemedText>
      <ThemedButton onPress={() => navigation.navigate("VirtualLift")}>
        Navigate to Virtual Lift (Inside of React Navigation)
      </ThemedButton>
      <View className='p-2' />
      <ThemedButton variant='secondary' onPress={() => router.navigate("")}>
        Navigate to Home Screen (expo-router screen)
      </ThemedButton>

      <View className='border border-gray-300 rounded-md p-4 mt-8'>
        <ThemedText>
          This "{test}" value provided by AppProvider which is initialized in the
          root _layout.tsx file. This exemplifies the ability to nest
          react-navigation inside of expo-router and pull in context from parent
          routes.
        </ThemedText>
      </View>
    </View>
  )
}
