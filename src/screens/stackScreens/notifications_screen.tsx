import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import { FC } from "react";
import { RootStackParamList } from "@/types/navigation";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Notifications">;
};

export const NotificationsScreen: FC<Props> = ({ navigation }) => {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text>NotificationsScreen</Text>
    </View>
  );
};
