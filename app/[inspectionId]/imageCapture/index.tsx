import { useAppLocalSearchParams } from "@hooks/useAppLocalSearchParams"

import { Text } from "react-native"

export default function ImageCapture() {
  const { inspectionId } = useAppLocalSearchParams()  // we can still pull in the inspectionId from the dynamic route since we are in the [inspectionId] directory

  return <Text>Image Capture Screen: {inspectionId}</Text>
}
