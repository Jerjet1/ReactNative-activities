import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CustomButton from "../components/CustomButton";

describe("CustomButton", () => {
  it("display and toggles mood correctly", () => {
    const { getByTestId, getByText } = render(<CustomButton />);
    const text = getByTestId("mood-text");
    expect(text.props.children).toContain("😄");
    const button = getByText("Toggle Mood");
    fireEvent.press(button);
    expect(getByTestId("mood-text").props.children).toContain("😢");
  });
});
