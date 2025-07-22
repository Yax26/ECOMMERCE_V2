import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "./screens/Homepage";
import Searchpage from "./screens/Searchpage";
import Searchproducts from "./screens/Searchedproducts";
import { useState } from "react";
export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown: false }}>
        <stack.Screen name="home" component={Homepage}></stack.Screen>
        <stack.Screen name="search" component={Searchpage}></stack.Screen>
        <stack.Screen
          name="searchproducts"
          component={Searchproducts}
        ></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
