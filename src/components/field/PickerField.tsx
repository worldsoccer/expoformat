import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Controller } from "react-hook-form";

type PickerFieldProps = {
  control: any;
  name: string;
  label: string;
  items: { label: string; value: string }[];
  errors: any;
  placeholder: string;
  onValueChange?: (value: string) => void;
};

export const PickerField: React.FC<PickerFieldProps> = ({
  control,
  name,
  label,
  items,
  errors,
  placeholder,
  onValueChange,
}) => (
  <View>
    <Text style={styles.label}>{label}</Text>
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <RNPickerSelect
          onValueChange={(val) => {
            onChange(val);
            if (onValueChange) {
              onValueChange(val); // Call the optional value change handler if provided
            }
          }}
          items={items}
          style={pickerSelectStyles}
          value={value || ""} // Set default value to empty string
          placeholder={{ label: placeholder, value: "" }}
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
  error: {
    color: "red",
    marginBottom: 8,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    color: "#333",
  },
  inputAndroid: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    color: "#333",
  },
});
