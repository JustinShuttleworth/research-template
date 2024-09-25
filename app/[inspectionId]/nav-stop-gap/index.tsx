// app/react-navigation/index.js
import React from "react"
import { NavigationContainer } from "@react-navigation/native"

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ApexScreen from "src/screens/Apex"
import VirtualLiftScreen from "src/screens/VirtualLift"
import { View } from "react-native"

const Stack = createNativeStackNavigator()

const ComponentWapper = ({ children }) => {
  return <View className='flex-1 dark:bg-zinc-900'>{children}</View>
}

const _ApexScreen = () => {
  return (
    <ComponentWapper>
      <ApexScreen />
    </ComponentWapper>
  )
}

const _VirtualLiftScreen = () => {
  return (
    <ComponentWapper>
      <VirtualLiftScreen />
    </ComponentWapper>
  )
}

export default function ReactNavigationWrapper() {
  return (
    // <View className='flex-1 md:p-8 lg:p-12'>
    // {/* // independent is a prop that allows the navigation container to be used in a non-root context.  */}
    // {/* independent drops the styles which is why the parent container is provided here. */}
    <NavigationContainer independent>
      <Stack.Navigator initialRouteName='Apex'>
        <Stack.Screen
          name='Apex'
          component={_ApexScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='VirtualLift'
          component={_VirtualLiftScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // </View>
  )
}
