import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "assets/images";

const TopRankings = () => {
  return (
    <SafeAreaView className="p-2 bg-red-300">
      <View className="flex-row justify-between items-center">
        <View className="flex-col gap-1">
          <Text className="text-lg font-medium">Top Rankings</Text>
          <Text className="text-xs text-gray-600">
            Make your sourcing efficient
          </Text>
        </View>
        <Image
          source={images.approved}
          resizeMode="contain"
          className="w-20 h-20"
        />
      </View>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerClassName="gap-2"
          contentContainerStyle={{
            height: 200,
            minHeight: 200,
            maxHeight: 225,
          }}
        >
          <View className="overflow-hidden w-[180px] gap-2 h-full bg-white rounded-lg">
            <View className="h-[70%] relative  w-full bg-red-500">
              <Image
                source={images.poster}
                resizeMode="cover"
                className="w-full h-full"
              />
              {/* floating labels start*/}
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  backgroundColor: "rgba(0,0,0,0.4)",
                  padding: 5,
                  paddingHorizontal: 10,
                  borderRadius: 5,
                }}
              >
                <Text className="text-white text-xs">Most Popular</Text>
              </View>
              {/* floating label end */}
            </View>
            <View className="px-2">
              <Text className="font-medium">US $45.00 - 99.00</Text>
              <Text className="text-gray-600">89400 + Heats</Text>
            </View>
          </View>

          <View className="overflow-hidden w-[180px] gap-2 h-full bg-white rounded-lg">
            <View className="h-[70%] relative  w-full bg-red-500">
              <Image
                source={images.poster}
                resizeMode="cover"
                className="w-full h-full"
              />
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  backgroundColor: "rgba(0,0,0,0.4)",
                  padding: 5,
                  paddingHorizontal: 10,
                  borderRadius: 5,
                }}
              >
                <Text className="text-white text-xs">Most Popular</Text>
              </View>
            </View>
            <View className="px-2">
              <Text className="font-medium">US $45.00 - 99.00</Text>
              <Text className="text-gray-600">89400 + Heats</Text>
            </View>
          </View>

          <View className="overflow-hidden w-[180px] gap-2 h-full bg-white rounded-lg">
            <View className="h-[70%] relative  w-full bg-red-500">
              <Image
                source={images.poster}
                resizeMode="cover"
                className="w-full h-full"
              />
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  backgroundColor: "rgba(0,0,0,0.4)",
                  padding: 5,
                  paddingHorizontal: 10,
                  borderRadius: 5,
                }}
              >
                <Text className="text-white text-xs">Most Popular</Text>
              </View>
            </View>
            <View className="px-2">
              <Text className="font-medium">US $45.00 - 99.00</Text>
              <Text className="text-gray-600">89400 + Heats</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default TopRankings;
