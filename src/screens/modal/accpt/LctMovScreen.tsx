import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FC } from "react";
import { Button, Text, View } from "react-native";
import { RootStackParamList } from "../../../types/types";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "LctMov">;
};

export const LctMovScreen: FC<Props> = ({ navigation }) => {
  return (
    <View className='flex-1 justify-center items-center'>
      <Button title='戻る' onPress={() => navigation.goBack()} />
    </View>
  );
};
