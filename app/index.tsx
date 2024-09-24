import ThemedButton from "@components/themedButton"
import { Link } from "expo-router"
import { StyleSheet, Text, View } from "react-native"

export default function App() {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-blue-800 bg-inherit mb-4'>Styling just works! 🎉</Text>
      <Link href='/1234' asChild>
        <ThemedButton variant='secondary' onPress={() => console.log("Hello World")}>
          Themed Button
        </ThemedButton>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})
