import { Text, View, Pressable, FlatList, TouchableOpacity } from "react-native";
import React, {useState, useMemo, useCallback} from "react"
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from '@expo/vector-icons/FontAwesome5'
import '@/global.css'
import Post from '@/Components/Post'
import mockdata from '@/Data/mockdata'
export default function Index() {

  return (
    <View className="flex-1 bg-white">
      <View className="flex flex-row bg-white border-gray-900 shadow-md justify-between px-4 py-4">
        <Text className="text-4xl font-semibold text-blue-600">facebook</Text>
        <View className="flex flex-row gap-6">
          <TouchableOpacity>
            <View className="w-[35px] h-[35px] bg-gray-400 items-center justify-center rounded-full">
              <Icon name="plus" size={20} color="black"/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="w-[35px] h-[35px] bg-gray-400 items-center justify-center rounded-full">
              <Icon name="search" size={20} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="w-[35px] h-[35px] bg-gray-400 items-center justify-center rounded-full">
              <Icon name="bars" size={20} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View className="pt-2">
        <SafeAreaView className="m-2">
          <FlatList
            data={mockdata}
            keyExtractor={item => item.id}
            renderItem={({item})=> <Post post={item}/>}>
          </FlatList>
        </SafeAreaView>
      </View>
    </View>
  );
}



