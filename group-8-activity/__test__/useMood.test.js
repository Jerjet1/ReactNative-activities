import { renderHook, act } from "@testing-library/react-native";
import { useMood } from "../src/hooks/useMood";

describe("useMood", () => {
  it("toggles between happy and sad", () => {
    const { result } = renderHook(() => useMood());
    expect(result.current.mood).toBe("happy");
    act(() => {
      result.current.toggleMood();
    });
    expect(result.current.mood).toBe("sad");
    act(() => {
      result.current.toggleMood();
    });
    expect(result.current.mood).toBe("happy");
  });
});
