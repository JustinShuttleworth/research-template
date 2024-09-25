import ThemedButton from "@components/themedButton"
import ThemedText from "@components/themedText"
import { useRouter } from "expo-router"
import { View } from "react-native"

export default function Platform() {
  const router = useRouter()
  return (
    <View>
      <ThemedText variant='title' className='pb-4'>
        Platform: Mobile
      </ThemedText>
      <ThemedText>
        You are on a mobile device, therefore you are seeing the default index.tsx
        component.
      </ThemedText>
      <ThemedButton onPress={() => router.push("")}>Return Home</ThemedButton>
    </View>
  )
}
