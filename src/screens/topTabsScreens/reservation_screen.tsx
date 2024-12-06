import { selectMachine } from "@/slices/mysql/machineSlice";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

export function ReservationScreen() {
  const machines = useSelector(selectMachine);

  console.log("Redux state (machines):", machines);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {machines && machines.length > 0 ? (
        machines.map((machine, index) => <Text key={index}>{machine.機械名}</Text>)
      ) : (
        <Text>利用可能な機械がありません。</Text>
      )}
    </View>
  );
}
