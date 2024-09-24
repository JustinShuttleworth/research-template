// app/_layout.tsx
import { useAppLocalSearchParams } from "@hooks/useAppLocalSearchParams"
import { Slot } from "expo-router"
import { DetailProvider } from "src/context/detailProvider"

export default function DetailLayout() {
  const { inspectionId } = useAppLocalSearchParams() // useLocalSearchParams pulls from the dynamic routes defined by the file structure [inspectionId]/index.tsx

  return (
    <DetailProvider inspectionId={Number(inspectionId)}>
      <Slot />
    </DetailProvider>
  )
}
