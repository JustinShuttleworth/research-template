// app/react-navigation/index.js
import React from "react"
import { NavigationContainer } from "@react-navigation/native"

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ApexScreen from "src/screens/Apex"
import VirtualLiftScreen from "src/screens/VirtualLift"
import { View } from "react-native"

// Initializes a native stack navigator, enabling stack-based navigation (e.g., push/pop screens).
const Stack = createNativeStackNavigator()

// A higher-order component designed to provide base container styling to the react-navigation screens.
// @ts-ignore
const withStyles = Component => props =>
  (
    <View className='flex-1 dark:bg-zinc-900'>
      <Component {...props} />
    </View>
  )

// This navigation wrapper represents Ice Breakers current navigation structure.
export default function ReactNavigationWrapper() {
  return (
    // The "independent" param results in nested screens not inheriting the parent styling.
    <NavigationContainer independent>
      <Stack.Navigator initialRouteName='Apex'>
        <Stack.Screen
          name='Apex'
          component={withStyles(ApexScreen)}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='VirtualLift'
          component={withStyles(VirtualLiftScreen)}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
