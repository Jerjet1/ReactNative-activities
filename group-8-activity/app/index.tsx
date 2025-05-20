import { Text, View, Pressable, FlatList } from "react-native";
import React, { useState, useMemo, useCallback } from "react";
import CustomButton from "@/components/CustomButton";
import "../global.css";
export default function Index() {
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <CustomButton />
    </View>
  );
}
