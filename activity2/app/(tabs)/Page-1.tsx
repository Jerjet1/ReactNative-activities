import { View, Text, Image } from "react-native";
import React from "react";

export default function Page1() {
  return (
    <View className="flex-1 w-full">
      <Image
        source={require("@/assets/images/dragonball.jpg")}
        className="absolute w-[100%] h-[100%]"
      />
      <View className="flex items-center h-full">
        <View className="w-48 h-48 bg-white/50 flex items-center justify-center rounded-full mt-10">
          <Image
            source={require("../../assets/images/image-2.png")}
            className="w-44 h-44 rounded-full"
          />
        </View>
        <Text className="p-5 mt-5 font-bold text-4xl">Uriel Jumao-as</Text>
        <View className="w-[26rem] h-[28rem] mt-2 gap-2">
          <View className="w-full bg-white/40 p-5 border border-black/30 flex flex-row gap-2 rounded-lg">
            <Text className="font-bold text-2xl">Date of Birth:</Text>
            <Text className="font-bold text-2xl">December 05, 2004</Text>
          </View>
          <View className="w-full bg-white/40 p-5 border border-black/30 flex flex-row gap-2 rounded-lg">
            <Text className="font-bold text-2xl">Address: </Text>
            <Text className="font-bold text-2xl">Lapu-Lapu</Text>
          </View>
          <View className="w-full bg-white/40 p-5 border border-black/30 flex flex-row gap-2 rounded-lg">
            <Text className="font-bold text-2xl">Civil Status:</Text>
            <Text className="font-bold text-2xl">Single</Text>
          </View>
          <View className="w-full bg-white/40 p-5 border border-black/30 flex flex-row gap-2 rounded-lg">
            <Text className="font-bold text-2xl">Mobile no:</Text>
            <Text className="font-bold text-2xl">09123456789</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
