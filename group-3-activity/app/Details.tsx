import { View, Text, Pressable, Alert, ToastAndroid } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import "../global.css";
import { API_URL } from "../src/config";
import axios from "axios";
export default function Details() {
  const { id, name, age, grade } = useLocalSearchParams();
  const router = useRouter();
  const handleDelete = () => {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this Data?",
      [
        {
          text: "Confirm",
          onPress: () => {
            axios
              .delete(`${API_URL}/${id}`)
              .then((response) => {
                console.log("Student deleted successfully:", response.data);
                router.replace("/");
              })
              .catch((error) => {
                console.error("Error deleting student:", error);
              });
          },
          style: "destructive",
        },
        {
          text: "Cancel",
          onPress: () => {
            console.log("Cancel Pressed");
            ToastAndroid.show("Cancelled", ToastAndroid.SHORT);
          },
          style: "cancel",
        },
      ]
    );
  };
  return (
    <>
      <View className="flex-1 items-center justify-center bg-white">
        <View className="w-full border-black mt-2 p-2 flex items-start">
          <Text className="text-3xl font-semibold text-black text-center ml-4">
            id: {id}
          </Text>
        </View>
        <View className="w-full border-black mt-2 p-2 flex items-start">
          <Text className="text-3xl font-semibold text-black text-center ml-4">
            Name: {name}
          </Text>
        </View>
        <View className="w-full border-black mt-2 p-2 flex items-start">
          <Text className="text-3xl font-semibold text-black text-center ml-4">
            age: {age}
          </Text>
        </View>
        <View className="w-full border-black mt-2 p-2 flex items-start">
          <Text className="text-3xl font-semibold text-black text-center ml-4">
            grade: {grade}
          </Text>
        </View>
      </View>
      <View className="flex items-center justify-center bg-white">
        <Pressable
          onPress={handleDelete}
          className="p-2 bg-red-600 rounded-lg border-2 border-black m-2 w-80 items-center justify-center"
        >
          <Text className="text-2xl font-semibold text-white">Delete</Text>
        </Pressable>
      </View>
    </>
  );
}
