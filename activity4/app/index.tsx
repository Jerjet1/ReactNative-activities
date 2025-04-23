import {
  Text,
  View,
  Pressable,
  TextInput,
  Alert,
  ToastAndroid,
} from "react-native";
import "../global.css";
import { useState } from "react";

export default function Index() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    Alert.alert(
      "Confirm Submission",
      `Your Name is ${name || "[Not provided]"} and you are from ${
        course || "[Not provided]"
      }.`,
      [
        {
          text: "OK",
          onPress: () => {
            ToastAndroid.show("Submitted Successfully!", ToastAndroid.SHORT);
            setSubmitted(true);
          },
        },
      ]
    );
  };

  return (
    <View className="flex-1 w-full bg-gray-200 items-center justify-center">
      <View className="flex flex-row items-center w-full justify-center gap-5">
        <Text className="text-2xl font-bold">Name:</Text>
        <TextInput
          className="w-52 h-13 bg-blue-300 rounded-lg p-2"
          value={name}
          onChangeText={setName}
          placeholder="Enter Name"
        />
      </View>
      <View className="flex flex-row items-center w-full justify-center p-5 gap-5">
        <Text className="text-2xl font-bold">Course:</Text>
        <TextInput
          className="w-52 h-13 bg-blue-300 rounded-lg p-2"
          value={course}
          onChangeText={setCourse}
          placeholder="Enter Course"
        />
      </View>
      <Pressable
        className="bg-green-600 p-5 px-10 rounded-full"
        onPress={handleSubmit}
      >
        <Text className="font-bold text-2xl text-white">Submit</Text>
      </Pressable>
      <View className="w-96 h-52 flex items-center justify-center p-5 mt-5">
        <Text className="text-lg font-semibold">
          Your name is {submitted ? name || "[Not provided]" : "________"} and
          you are from {submitted ? course || "[Not provided]" : "________"}.
        </Text>
      </View>
    </View>
  );
}
