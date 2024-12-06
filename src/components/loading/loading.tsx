import React from "react";
import { View } from "react-native";
import ClipLoader from "react-spinners/ClipLoader";

export const Loading = () => {
  // スピナーのサイズや色をカスタマイズできます
  const size = 50;
  const color = "#123abc";

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5", // 必要に応じて背景色を調整
      }}
    >
      <ClipLoader size={size} color={color} />
    </View>
  );
};
