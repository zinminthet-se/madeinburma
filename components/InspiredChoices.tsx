import { images } from "assets/images";
import React, { ReactNode } from "react";
import { FlatList, Text, View, Image } from "react-native";
import { Dimensions } from "react-native";
import InspiredChoice from "./InspiredChoice";
import MIcon from "react-native-vector-icons/MaterialIcons";

const inspiredChoice = [
  {
    id: 1,
    name: "Blowers",
    image: images.blower,
  },
  {
    id: 2,
    name: "Air Vent",
    image: images.airvent,
  },
  {
    id: 3,
    name: "Diesel Generator",
    image: images.diselGenerator,
  },
  {
    id: 4,
    name: "Ventilation Duct",
    image: images.blower,
  },
  {
    id: 5,
    name: "Ventilation Fan",
    image: images.engine,
  },
  {
    id: 6,
    name: "Other ventilation Ecommerce things",
    image: images.airvent,
  },
  {
    id: 7,
    name: "water pump",
    image: images.blower,
  },
  {
    id: 8,
    name: "Engine",
    image: images.diselGenerator,
  },
];

const InspiredChoices = () => {
  const screenWidth = Dimensions.get("screen").width;
  const numOfColumns = 4;
  const itemSpacing = 10;
  const totalSpacing = itemSpacing * (numOfColumns + 1);
  const itemSize = (screenWidth - totalSpacing) / numOfColumns;
  const itemSizeInPx = Number.parseInt(itemSize.toString());
  return (
    <View>
      <View className="flex-row mt-4 gap-3 items-center">
        <Text className="px-2 text-lg font-bold">Pinned Categories</Text>
      </View>
      <View className="mb-4">
        <FlatList
          data={inspiredChoice}
          numColumns={4}
          columnWrapperStyle={{
            gap: itemSpacing,
          }}
          keyExtractor={(item) => {
            return item.id.toString();
          }}
          contentContainerStyle={{
            padding: itemSpacing,
            columnGap: itemSpacing,
            rowGap: 13,
          }}
          renderItem={({ item: { name, image } }) => {
            return (
              <InspiredChoice
                image={image}
                title={name}
                itemSizeInPx={itemSizeInPx}
                key={name.toString()}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default InspiredChoices;
