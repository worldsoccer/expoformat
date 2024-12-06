import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";

export function DeliveryScreen() {
  return (
    <View className='flex-row flex-wrap justify-around items-center w-full'>
      <TouchableOpacity
        className='w-5/12 items-center justify-center rounded-lg border-2 border-red-500'
        style={{ aspectRatio: 1, marginVertical: 20 }}
      >
        <View className='items-center justify-center p-7'>
          <AntDesign name={"find"} size={40} color={"blue"} />
        </View>
        <View>
          <Text className=''>アイコン名</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        className='w-5/12 items-center justify-center rounded-lg border-2 border-red-500'
        style={{ aspectRatio: 1, marginVertical: 20 }}
      >
        <View className='items-center justify-center p-7'>
          <AntDesign name={"find"} size={40} color={"blue"} />
        </View>
        <View>
          <Text className=''>アイコン名</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        className='w-5/12 items-center justify-center rounded-lg border-2 border-red-500'
        style={{ aspectRatio: 1, marginVertical: 20 }}
      >
        <View className='items-center justify-center p-7'>
          <AntDesign name={"find"} size={40} color={"blue"} />
        </View>
        <View>
          <Text className=''>アイコン名</Text>
        </View>
      </TouchableOpacity>

      <View className='w-5/12'></View>
    </View>
  );
}
