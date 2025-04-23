import { View, Text } from "react-native";
import { Link, Stack } from "expo-router";
import "../global.css";
import React from "react";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Page not Found" }} />
      <View className="flex-1 bg-gray-500 items-center justify-center">
        <Link href="/" className="text-lg underline text-gray-800">
          Go back to HomeScreen
        </Link>
      </View>
    </>
  );
}
