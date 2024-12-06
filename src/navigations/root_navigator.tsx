import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStackNavigator } from "./auth_navigator";
import { useSelector } from "react-redux";
import { selectLogin } from "../slices/loginSlice";
import { DrawerNavigator } from "@/navigations/drawer_navigator";
import { ActivityIndicator, Text, View } from "react-native";
import { API_KEY } from "@/constants/url";
import { useTxkData } from "@/hooks/use_txkdata";

export const RootNavigator: FC = () => {
  const loginState = useSelector(selectLogin);
  const apiUrl = `${API_KEY}/process/allData`;

  // トークンが存在する場合のみデータを取得
  const { isLoading, error } = useTxkData(loginState?.token ? apiUrl : null);

  if (loginState?.token && isLoading) {
    // ローディング中の表示
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size='large' color='#0000ff' />
      </View>
    );
  }

  if (loginState?.token && error) {
    // エラー時の表示
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "red" }}>エラーが発生しました: {error}</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      {loginState?.token ? <DrawerNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};
