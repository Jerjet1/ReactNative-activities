import { useState } from "react";

export const useMood = () => {
  const [mood, setMood] = useState("happy");

  const toggleMood = () => {
    setMood((prev) => (prev === "happy" ? "sad" : "happy"));
  };

  return { mood, toggleMood };
};
