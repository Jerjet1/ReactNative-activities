import { View, Text, Pressable, ToastAndroid, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { capitalizeWords } from "../src/util";
import { API_URL } from "../src/config";
import axios from "axios";
import React from "react";
import "../global.css";
export default function addStudents() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [grade, setGrade] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (name.trim() === "" || age.trim() === "" || grade.trim() === "") {
      ToastAndroid.show("Please fill in all fields", ToastAndroid.SHORT);
      return;
    }
    const newStudent = {
      name: capitalizeWords(name),
      age: Number(age),
      grade: capitalizeWords(grade),
    };
    axios
      .post(API_URL, newStudent)
      .then((response) => {
        console.log("Student added successfully:", response.data);
        ToastAndroid.show("Submitted Successfully!", ToastAndroid.SHORT);
        router.replace("/");
      })
      .catch((error) => {
        console.error("Error adding student:", error);
      });
    console.log(newStudent);
  };
  return (
    <>
      <View className="flex-1 items-center justify-center bg-white">
        <View className="border-2 border-black rounded-lg p-2 w-80 bg-blue-200 m-2">
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            maxLength={50}
          />
        </View>
        <View className="border-2 border-black rounded-lg p-2 w-80 bg-blue-200 m-2">
          <TextInput
            placeholder="age"
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
            maxLength={2}
          />
        </View>
        <View className="border-2 border-black rounded-lg p-2 w-80 bg-blue-200 m-2">
          <TextInput
            placeholder="grade"
            value={grade}
            onChangeText={setGrade}
            maxLength={1}
          />
        </View>
      </View>
      <View className="flex items-center justify-center bg-white">
        <Pressable
          onPress={handleSubmit}
          className="p-2 bg-green-600 rounded-lg border-2 border-black m-2 w-80 items-center justify-center"
        >
          <Text className="text-2xl font-semibold text-white">Confirm</Text>
        </Pressable>
      </View>
    </>
  );
}
