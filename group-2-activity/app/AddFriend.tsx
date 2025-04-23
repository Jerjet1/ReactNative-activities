import { useRouter, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { View, TextInput, Button, ToastAndroid } from "react-native";
import "../global.css"; // Import global styles

export default function AddFriend() {
  const router = useRouter();
  const { lastId, currentFriends } = useLocalSearchParams(); // Get current friends list
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleAdd = () => {
    if (name.trim() === "" || age.trim() === "") {
      ToastAndroid.show("Please fill in all fields", ToastAndroid.SHORT);
      return;
    }
    const newFriend = {
      id: Number(lastId) + 1,
      name,
      age: Number(age),
    };

    const updatedFriends = [...JSON.parse(currentFriends as string), newFriend];
    ToastAndroid.show("Submitted Successfully!", ToastAndroid.SHORT);

    // Navigate back to Index and pass the updated friends list
    router.replace({
      pathname: "/",
      params: {
        updatedFriends: JSON.stringify(updatedFriends),
      },
    });
  };

  return (
    <View style={{ padding: 20, flex: 1, justifyContent: "center" }}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={{ borderBottomWidth: 1, marginBottom: 5 }}
      />
      <TextInput
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
}
