import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
} from "react-native";
import { Controller } from "react-hook-form";

type TextFieldProps = {
  control: any;
  name: string;
  label: string;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  errors: any;
};

export const TextField: React.FC<TextFieldProps> = ({
  control,
  name,
  label,
  placeholder,
  keyboardType = "default",
  errors,
}) => (
  <View>
    <Text style={styles.label}>{label}</Text>
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          style={styles.input}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
          keyboardType={keyboardType}
        />
      )}
    />
    {errors[name] && (
      <Text style={styles.error}>{errors[name].message}</Text>
    )}
  </View>
);

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    color: "#333",
  },
  error: {
    color: "red",
    marginBottom: 8,
  },
});
