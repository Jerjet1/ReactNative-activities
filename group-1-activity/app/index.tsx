import { Text, View, Pressable } from "react-native";
import { useState, useEffect } from "react";
import "../global.css";
export default function Index() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [color1, setColor1] = useState("text-black");
  const [color2, setColor2] = useState("text-black");

  useEffect(() => {
    console.log(`${number1}, ${number2}, ${color1}, ${color2}`);
  }, [number1, number2, color1, color2]);

  function roll() {
    const value1 = Math.floor(Math.random() * 6) + 1;
    const value2 = Math.floor(Math.random() * 6) + 1;

    setNumber1(value1);
    setNumber2(value2);
    setColor1(randomColor(value1));
    setColor2(randomColor(value2));
  }

  const randomColor = (value: number) =>
    [
      "text-red-700",
      "text-red-400",
      "text-blue-700",
      "text-blue-400",
      "text-green-700",
      "text-green-400",
    ][value - 1] || "text-black";

  return (
    <View className="flex-1 justify-center items-center gap-5 bg-slate-100">
      <Text className={`text-5xl ${color1}`}>{number1}</Text>
      <Text className={`text-5xl ${color2}`}>{number2}</Text>
      <Pressable className="bg-gray-600 p-5 rounded-3xl" onPress={roll}>
        <Text className="text-5xl text-white">Roll daw</Text>
      </Pressable>
    </View>
  );
}
