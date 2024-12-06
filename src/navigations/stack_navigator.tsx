import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC } from "react";
import { NotificationsScreen } from "../screens/stackScreens/notifications_screen";
import { ProfileScreen } from "../screens/stackScreens/profile_screen";
import { ModalScreen } from "../screens/modal/modal_screen";

const Stack = createNativeStackNavigator();

export const StackNavigator: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Group>
        <Stack.Screen name='Notifications' component={NotificationsScreen} />
        <Stack.Screen name='Profile' component={ProfileScreen} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name='Modal' component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
