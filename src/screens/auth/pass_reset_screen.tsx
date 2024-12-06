import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FC, useEffect } from "react";
import { Alert, Text, View } from "react-native";
import { RootStackParamList } from "@/types/navigation";
import { useAuth } from "@/hooks/use_auth";
import { InputField } from "@/components/field/InputField";
import Button from "@/components/button/button";
import Toast from "react-native-toast-message";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "passModal">;
};

export const PassResetScreen: FC<Props> = ({ navigation }) => {
  const {
    username,
    password,
    authErr,
    setUserName,
    setPassword,
    accountOk,
    resetOk,
    mPassReset,
    mSearchUser,
  } = useAuth();

  useEffect(() => {
    if (resetOk) {
      Alert.alert("パスワードリセットが完了しました", "", [
        {
          text: "OK",
          onPress: () => navigation.goBack(),
        },
      ]);
    }
  }, [resetOk]);

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 64, // pt-16
        alignItems: "center", // items-center
        backgroundColor: "#f5f5f5", // 背景色
      }}
    >
      <View>
        {accountOk ? (
          <InputField
            placeholder='パスワードリセット'
            secureTextEntry
            textContentType='password'
            value={password}
            onChangeText={(text: string) => setPassword(text)}
          />
        ) : (
          <InputField
            placeholder='ユーザー名'
            keyboardType='email-address'
            textContentType='emailAddress'
            value={username}
            onChangeText={(text: string) => setUserName(text)}
          />
        )}

        <View
          style={{
            alignItems: "center",
            marginVertical: 8, // my-2
          }}
        >
          <Text
            style={{
              fontSize: 16, // 適切なフォントサイズ
              color: "#333", // テキストカラー
            }}
          >
            {accountOk ? "リセットするパスワードを入力して下さい" : "ユーザー名を入力して下さい"}
          </Text>
        </View>

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

        <View
          style={{
            alignItems: "center",
            marginTop: 20, // mt-5
          }}
        >
          <Button onPress={accountOk ? mPassReset : mSearchUser}>
            {accountOk ? "リセット" : "ユーザー検索"}
          </Button>
        </View>
        <Toast position='top' />
      </View>
    </View>
  );
};
