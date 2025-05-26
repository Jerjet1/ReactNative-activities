import { Text, View, FlatList, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { API_URL } from "../src/config";
import axios from "axios";
import { useEffect, useState } from "react";
import "../global.css";

type Student = {
  id: number;
  name: string;
  age: number;
  grade: string;
};

export default function Index() {
  const [students, setStudents] = useState<Student[]>([]);
  const router = useRouter();

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setStudents(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
      });
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-5xl p-10 font-semibold bg-slate-400 text-white w-full text-center">
        List of Students
      </Text>
      <View className="flex-1 items-center justify-normal px-10 mt-2">
        {students.length > 0 ? (
          <FlatList
            data={students}
            keyExtractor={(student) => student.name}
            renderItem={({ item }) => (
              <Pressable
                className="w-80 bg-blue-200 rounded-lg border-2 border-black mt-5 p-2"
                onPress={() =>
                  router.push({
                    pathname: "/Details",
                    params: {
                      id: item.id.toString(),
                      name: item.name,
                      age: item.age.toString(),
                      grade: item.grade,
                    },
                  })
                }>
                <Text>{item.name}</Text>
              </Pressable>
            )}
          />
        ) : (
          <View className="flex-1 items-center justify-center">
            <Text className="text-3xl font-bold text-gray-300 ">
              Students list is empty
            </Text>
          </View>
        )}
      </View>
      <Pressable onPress={() => router.push("/addStudents")}>
        <View className="bg-blue-400 p-4 rounded-xl m-5 px-24 border-2 border-black">
          <Text className="text-2xl font-semibold text-white">Add Student</Text>
        </View>
      </Pressable>
    </View>
  );
}
