import {
  Text,
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ToastAndroid,
} from "react-native";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../global.css";

const schema = yup.object({
  email: yup.string().email("Invalid Email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password Must be atleast 6 characters")
    .required("Password is required"),
});

export default function Index() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });
  const onSubmit = (data: any) => {
    Keyboard.dismiss();
    const { email, password } = data;
    if (email === "hello@mail.com" && password === "123456") {
      ToastAndroid.show("Login Successful", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("Invalid email or password", ToastAndroid.SHORT);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
      style={{ backgroundColor: "#f8f8f8" }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="flex-1 items-center justify-center bg-gray-400">
          <View className="w-full max-w-sm p-4 bg-gray-50 rounded-lg shadow-md flex justify-center items-center">
            <Text className="text-3xl font-bold text-black mt-5">
              Login Form
            </Text>
            <View className="w-full max-w-sm p-4 bg-white rounded-lg mt-5 shadow-md">
              <Text className="text-lg font-semibold text-gray-700">Email</Text>
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                  <>
                    <TextInput
                      className="mt-2 p-2 border border-gray-300 rounded"
                      placeholder="sample@mail.com"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      keyboardType="email-address"
                      autoCapitalize="none"
                    />
                    {errors.email && (
                      <Text className="text-red-600">
                        {errors.email.message}
                      </Text>
                    )}
                  </>
                )}
              />
              <Text className="mt-4 text-lg font-semibold text-gray-700">
                Password
              </Text>
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                  <>
                    <TextInput
                      className="mt-2 p-2 border border-gray-300 rounded"
                      placeholder="Secreto para bibo"
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      secureTextEntry
                    />
                    {errors.password && (
                      <Text className="text-red-600">
                        {errors.password.message}
                      </Text>
                    )}
                  </>
                )}
              />
              <Pressable onPress={handleSubmit(onSubmit)}>
                <Text className="mt-4 p-2 bg-blue-500 text-white text-center rounded">
                  Login
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
