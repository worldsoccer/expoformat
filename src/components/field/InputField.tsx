import React, { FC } from "react";
import { View, TextInput, StyleSheet } from "react-native";

type Props = {
  placeholder: string;
  placeholderTextColor?: string;
  secureTextEntry?: boolean | undefined; // password が表示されないように
  keyboardType?: "email-address" | "ascii-capable" | "default";
  textContentType?: "emailAddress" | "password" | "username";
  autoFocus?: boolean | undefined;
  value: string;
  onChangeText: (txt: string) => void;
};

export const InputField: FC<Props> = ({
  placeholderTextColor = "gray",
  placeholder,
  secureTextEntry = false,
  keyboardType = "default",
  textContentType = "name",
  autoFocus = false,
  value,
  onChangeText,
}) => (
  <View
    style={{
      marginBottom: 20, // mb-5
      marginHorizontal: 12, // mx-3
      flexDirection: "row", // flex-row
      padding: 12, // p-3
      width: "91.6667%", // w-11/12
      backgroundColor: "white", // bg-white
      borderRadius: 8, // rounded
    }}
  >
    <TextInput
      style={{
        width: "100%", // w-full
      }}
      onChangeText={onChangeText}
      value={value}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      textContentType={textContentType as any}
      autoCapitalize='none' // 先頭文字を大文字にしない
      autoFocus={autoFocus}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
    />
  </View>
);
