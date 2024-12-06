import { RootStackParamList } from "@/types/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FC } from "react";
import { Button, Text, View } from "react-native";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Modal">;
};

export const ModalScreen: FC<Props> = ({ navigation }) => {
  return (
    <View className='flex-1 justify-center items-center'>
      <Button title='戻る' onPress={() => navigation.goBack()} />
    </View>
  );
};
