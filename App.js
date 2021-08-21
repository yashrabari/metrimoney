import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { Home, DetailsScreen } from './screens/';
import { StatusBar } from 'expo-status-bar';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent"
  }
}

const Stack = createStackNavigator();
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
const App = () => {

  return (
    <NavigationContainer theme={theme}>
      <StatusBar style='auto' />
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Home'}
      >
        {/* Tabs */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />

        {/* Screens */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;