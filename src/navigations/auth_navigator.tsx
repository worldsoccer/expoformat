import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types/navigation";
import { AuthScreen } from "@/screens/auth/auth_screen";
import { PassResetScreen } from "@/screens/auth/pass_reset_screen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AuthStackNavigator: FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Group>
      <Stack.Screen name='Auth' component={AuthScreen} />
    </Stack.Group>
    <Stack.Group screenOptions={{ presentation: "modal" }}>
      <Stack.Screen name='passModal' component={PassResetScreen} />
    </Stack.Group>
  </Stack.Navigator>
);
