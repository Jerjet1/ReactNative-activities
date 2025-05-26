import { View, Text, Image } from "react-native";
import React from "react";

export default function Page2() {
  return (
    <View className="flex-1 w-full">
      <Image
        source={require("@/assets/images/dragonball.jpg")}
        className="absolute w-[100%] h-[100%]"
      />
      <View className="flex items-center h-full">
        <View className="w-48 h-48 bg-white/50 flex items-center justify-center mt-10 rounded-full">
          <Image
            source={require("../../assets/images/noel.jpg")}
            className="w-44 h-44 rounded-full"
          />
        </View>
        <Text className="p-5 mt-5 font-bold text-4xl">Noel Batoctoy</Text>
        <View className="w-[26rem] h-[28rem] mt-2 gap-2">
          <View className="w-full bg-white/40 p-5 border border-black/30 flex flex-row gap-2 rounded-lg">
            <Text className="font-bold text-2xl">Date of Birth:</Text>
            <Text className="font-bold text-2xl">Unknown</Text>
          </View>
          <View className="w-full bg-white/40 p-5 border border-black/30 flex flex-row gap-2 rounded-lg">
            <Text className="font-bold text-2xl">Address: </Text>
            <Text className="font-bold text-2xl">Unknown</Text>
          </View>
          <View className="w-full bg-white/40 p-5 border border-black/30 flex flex-row gap-2 rounded-lg">
            <Text className="font-bold text-2xl">Civil Status:</Text>
            <Text className="font-bold text-2xl">Unknown</Text>
          </View>
          <View className="w-full bg-white/40 p-5 border border-black/30 flex flex-row gap-2 rounded-lg">
            <Text className="font-bold text-2xl">Mobile no:</Text>
            <Text className="font-bold text-2xl">Unknown</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
