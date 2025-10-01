import { View, Text } from "react-native";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import IIcon from "react-native-vector-icons/Ionicons";

interface ProfileOptionProp {
  iconName?: string;
  title?: string;
}

const ProfileOptions = ({ iconName, title }: ProfileOptionProp) => {
  return (
    <View className="flex-row justify-between items-center py-4 bg-white rounded-lg p-4">
      <View className="flex-row gap-2 items-center">
        <MCIcon name={iconName} size={22} />
        <Text>{title}</Text>
      </View>
      <MCIcon name="chevron-right" size={22} />
    </View>
  );
};

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-200 px-3 mt-2">
      <View className="flex-row items-center justify-end gap-5">
        <IIcon name="camera-outline" size={28} />
        <IIcon name="headset-outline" size={28} />
        <IIcon name="settings-outline" size={28} />
      </View>
      <View className="flex-row items-center gap-2 mb-4">
        <View className="p-4 border border-white rounded-full">
          <IIcon name="person" size={28} color={"black"} />
        </View>
        <Text className="text-xl font-semibold">Sign In/Join Free</Text>
      </View>

      <View className="h-[80px] bg-white rounded-lg justify-between flex-row items-center p-4">
        <View className="flex-[3] flex-col justify-center items-center">
          <IIcon name="heart-outline" size={28} />
          <Text>My Favourites</Text>
        </View>
        <View className="flex-[1]">
          <View className="h-full w-[1px] bg-grey-500 " />
        </View>
        <View className="flex-[3] flex-col justify-center items-center">
          <IIcon name="time-outline" size={28} />
          <Text>Browsing History</Text>
        </View>
      </View>

      <View className="bg-white flex-col gap-1 mt-4 mb-4 rounded-lg border border-gray-200">
        <ProfileOptions title="Inquires" iconName="email" />
        <ProfileOptions title="My Orders" iconName="clipboard-list" />
        <ProfileOptions title="My Refund" iconName="credit-card-refund" />
        <ProfileOptions title="Sourcing Requests" iconName="briefcase-search" />
        <ProfileOptions title="Tax Information" iconName="file-document" />
      </View>

      <ProfileOptions title="Preferences" iconName="emoticon" />

      <View className="flex-col mt-4 bg-white rounded-lg border border-gray-200">
        <ProfileOptions title="Help Center" iconName="help-circle" />
        <ProfileOptions title="Feedback" iconName="message-text" />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
