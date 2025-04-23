import { View, Text, Pressable } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import "../global.css"; // Import global styles

export default function Details() {
  const { id, name, age } = useLocalSearchParams();
  const router = useRouter();
  return (
    <>
      <View className="flex-1 items-center justify-center bg-gray-200">
        <View className="w-full border-black mt-2 p-2 flex items-start">
          <Text className="text-3xl font-semibold text-black text-center ml-4">
            Name: {name}
          </Text>
        </View>
        <View className="w-full border-black mt-2 p-2 flex items-start">
          <Text className="text-3xl font-semibold text-black text-center ml-4">
            Age: {age}
          </Text>
        </View>
      </View>
      <View className="flex items-center justify-normal px-10 bg-gray-200">
        <Pressable onPress={() => router.back()}>
          <View className="w-80 bg-blue-400 rounded-lg border-2 border-black m-5 p-2 flex justify-end items-center">
            <Text className="text-3xl font-semibold text-white text-center">
              Go Back
            </Text>
          </View>
        </Pressable>
      </View>
    </>
  );
}
