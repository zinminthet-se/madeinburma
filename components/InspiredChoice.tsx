import { Text, View, Image } from "react-native";

interface InspiredChoiceProp {
  itemSizeInPx: number;
  image: any;
  title: string;
}

const InspiredChoice = ({ itemSizeInPx, image, title }: InspiredChoiceProp) => {
  return (
    <View style={{ width: itemSizeInPx }}>
      <View
        style={{
          width: itemSizeInPx,
          aspectRatio: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 5,
        }}
        className="bg-gray-100 rounded-lg"
      >
        <Image
          source={image}
          style={{ width: "80%", height: "80%" }}
          resizeMode="cover"
        />
      </View>
      <Text
        className="text-center"
        numberOfLines={2}
        ellipsizeMode="tail"
        style={{ textAlign: "center" }}
      >
        {title}
      </Text>
    </View>
  );
};

export default InspiredChoice;
