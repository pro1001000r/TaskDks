import React from "react";
import { StyleSheet, Text, View } from 'react-native';

import AuthScreen from "./screens/AuthScreen";
import MainScreen from "./screens/MainScreen";


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{ title: "Вход" }}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ title: "Главная", headerBackVisible: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
