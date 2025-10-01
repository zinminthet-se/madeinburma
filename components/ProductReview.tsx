import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import { images } from "assets/images";

interface ProductReviewProp {
  id?: number;
  productName: string;
  price: string;
  image: any;
  stock: string;
}

const screenWidth = Dimensions.get("screen").width;
const numOfColumns = 2;
const itemSpacing = 10;
const totalSpacing = itemSpacing * (numOfColumns + 1);
const itemSize = (screenWidth - totalSpacing) / numOfColumns;
const itemSizeInPx = Number.parseInt(itemSize.toString());

const ProductReview = ({
  price,
  image,
  stock,
  productName,
}: ProductReviewProp) => {
  return (
    <View className={`h-[300px] w-[50%]`}>
      <View className="flex-1 flex-col justify-center">
        <View className="h-3/4 p-2">
          <Image
            className="w-full h-full bg-gray-100"
            source={image}
            resizeMode="contain"
          />
        </View>
        <View className="flex-1 px-2">
          <Text numberOfLines={1}>{productName}</Text>
          <Text className="font-semibold text-xl" numberOfLines={1}>
            {price}
          </Text>
          <Text className="text-xs font-medium">{stock} peiece (MQQ)</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductReview;
