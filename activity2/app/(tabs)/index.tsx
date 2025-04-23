import { Text, View, Alert, Pressable } from "react-native";
import { useRouter } from "expo-router";
import "../../global.css";
import { Link } from "expo-router";
export default function Index() {
  const router = useRouter();
  const alertButton = (name, path) => {
    Alert.alert("Alert", `Do you wanna visit ${name} page?`, [
      { text: "Cancel" },
      { text: "Okay", onPress: () => router.push(path) },
    ]);
  };
  return (
    <View className="flex-1 w-full bg-blue-400">
      <View className="flex items-center justify-start p-20">
        <Text className="text-4xl font-bold">Classmates</Text>
      </View>
      <View className="flex items-center justify-start p-5 gap-5 flex-col h-full">
        <View className="flex items-center justify-center w-full border border-white/20 bg-white/30 backdrop-blur-lg p-5 rounded-lg">
          <Pressable onPress={() => alertButton("Uriel", "/Page-1")}>
            <Text className="underline text-2xl font-semibold">
              Uriel Jumao-as
            </Text>
          </Pressable>
        </View>
        <View className="flex items-center justify-center w-full border border-white/20 bg-white/30 backdrop-blur-lg p-5 rounded-lg">
          <Pressable onPress={() => alertButton("Noel", "/Page-2")}>
            <Text className="underline text-2xl font-semibold">
              Noel Batoctoy
            </Text>
          </Pressable>
        </View>
        <View className="flex items-center justify-center w-full border border-white/20 bg-white/30 backdrop-blur-lg p-5 rounded-lg">
          <Pressable onPress={() => alertButton("Kobe", "/Page-3")}>
            <Text className="underline text-2xl font-semibold">
              Kobe Mangubat
            </Text>
          </Pressable>
        </View>
        <View className="flex items-center justify-center w-full border border-white/20 bg-white/30 backdrop-blur-lg p-5 rounded-lg">
          <Pressable onPress={() => alertButton("Jay", "/Page-4")}>
            <Text className="underline text-2xl font-semibold">
              Joey Jay Arcipe
            </Text>
          </Pressable>
        </View>
        <View className="flex items-center justify-center w-full border border-white/20 bg-white/30 backdrop-blur-lg p-5 rounded-lg">
          <Pressable onPress={() => alertButton("Rhainer", "/Page-5")}>
            <Text className="underline text-2xl font-semibold">
              Rhainer Matheuz Mata
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
