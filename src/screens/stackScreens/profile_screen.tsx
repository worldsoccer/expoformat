import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import { FC } from "react";
import { RootStackParamList } from "@/types/navigation";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Profile">;
};

export const ProfileScreen: FC<Props> = ({ navigation }) => {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text>ProfiletionsScreen</Text>
      <Button
        title='Go to Notifications'
        onPress={() => navigation.navigate("Notifications")}
      />
      <Button onPress={() => navigation.navigate("Modal")} title='Open Modal' />
    </View>
  );
};
