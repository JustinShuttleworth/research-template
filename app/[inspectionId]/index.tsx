import ThemedButton from "@components/themedButton"
import ThemedText from "@components/themedText"
import { useAppLocalSearchParams } from "@hooks/useAppLocalSearchParams"
import { useRouter } from "expo-router"

import { View } from "react-native"
import { useDetail } from "src/context/detailProvider"

export default function InspectionDetail() {
  const router = useRouter()
  const { inspectionId } = useAppLocalSearchParams()
  const { inspectionId: detailProviderInspectionId } = useDetail()

  return (
    <View>
      <ThemedText variant='title' className='pb-4'>
        Inspection Detail
      </ThemedText>
      <ThemedText>Inspection Id: {inspectionId}</ThemedText>
      <ThemedText className='pb-4'>
        Detail Provider Inspection Id: {detailProviderInspectionId}
      </ThemedText>

      <ThemedButton
        className='mb-4'
        onPress={() => router.navigate("1234/nav-stop-gap")}
      >
        Navigate to APEX (Inside of React Navigation)
      </ThemedButton>
      <ThemedButton variant='secondary' onPress={() => router.push("")}>
        Back Home
      </ThemedButton>
    </View>
  )
}
