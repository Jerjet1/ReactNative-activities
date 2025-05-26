import { Text, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "@/global.css";

type Theme = "light" | "dark" | "blue";
type Language = "en" | "es" | "ja";

const backgroundTheme: Record<Theme, string> = {
  light: "bg-white",
  dark: "bg-gray1000",
  blue: "bg-blue-400",
};

export default function Index() {
  const [selectedLanguage, setselectedLanguage] = useState<Language>("en");
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <View className={`flex-1 ${backgroundTheme[theme]}`}>
      <View className="flex items-end justify-end">
        {/* Language Changer */}
        <View className="w-[200px] bg-white border rounded-xl mr-2 mt-2">
          <RNPickerSelect
            onValueChange={(value) => {
              setselectedLanguage(value);
              i18n.changeLanguage(value);
            }}
            items={[
              { label: "English", value: "en" },
              { label: "Español", value: "es" },
              { label: "日本語", value: "ja" },
            ]}
            placeholder={{ label: "Select Language", value: null }}
            style={pickerSelectStyles}
          />
        </View>
        {/* theme changer */}
        <View className="bg-white border rounded-xl mr-2 mt-2">
          <Picker
            selectedValue={theme}
            onValueChange={(itemValue) => setTheme(itemValue)}
            style={{ width: 200, color: "black" }}
            dropdownIconColor="dark"
            placeholder="Select Theme">
            {/* <Picker.Item label="Select Theme" value="" enabled={false}/> */}
            <Picker.Item label="Light" value="light" />
            <Picker.Item label="Dark" value="dark" />
            <Picker.Item label="Blue" value="blue" />
          </Picker>
        </View>
      </View>
      <View className="flex-1 justify-center items-center gap-4 mb-20">
        <Text
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } text-2xl font-semibold`}>
          Theme: {theme}
        </Text>
        <Text
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } text-2xl font-semibold`}>
          Language: {selectedLanguage}
        </Text>
        <Text
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } text-xl font-semibold`}>
          {t("greetings")}
        </Text>
      </View>
    </View>
  );
}

const pickerSelectStyles = {
  inputAndroid: {
    borderColor: "gray",
    color: "black",
  },
  placeholder: {
    color: "black",
  },
};
