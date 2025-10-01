import { FlatList, Image, ImageSourcePropType, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IIcon from "react-native-vector-icons/Ionicons";
import { images } from "assets/images";
import { Dimensions, ScrollView } from "react-native";
import InspiredChoices from "../../components/InspiredChoices";
import FIcon from "react-native-vector-icons/Feather";

const screenWidth = Dimensions.get("screen").width;
const numOfColumns = 4;
const itemSpacing = 10;
const totalSpacing = itemSpacing * (numOfColumns + 1);
const itemSize = (screenWidth - totalSpacing) / numOfColumns;
const itemSizeInPx = Number.parseInt(itemSize.toString());

const categoryData = [
  {
    id: 1,
    name: "Equipment & Components",
  },
  {
    id: 2,
    name: "Equipment & Components",
  },
  {
    id: 3,
    name: "Equipment & Components",
  },
  {
    id: 4,
    name: "Equipment & Components",
  },
  {
    id: 5,
    name: "Equipment & Components",
  },
  {
    id: 6,
    name: "Equipment & Components",
  },

  {
    id: 7,
    name: "Equipment & Components",
  },
  {
    id: 8,
    name: "Equipment & Components",
  },
];

const productReviewData = [
  {
    id: 1,
    productName: "Wireless Headphones",
    price: "$59.99",
    image: images.engine,
    stock: "In Stock",
  },
  {
    id: 2,
    productName: "Smartphone Stand",
    price: "$12.49",
    image: images.engine,
    stock: "In Stock",
  },
  {
    id: 3,
    productName: "Bluetooth Speaker",
    price: "$29.99",
    image: images.engine,
    stock: "Out of Stock",
  },
  {
    id: 4,
    productName: "USB-C Charging Cable",
    price: "$8.99",
    image: images.engine,
    stock: "In Stock",
  },
  {
    id: 5,
    productName: "Laptop Sleeve",
    price: "$18.75",
    image: images.engine,
    stock: "Limited Stock",
  },
  {
    id: 6,
    productName: "Gaming Mouse",
    price: "$45.00",
    image: images.engine,
    stock: "In Stock",
  },
  {
    id: 7,
    productName: "Mechanical Keyboard",
    price: "$72.00",
    image: images.engine,
    stock: "In Stock",
  },
  {
    id: 8,
    productName: "4K Monitor",
    price: "$299.99",
    image: images.engine,
    stock: "Out of Stock",
  },
  {
    id: 9,
    productName: "Desk Lamp",
    price: "$22.50",
    image: images.engine,
    stock: "In Stock",
  },
  {
    id: 10,
    productName: "Webcam 1080p",
    price: "$39.95",
    image: images.engine,
    stock: "In Stock",
  },
];

const Category = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="p-2 flex-row items-center border justify-between border-t-0 border-r-0 border-l-0 border-b-gray-200">
        <View className="flex-1 rounded-full items-start justify-center">
          <View className="bg-gray-200 rounded-full">
            <MCIcon name="chevron-left" size={28} />
          </View>
        </View>
        <View className="flex-1 items-center justify-center">
          <Text className="text-center text-xl">Categories</Text>
        </View>
        <View className="flex-1" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <InspiredChoices />

        <View className={`mt-2 p-[${itemSpacing}px]`}>
          <View className="mb-3 px-2 flex-row items-center gap-2">
            <Text className="font-bold text-lg">Popular in Myanmar</Text>
            <Image
              source={images.myanmar}
              resizeMode="cover"
              className="w-8 h-8"
            />
          </View>
          <View>
            <ScrollView
              horizontal
              contentContainerStyle={{
                gap: itemSpacing,
                paddingHorizontal: itemSpacing,
              }}
              showsHorizontalScrollIndicator={false}
            >
              <View
                className={`w-[200px] h-[150px] rounded-xl bg-gray-100 p-2 pb-5`}
              >
                <View className="flex-row justify-between h-2/5 p-2 items-start pt-1">
                  <Text className="font-semibold">Iphone</Text>
                  <MCIcon name="chevron-right" className="pt-1" size={18} />
                </View>

                <View className="flex-row h-3/5  items-center justify-center gap-2">
                  <View
                    style={{
                      width: "45%",
                      aspectRatio: 1,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    className="bg-white rounded-lg"
                  >
                    <Image
                      source={images.iphone}
                      style={{ width: "100%", height: "100%" }}
                      resizeMode="contain"
                    />
                  </View>

                  <View
                    style={{
                      width: "45%",
                      aspectRatio: 1,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    className="bg-white rounded-lg"
                  >
                    <Image
                      source={images.iphone}
                      style={{ width: "100%", height: "100%" }}
                      resizeMode="contain"
                    />
                  </View>
                </View>
              </View>

              <View
                className={`w-[200px] h-[150px] rounded-xl bg-gray-100 p-2 pb-5`}
              >
                <View className="flex-row justify-between h-2/5 p-2 items-start pt-1">
                  <Text className="font-semibold">Tablet</Text>
                  <MCIcon name="chevron-right" className="pt-1" size={18} />
                </View>

                <View className="flex-row h-3/5  items-center justify-center gap-2">
                  <View
                    style={{
                      width: "45%",
                      aspectRatio: 1,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    className="bg-white rounded-lg"
                  >
                    <Image
                      source={images.tablet}
                      style={{ width: "100%", height: "100%" }}
                      resizeMode="contain"
                    />
                  </View>

                  <View
                    style={{
                      width: "45%",
                      aspectRatio: 1,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    className="bg-white rounded-lg"
                  >
                    <Image
                      source={images.tablet}
                      style={{ width: "100%", height: "100%" }}
                      resizeMode="contain"
                    />
                  </View>
                </View>
              </View>

              <View
                className={`w-[200px] h-[150px] rounded-xl bg-gray-100 p-2 pb-5`}
              >
                <View className="flex-row justify-between h-2/5 p-2 items-start pt-1">
                  <Text className="font-semibold">Samsung</Text>
                  <MCIcon name="chevron-right" className="pt-1" size={18} />
                </View>

                <View className="flex-row h-3/5  items-center justify-center gap-2">
                  <View
                    style={{
                      width: "45%",
                      aspectRatio: 1,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    className="bg-white rounded-lg"
                  >
                    <Image
                      source={images.samsung}
                      style={{ width: "100%", height: "100%" }}
                      resizeMode="contain"
                    />
                  </View>

                  <View
                    style={{
                      width: "45%",
                      aspectRatio: 1,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    className="bg-white rounded-lg"
                  >
                    <Image
                      source={images.samsung}
                      style={{ width: "100%", height: "100%" }}
                      resizeMode="contain"
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>

        <View className="flex-1 mt-2 mb-3">
          <Text className="px-2 text-lg font-bold">Trending now</Text>
          <FlatList
            data={productReviewData}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            className="flex-1"
            renderItem={({
              item: { id, image, productName, price, stock },
            }) => {
              return (
                <View className={`h-[300px] w-[50%]`}>
                  <View className="flex-1 flex-col justify-center">
                    <View className="h-3/4 p-2">
                      <Image
                        className="w-full h-full bg-gray-100"
                        source={images.engine}
                        resizeMode="contain"
                      />
                    </View>
                    <View className="flex-1 px-2">
                      <Text numberOfLines={1}>{productName}</Text>
                      <Text className="font-semibold text-xl" numberOfLines={1}>
                        {price}
                      </Text>
                      <Text className="text-xs font-medium">
                        {stock} peiece (MQQ)
                      </Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Category;
