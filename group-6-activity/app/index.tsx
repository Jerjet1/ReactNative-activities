import {
  Text,
  View,
  Pressable,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef, useCallback } from "react";
import {
  Camera,
  CameraType,
  CameraView,
  useCameraPermissions,
} from "expo-camera";
import * as Location from "expo-location";
import Icon from "@expo/vector-icons/FontAwesome5";
import PhotoPreviewSection from "@/components/PhotoPreviewSection";
import "../global.css";

export default function Index() {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, setPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState<any>(null);
  const cameraRef = useRef<CameraView | null>(null);
  const [location, setLocation] = useState("");

  const handleRequestPermission = async () => {
    const result = await setPermission();
    if (!result.granted) {
      ToastAndroid.show("Camera permission denied", ToastAndroid.SHORT);
    }
  };

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-center">
          We need your permission to show the camera
        </Text>
        <Pressable
          onPress={handleRequestPermission}
          className="w-[120px] h-[50px] bg-blue-400 justify-center items-center">
          <Text>grant permission</Text>
        </Pressable>
      </View>
    );
  }

  const toggleCamera = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  };

  const handleTakePhoto = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        ToastAndroid.show("Location permission denied", ToastAndroid.SHORT);
        return;
      }
      const [photo, currentLocation] = await Promise.all([
        cameraRef.current?.takePictureAsync({
          quality: 0.5,
          base64: false,
          exif: false,
        }),
        Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Highest,
        }),
      ]);
      const [address] = await Location.reverseGeocodeAsync(
        currentLocation.coords
      );
      const localString = `${address.formattedAddress}`;
      setLocation(localString);

      setPhoto(photo);
    } catch (err) {
      console.log("Error taking photo or getting location", err);
      ToastAndroid.show(
        "Failed to take photo or get location",
        ToastAndroid.SHORT
      );
    }
  };

  // const handleTakePhoto = async () => {
  //   if (cameraRef.current) {
  //     try{
  //       const {status} = await Location.requestForegroundPermissionsAsync();
  //       if(status !== 'granted'){
  //         ToastAndroid.show("Location permission denied", ToastAndroid.SHORT);
  //         return
  //       }

  //       const currentLocation = await Location.getCurrentPositionAsync({});
  //       setLocation({
  //         latitude: currentLocation.coords.latitude,
  //         longitude: currentLocation.coords.longitude
  //       })

  //       const options = {
  //           quality: 1,
  //           base64: true,
  //           exif: false,
  //       };
  //       const takedPhoto = await cameraRef.current.takePictureAsync(options);

  //       setPhoto(takedPhoto);
  //     } catch(error){
  //       console.log(error)
  //       ToastAndroid.show("Failed to take photo or get location", ToastAndroid.SHORT);
  //     }
  //   }
  // };

  const handleRetakePhoto = () => {
    setPhoto(null), setLocation("");
  };

  if (photo && location)
    return (
      <PhotoPreviewSection
        photo={photo}
        location={location}
        handleRetakePhoto={handleRetakePhoto}
      />
    );

  return (
    <View className="flex-1 justify-center bg-gray-200">
      <CameraView facing={facing} ref={cameraRef} className="flex-1">
        <View className="flex-1 flex-row bg-transparent m-80" />
      </CameraView>
      <View className="flex flex-row justify-center items-center mt-10 gap-10">
        <TouchableOpacity
          className="bg-white rounded-full border w-[60px] h-[60px] items-center justify-center"
          onPress={toggleCamera}>
          <Icon name="retweet" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-white rounded-full border w-[60px] h-[60px] items-center justify-center"
          onPress={handleTakePhoto}>
          <Icon name="camera" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
