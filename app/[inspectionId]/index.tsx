import ThemedButton from "@components/themedButton"
import { useAppLocalSearchParams } from "@hooks/useAppLocalSearchParams"
import { Link } from "expo-router"

import { Text, View } from "react-native"
import { useDetail } from "src/context/detailProvider"

export default function InspectionDetail() {
  const { inspectionId } = useAppLocalSearchParams()
  const { inspectionId: detailProviderInspectionId } = useDetail()

  return (
    <View className='flex-1 items-center justify-center'>
      <Text>Inspection Id: {inspectionId}</Text>
      <Text>Detail Provider Inspection Id: {detailProviderInspectionId}</Text>
      <Link href={"/"} asChild>
        <ThemedButton>Back Home</ThemedButton>
      </Link>
    </View>
  )
}
