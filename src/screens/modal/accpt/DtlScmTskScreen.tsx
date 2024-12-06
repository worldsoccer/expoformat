import { FC, useEffect, useState } from "react";
import { CstmTable } from "../../../components/table/CstmTable";
import { mCvrtAryToObj } from "../../../utils/utlQrFnction";
import { useSelector } from "react-redux";
import { selectQrTab } from "../../../slices/qrTabSlice";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types/types";
import { View } from "react-native";
import { useTabId } from "../../../context/context";

export const DtlScmTskScreen: FC = () => {
  const qrScm = useSelector(selectQrTab);
  // const { tabId } = route.params;
  const { tabId } = useTabId();
  // const { qrScm, mUpdateQrInfo, mDeleteQrInfo, mClearAllQrInfo } = useQrState();
  const tableHead = [
    "受入先",
    "配置先",
    "受注番号",
    "装置名",
    "品名",
    "部品番号",
    "ユニット",
    "日付",
    "個数",
    "改定",
    "ブック名",
    "シート名",
    "行",
    "id",
  ];

  const [tableData, setTableData] = useState<string[][]>([]);

  useEffect(() => {
    // console.log("qrScm:", qrScm);
    // console.log(tabId);
    if (Array.isArray(qrScm)) {
      const scmData: string[][] = mCvrtAryToObj(
        qrScm
          .flatMap((item) => item.qrTab)
          .filter((qrTab) => qrTab.id === tabId),
      );
      setTableData(scmData);
    }
  }, [qrScm]);

  return (
    <View style={{ marginTop: 20 }}>
      <CstmTable
        tableHead={tableHead}
        tableData={tableData}
        columnWidths={Array(tableHead.length).fill(100)}
      />
    </View>
  );
};
