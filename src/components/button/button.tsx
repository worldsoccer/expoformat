import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { ViewStyle, TextStyle } from "react-native";

type Variant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
type Size = "default" | "sm" | "lg" | "icon";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "default",
  children,
  onPress,
  disabled = false,
  style,
  textStyle,
}) => {
  // バリアントごとのスタイル
  const variantStyles: { [key in Variant]: ViewStyle } = {
    default: { backgroundColor: "#3b82f6", borderColor: "transparent" }, // bg-blue-500
    destructive: { backgroundColor: "#ef4444", borderColor: "transparent" }, // bg-red-500
    outline: { backgroundColor: "white", borderColor: "#d1d5db", borderWidth: 1 }, // border-gray-300
    secondary: { backgroundColor: "#6b7280", borderColor: "transparent" }, // bg-gray-500
    ghost: { backgroundColor: "transparent", borderColor: "transparent" }, // bg-transparent
    link: { backgroundColor: "transparent", borderColor: "transparent" }, // text-blue-500
  };

  // サイズごとのスタイル
  const sizeStyles: { [key in Size]: ViewStyle } = {
    default: { height: 40, paddingHorizontal: 16 }, // h-10 px-4
    sm: { height: 32, paddingHorizontal: 12 }, // h-8 px-3
    lg: { height: 48, paddingHorizontal: 24 }, // h-12 px-6
    icon: { height: 40, width: 40, justifyContent: "center", alignItems: "center" }, // h-10 w-10
  };

  // テキストスタイル
  const textStyles: { [key in Variant]: TextStyle } = {
    default: { color: "white" }, // text-white
    destructive: { color: "white" }, // text-white
    outline: { color: "#1f2937" }, // text-gray-800
    secondary: { color: "white" }, // text-white
    ghost: { color: "#1f2937" }, // text-gray-800
    link: { color: "#3b82f6", textDecorationLine: "underline" }, // text-blue-500 underline
  };

  // 無効化スタイル
  const disabledStyle: ViewStyle = disabled ? { opacity: 0.5 } : {};

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8, // rounded-md
        ...variantStyles[variant], // バリアントのスタイルを適用
        ...sizeStyles[size], // サイズのスタイルを適用
        ...disabledStyle, // 無効化状態のスタイルを適用
        ...style, // 外部から渡されたカスタムスタイルを適用
      }}
    >
      <Text
        style={{
          fontWeight: "500", // font-medium
          ...textStyles[variant], // テキストスタイルを適用
          ...textStyle, // 外部から渡されたカスタムテキストスタイルを適用
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
