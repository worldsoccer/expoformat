import React, { FC } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types/navigation";
import { InputField } from "@/components/field/InputField";
import Button from "@/components/button/button";
import { useAuth } from "@/hooks/use_auth";

type Props = {
  navigate(arg0: string): void;
  navigation: NativeStackNavigationProp<RootStackParamList, "Auth">;
};

export const AuthScreen: FC = () => {
  const { address, password, authErr, setAddress, setPassword, mLogin } = useAuth();

  const navigation = useNavigation<Props>();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#3b8787",
        }}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
          keyboardShouldPersistTaps='handled'
        >
          {/* ヘッダーアイコンとタイトル */}
          <View
            style={{
              alignItems: "center",
              marginBottom: 32, // mb-8
            }}
          >
            <Feather name='user-check' size={50} color='white' />
            <Text
              style={{
                fontSize: 24, // text-2xl
                color: "white", // text-white
                fontWeight: "600", // font-semibold
                marginTop: 8, // mt-2
              }}
            >
              Login
            </Text>
          </View>

          {/* 入力フィールド */}
          <View
            style={{
              width: "80%", // w-4/5
              marginBottom: 16, // space-y-4: 下のマージンを調整
            }}
          >
            <InputField
              placeholder='アドレス'
              keyboardType='email-address'
              textContentType='emailAddress'
              value={address}
              onChangeText={(text: string) => setAddress(text)}
            />
            <InputField
              placeholder='パスワード'
              secureTextEntry
              textContentType='password'
              value={password}
              onChangeText={(text: string) => setPassword(text)}
            />
          </View>

          {/* エラーメッセージ */}
          {authErr !== "" && (
            <Text
              style={{
                color: "#FCD34D", // text-yellow-300
                marginVertical: 12, // my-3
                fontWeight: "600", // font-semibold
              }}
            >
              {authErr}
            </Text>
          )}

          {/* ボタン */}
          <View
            style={{
              marginTop: 24, // mt-6
              width: "80%", // w-4/5
            }}
          >
            <Button variant='secondary' onPress={mLogin}>
              ログイン
            </Button>
          </View>

          {/* パスワードを忘れた場合 */}
          <TouchableOpacity
            style={{
              marginTop: 20,
            }}
            onPress={() => navigation.navigate("passModal")}
          >
            <Text
              style={{
                color: "white", // text-white
                textDecorationLine: "underline", // underline
              }}
            >
              パスワードを忘れた場合
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
