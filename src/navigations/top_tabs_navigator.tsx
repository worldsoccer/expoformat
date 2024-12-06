import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { EventScreen } from "@/screens/topTabsScreens/event_screen";
import { ProcessScreen } from "@/screens/topTabsScreens/process_screen";
import { ReservationScreen } from "@/screens/topTabsScreens/reservation_screen";
import { StackNavigator } from "@/navigations/stack_navigator";

// マテリアルトップタブナビゲーターの作成
const TopTab = createMaterialTopTabNavigator();

export const TopTabNavigator: React.FC = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name='Stack' component={StackNavigator} />
      <TopTab.Screen name='Event' component={EventScreen} />
      <TopTab.Screen name='Process' component={ProcessScreen} />
      <TopTab.Screen name='ReservationScreen' component={ReservationScreen} />
    </TopTab.Navigator>
  );
};
