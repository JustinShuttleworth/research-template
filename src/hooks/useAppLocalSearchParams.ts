// the hook to use local search params for the app

import { useLocalSearchParams } from "expo-router"

type AppSearchParams = {
  inspectionId: string
}

export function useAppLocalSearchParams() {
  return useLocalSearchParams<AppSearchParams>()
}
