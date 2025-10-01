import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IIcon from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";

import { Image } from "react-native";
import { images } from "assets/images";

const detailData = [
  {
    id: 1,
    modelNo: {
      text: "Model No.",
      value: "HYD -176",
    },
    interfaceType: {
      text: "Interface Type",
      value: "USB",
    },
    connector: {
      text: "Connector",
      value: "USB",
    },
    universal: {
      text: "Universal",
      value: "Universal",
    },
    cabelLength: {
      text: "Cabel Length",
      value: "4 t 5.9 feet",
    },
  },
];

const dummyData = [
  {
    id: 1,
    price: 2500,
    range_from: 1,
    range_to: 49,
  },

  {
    id: 2,
    price: 2500,
    range_from: 1,
    range_to: 49,
  },

  {
    id: 3,
    price: 2500,
    range_from: 1,
    range_to: 49,
  },

  {
    id: 4,
    price: 2500,
    range_from: 1,
    range_to: 49,
  },

  {
    id: 5,
    price: 2500,
    range_from: 1,
    range_to: 49,
  },
];

const ProductDetail = () => {
  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1" contentContainerClassName="pb-8">
        <View className="h-[350px] relative w-full mb-2">
          <Image
            source={images.poster}
            resizeMode="cover"
            className="w-full h-full aspect-auto"
          />
          {/* absolute pattern buttons */}

          <View
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              marginTop: 40,
              marginLeft: 18,
              backgroundColor: "rgba(0,0,0,0.4)",
              borderRadius: "100%",
            }}
          >
            <View className="p-2">
              <IIcon name="chevron-back-outline" size={24} color={"white"} />
            </View>
          </View>

          <View
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              marginBottom: 20,
              marginRight: 10,
              backgroundColor: "rgba(0,0,0,0.4)",
              borderRadius: 8,
            }}
          >
            <View className="flex-row p-[2px] px-2 gap-[2px] items-center rounded-full">
              <IIcon name="add" size={15} color={"white"} />
              <Text className="text-xs text-white">Compare</Text>
            </View>
          </View>

          <View
            style={{
              position: "absolute",
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.4)",
              marginBottom: 20,
              marginLeft: 10,
              borderRadius: 8,
            }}
          >
            <View className="flex-row items-center justify-center gap-1 ">
              <View className="flex-row gap-[4px] items-center rounded-full p-[2px] px-[4px]">
                <IIcon name="videocam-outline" size={15} color={"white"} />
                <Text className="text-white text-xs">Video</Text>
              </View>
              <View className="flex-row gap-[4px] items-center rounded-full p-[2px] px-[4px] bg-gray-300">
                <IIcon name="image-outline" size={15} color={"gray"} />
                <Text className="text-xs text-gray-600">1/10</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              marginTop: 40,
              marginRight: 18,
              borderRadius: "100%",
            }}
          >
            <View className="flex-row gap-2">
              <View
                className="p-2 rounded-full"
                style={{
                  backgroundColor: "rgba(0,0,0,0.4)",
                  borderRadius: "100%",
                }}
              >
                <IIcon name="search-outline" color={"white"} size={24} />
              </View>
              <View
                className="p-2 rounded-full"
                style={{
                  backgroundColor: "rgba(0,0,0,0.4)",
                  borderRadius: "100%",
                }}
              >
                <IIcon name="heart-outline" color={"white"} size={24} />
              </View>
              <View
                className="p-2 rounded-full"
                style={{
                  backgroundColor: "rgba(0,0,0,0.4)",
                  borderRadius: "100%",
                }}
              >
                <IIcon
                  name="ellipsis-horizontal-outline"
                  color={"white"}
                  size={24}
                />
              </View>
            </View>
          </View>
        </View>

        <View className="gap-3">
          <Text className="px-3">
            Adjustable settings customizabel cleanroom air shower factory supply
            double doors intelligent
          </Text>
          <View className="flex-1 px-3 items-center flex-row justify-center">
            <View className=" flex-1 flex-row gap-1 px-3 p-2 rounded-l-sm rounded-r-full  items-center bg-gray-200">
              <Image
                source={images.gold}
                resizeMode="contain"
                className="w-8 h-8 aspect-square"
              />

              <Text className="uppercase">
                Top 1 in movers & shakers cleaning set
              </Text>
            </View>
          </View>

          <View className="border border-l-0 border-r-0 border-t-0 border-b-gray-100">
            {/* title start */}
            <View className=" px-3 flex-row justify-between items-center">
              <Text className="text-gray-600">Purchase Qty/FOB Price</Text>
              <View className="flex-row gap-1">
                <Text className="text-gray-900">Get Latest Price</Text>
                <MCIcon name="chevron-right" size={22} />
              </View>
            </View>
            {/* title end */}

            <FlatList
              data={dummyData}
              contentContainerClassName="px-3"
              keyExtractor={(item) => item.id.toString()}
              horizontal
              ItemSeparatorComponent={() => {
                return <View className="w-[30px]" />;
              }}
              renderItem={({ item: { id, price, range_from, range_to } }) => {
                return (
                  <View className="flex-col mb-4">
                    <Text className="text-xl font-bold">US$ {price}</Text>
                    <Text className="text-gray-700">
                      {range_from}-{range_to} Piece
                    </Text>
                  </View>
                );
              }}
            />
          </View>

          <View className="p-3 py-5 flex-row gap-2">
            <View>
              <Image
                source={images.approved}
                resizeMode="contain"
                className="w-9 h-9"
              />
            </View>
            <View>
              <Text className="font-medium">Secured Trading Service</Text>
              <Text className="text-xs text-gray-600">
                Enjoy trading protection from Made-In-Burma.com
              </Text>
            </View>
          </View>
        </View>

        {/* company profile start */}

        <LinearGradient
          colors={["#e0f7fa", "#ffffff"]} // top to bottom gradient
          className="rounded-lg"
        >
          <View className="px-3 py-4 gap-2" style={{}}>
            <Text className="text-xl font-medium">
              Shwe Myint Mo Supply Chain Co, Ltd.
            </Text>
            <View className="flex-row gap-2 items-center">
              <View>
                <Image
                  source={images.audited}
                  resizeMode="contain"
                  className="w-10 h-10"
                />
              </View>
              <View className="flex-row gap-2 items-center">
                <MCIcon name="history" size={22} />
                <Text>Member Since: 2018</Text>
              </View>
            </View>

            <View className="flex-row gap-2 items-center">
              <IIcon name="star-outline" size={22} />
              <Text>Rating 5.0/5</Text>
              <MCIcon name="chevron-right" size={22} />
            </View>

            <View className="flex-row gap-2 items-center">
              <IIcon name="location-outline" size={22} />
              <Text>Chan Aye Thar Zan, Mandalay, Mandalay</Text>
            </View>
          </View>
          {/* company profile end */}
        </LinearGradient>
        <View className="px-3 gap-6">
          <View className="flex-row items-center justify-between">
            <Text className="font-bold text-xl">Quick Details</Text>
            <View>
              <MCIcon name="chevron-right" size={18} />
            </View>
          </View>
          {/* quick details start */}
          <View className="flex-col items-center justify-center gap-6">
            <View className="flex-row">
              <View className="flex-[3]">
                <Text className="text-3xs text-gray-600">Model No.</Text>
              </View>
              <View className="flex-[5]">
                <Text className="font-bold">Asus</Text>
              </View>
            </View>
            {/* second  */}
            <View className="flex-row">
              <View className="flex-[3]">
                <Text className="text-3xs text-gray-600">Noise</Text>
              </View>
              <View className="flex-[5]">
                <Text className="font-bold">{`<102dB`}</Text>
              </View>
            </View>
            {/* second end */}

            {/* second  */}
            <View className="flex-row">
              <View className="flex-[3]">
                <Text className="text-3xs text-gray-600">Hifi</Text>
              </View>
              <View className="flex-[5]">
                <Text className="font-bold">Not Hifi</Text>
              </View>
            </View>
            {/* second end */}

            {/* second  */}
            <View className="flex-row">
              <View className="flex-[3]">
                <Text className="text-3xs text-gray-600">Activity</Text>
              </View>
              <View className="flex-[5]">
                <Text className="font-bold">Passive</Text>
              </View>
            </View>
            {/* second end */}

            {/* second  */}
            <View className="flex-row">
              <View className="flex-[3]">
                <Text className="text-3xs text-gray-600">Speaker System</Text>
              </View>
              <View className="flex-[5]">
                <Text className="font-bold">Passive</Text>
              </View>
            </View>
            {/* second end */}
          </View>
          {/* quick detail end */}
        </View>
      </ScrollView>
      {/* send inquiry start */}
      <View className="flex-row py-3 px-2 justify-between items-center border border-l-0 border-r-0 border-b-0 border-t-gray-200">
        <View className="flex-[1] items-center justify-center">
          <MCIcon name="chat" size={22} />
          <Text className="">Chat</Text>
        </View>

        <TouchableOpacity className="bg-red-500 rounded-full items-center justify-center flex-[3] p-4">
          <Text className="text-white text-lg text-center">Send Inquiry</Text>
        </TouchableOpacity>
      </View>
      {/* send inquiry end */}
    </View>
  );
};

export default ProductDetail;
