import { Text, View, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import "../global.css"; // Import global styles

type Friend = {
  id: number;
  name: string;
  age: number;
};

export default function Index() {
  const router = useRouter();
  const [friends, setFriends] = useState<Friend[]>([]);
  const { newFriend, updatedFriends } = useLocalSearchParams(); // Accept updated list of friends

  useEffect(() => {
    if (newFriend) {
      const friendObj = JSON.parse(newFriend as string);
      setFriends((prev) => [...prev, friendObj]);
    }

    if (updatedFriends) {
      setFriends(JSON.parse(updatedFriends as string)); // Use the updated friends list if available
    }
  }, [newFriend, updatedFriends]);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-5xl p-10 font-semibold bg-slate-400 text-white w-full text-center">
        Friend List
      </Text>
      <View className="flex-1 items-center justify-normal px-10 mt-2">
        {/* rendering friends if not empty */}
        {friends.length > 0 ? (
          friends.map((friend) => (
            <TouchableOpacity
              key={friend.id}
              onPress={() =>
                router.push({
                  pathname: "/Details",
                  params: {
                    id: friend.id.toString(),
                    name: friend.name,
                    age: friend.age.toString(),
                  },
                })
              }
            >
              <View className="w-80 bg-blue-200 rounded-lg border-2 border-black mt-5 p-2">
                <Text className="text-3xl font-semibold text-black text-center">
                  {friend.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <View className="flex-1 items-center justify-center">
            <Text className="text-5xl font-bold text-gray-300 ">
              list is empty
            </Text>
          </View>
        )}
      </View>

      {/* add friend button */}
      <TouchableOpacity
        onPress={() => {
          router.push({
            pathname: "/AddFriend",
            params: {
              lastId: friends.length.toString(),
              currentFriends: JSON.stringify(friends),
            }, // Send current friends list
          });
        }}
      >
        <View className="bg-blue-400 p-4 rounded-xl m-5 px-24 border-2 border-black">
          <Text className="text-2xl font-semibold text-white">Add Friend</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
