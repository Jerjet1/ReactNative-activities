import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome5";
import React from "react";

export default function Post({ post }: any) {
  return (
    <View className="bg-white py-5 rounded-md shadow-md ">
      {/* Header */}
      <View className="flex flex-row items-start mb-3 border-gray-600">
        <Image
          source={post.user.avatar}
          className="w-[35px] h-[35px] rounded-full mr-2"
        />
        <View>
          <Text className="font-semibold text-gray-800">{post.user.name}</Text>
          <Text className="text-xs text-gray-500">{post.time}</Text>
        </View>
      </View>

      {/* Content */}
      <Text className="text-gray-800 mb-2">{post.content}</Text>

      {/* Post Image */}
      {post.imagePost && (
        <View className="flex justify-center items-center">
          <Image
            source={post.imagePost}
            className="w-full h-60 rounded-md mb-2"
            resizeMode="cover"
          />
        </View>
      )}

      {/* Actions */}
      <View className="flex flex-row justify-between mt-2">
        <TouchableOpacity className="flex flex-row items-center space-x-2">
          <Icon name="thumbs-up" size={18} color="#4267B2" />
          <Text className="text-sm text-gray-600">{post.likes}</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex flex-row items-center space-x-2">
          <Icon name="comment" size={18} color="#4267B2" />
          <Text className="text-sm text-gray-600">{post.comments}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
