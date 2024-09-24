// app/_layout.tsx
import { Slot } from "expo-router"
import "../global.css"

export default function RootLayout() {
  return (
    // <AuthProvider>  use layouts to wrap the directory and it's children in a provider
      <Slot />
    // </AuthProvider>
  )
}
