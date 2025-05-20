import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useMood } from "../src/hooks/useMood";
const CustomButton = () => {
  const { mood, toggleMood } = useMood();
  return (
    <View className="justify-center items-center p-5 rounded-xl w-[100%]">
      <Text
        testID="mood-text"
        className="text-5xl font-semibold text-center px-24 py-2">
        {mood === "happy" ? "happy 😁" : "sad 😭"}
      </Text>
      <Text
        testID="mood-test"
        className="text-4xl font-medium text-center py-10">
        {mood === "happy" ? "\\^o^/" : "＞﹏＜"}
      </Text>
      <TouchableOpacity
        className="p-5 bg-blue-400 rounded-xl border"
        onPress={toggleMood}>
        <Text>Change Mood na</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
