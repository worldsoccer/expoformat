import React, { FC, useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Alert, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { RootStackParamList } from "@/types/navigation";
import { useAuth } from "@/hooks/use_auth";
import { AcceptScreen } from "@/screens/btmTabsSceens/accept_screen";
import { EnvrmentScreen } from "@/screens/btmTabsSceens/envrment_screen";
import { FavoriteScreen } from "@/screens/btmTabsSceens/favorite_screen";
import { SettingScreen } from "@/screens/btmTabsSceens/setting_screen";
import { selectLogin } from "@/slices/loginSlice";
import { TopTabNavigator } from "@/navigations/top_tabs_navigator";

const BtmTab = createBottomTabNavigator<RootStackParamList>();

export const BtmTabsNavigator: FC = () => {
  const navigation = useNavigation();
  const loginState = useSelector(selectLogin);
  const { mSignOut } = useAuth();

  const alertEvent = () => {
    // 確認アラートを表示
    Alert.alert("確認", "ログアウトしますか？", [
      { text: "キャンセル", style: "cancel" },
      {
        text: "OK",
        onPress: () => {
          // rowDataがundefinedでないことを確認してからアクセスする
          mSignOut();
        },
      },
    ]);
  };

  // 右上のユーザー名
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity
            style={{
              backgroundColor: "#aaebba", // 背景色を緑に設定
              borderRadius: 20, // 角を丸くする
              padding: 10, // 内側の余白を追加
              marginRight: 20,
              alignItems: "center", // 水平方向の中央揃え
              justifyContent: "center", // 垂直方向の中央揃え
            }}
            onPress={() => alertEvent()}
          >
            <Text>{loginState.従業員名!}</Text>
          </TouchableOpacity>
        );
      },
    });
  }, []);

  return (
    <BtmTab.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <BtmTab.Screen
        name='TopTabs'
        component={TopTabNavigator}
        options={{
          headerShown: false,
          // tabBarBadge: 3,
          tabBarLabel: "ホーム",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='home' color={color} size={26} />
          ),
        }}
      />

      <BtmTab.Screen
        name='Delivery'
        component={AcceptScreen}
        options={{
          headerShown: false,
          // tabBarBadge: 3,
          tabBarLabel: "材料",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='cart' color={color} size={26} />
          ),
        }}
      />

      <BtmTab.Screen
        name='Envrment'
        component={EnvrmentScreen}
        options={{
          headerShown: false,
          // tabBarBadge: 3,
          tabBarLabel: "環境",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='earth' color={color} size={26} />
          ),
        }}
      />

      <BtmTab.Screen
        name='Favorite'
        component={FavoriteScreen}
        options={{
          headerShown: false,
          // tabBarBadge: 3,
          tabBarLabel: "お気に入り",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='heart' color={color} size={26} />
          ),
        }}
      />

      <BtmTab.Screen
        name='Setting'
        component={SettingScreen}
        options={{
          headerShown: false,
          // tabBarBadge: 3,
          tabBarLabel: "設定",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='palette' color={color} size={26} />
          ),
        }}
      />
    </BtmTab.Navigator>
  );
};
