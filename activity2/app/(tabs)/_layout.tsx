import { View, Text } from "react-native";
import { Tabs, Stack } from "expo-router";
import "../../global.css";
import React from "react";

export default function TabLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#8EB1D9" },
        headerTitleStyle: { fontSize: 30, fontWeight: "bold" },
      }}
    >
      <Stack.Screen name="index" options={{ title: "HomePage" }} />
      <Stack.Screen name="Page-1" options={{ title: "Profile Page" }} />
      <Stack.Screen name="Page-3" options={{ title: "Profile Page" }} />
      <Stack.Screen name="Page-2" options={{ title: "Profile Page" }} />
      <Stack.Screen name="Page-4" options={{ title: "Profile Page" }} />
      <Stack.Screen name="Page-5" options={{ title: "Profile Page" }} />
    </Stack>
  );
}
