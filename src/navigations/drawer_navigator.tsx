import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { RootStackParamList } from "@/types/navigation";
import { ArticleScreen } from "@/screens/drawerScreens/article_screen";
import { FeedScreen } from "@/screens/drawerScreens/feed_screen";
import { BtmTabsNavigator } from "@/navigations/btm_tabs_navigator";
import { CustomDrawerContent } from "@/screens/drawerScreens/customDrawer/custom_drawer";

const Drawer = createDrawerNavigator<RootStackParamList>();

export const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        options={{ title: "ホーム" }}
        name='BtnHome'
        component={BtmTabsNavigator}
      />
      <Drawer.Screen name='Article' component={ArticleScreen} />
      <Drawer.Screen name='Feed' component={FeedScreen} />
    </Drawer.Navigator>
  );
};
