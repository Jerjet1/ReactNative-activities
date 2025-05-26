import React, { useState } from "react";
import { Dimensions, Text, View, Pressable } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import "../global.css";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.25;

const SUITS = ["♠", "♥", "♦", "♣"];
const RANKS = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

const generateDeck = () =>
  SUITS.flatMap((suit) =>
    RANKS.map((rank) => ({
      id: `${rank}${suit}`,
      rank,
      suit,
    }))
  );

const shuffledDeck = () => [...generateDeck()].sort(() => Math.random() - 0.5);

const Card = ({
  rank,
  suit,
  onSwipeOff,
}: {
  rank: string;
  suit: string;
  onSwipeOff: () => void;
}) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const rotateZ = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = event.translationX;
      translateY.value = event.translationY;
      rotateZ.value = event.translationX / 20;
    })
    .onEnd(() => {
      if (Math.abs(translateX.value) > SWIPE_THRESHOLD) {
        translateX.value = withTiming(
          translateX.value > 0 ? SCREEN_WIDTH : -SCREEN_WIDTH,
          {},
          () => runOnJS(onSwipeOff)()
        );
      } else {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
        rotateZ.value = withSpring(0);
      }
    });

  const isRed = suit === "♥" || suit === "♦";

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { rotateZ: `${rotateZ.value}deg` },
    ],
  }));

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View
        className="w-[220px] h-[320px] bg-white rounded-2xl justify-center items-center shadow-lg"
        style={animatedStyle}>
        <Text
          className={`text-4xl font-bold ${
            isRed ? "text-red-600" : "text-black"
          }`}>
          {rank}
        </Text>
        <Text
          className={`text-4xl mt-10 ${
            isRed ? "text-red-600 " : "text-black"
          }`}>
          {suit}
        </Text>
      </Animated.View>
    </GestureDetector>
  );
};

export default function Index() {
  const [deck, setDeck] = useState(shuffledDeck());
  const [index, setIndex] = useState(0);

  const handleSwipeOff = () => {
    setIndex((prev) => prev + 1);
  };

  const resetDeck = () => {
    setDeck(shuffledDeck());
    setIndex(0);
  };

  const card = deck[index];

  return (
    <View className="flex-1 justify-center items-center bg-gray-200">
      <View className="flex justify-center items-center mt-40">
        <GestureHandlerRootView>
          {card ? (
            <Card
              key={card.id}
              rank={card.rank}
              suit={card.suit}
              onSwipeOff={handleSwipeOff}
            />
          ) : (
            <Text className="color-white text-[40px] italic mb-20">
              Deck finished
            </Text>
          )}
        </GestureHandlerRootView>
        <View className="h-[60px] w-[200px] p-5 flex justify-center items-center bg-slate-500 rounded-2xl mb-56">
          <Pressable onPress={resetDeck}>
            <Text className="text-2xl font-bold text-white">Reset Deck</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
