import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setSalesData } from "@/slices/mysql/salesSlice";
import { setZNumberData } from "@/slices/mysql/zNumberSlice";
import { setCompletedWorkData } from "@/slices/mysql/completedWorkSlice";
import { setMaterialData } from "@/slices/mysql/materialSlice";
import { setEmployees } from "@/slices/mysql/employeeSlice";
import { setFactories } from "@/slices/mysql/factorySlice";
import { addLumberQuality } from "@/slices/mysql/lumberQualitySlice";
import { setMachine } from "@/slices/mysql/machineSlice";
import { setMaterialCheckout } from "@/slices/mysql/materialCheckoutManagementSlice";
import { setMaterialManagement } from "@/slices/mysql/materialManagementSlice";
import { setMaterialSupplier } from "@/slices/mysql/materialSupplierSlice";
import { setProcessing } from "@/slices/mysql/processingSlice";
import { setProcessManagements } from "@/slices/mysql/processManagementSlice";
import { setSalesCustomer } from "@/slices/mysql/salesCustomerSlice";

export const useTxkData = (endpoint: string | null) => {
  // const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!endpoint) {
      setIsLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setIsLoading(true);

        // const startTime = performance.now(); // リクエスト開始時間
        const response = await axios.get(endpoint, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            "Accept-Encoding": "gzip, deflate",
          },
        });
        // const endTime = performance.now(); // レスポンス受信時間
        // const duration = endTime - startTime; // 経過時間を計算
        // console.log(`Request Duration: ${duration.toFixed(2)} ms`);
        // console.log(`Response Size: ${JSON.stringify(response.data).length} bytes`);
        // console.log("B: response.data.data.machine", response.data.data.machine);
        dispatch(setCompletedWorkData(response.data.data.completedWork));
        dispatch(setEmployees(response.data.data.employee));
        dispatch(setFactories(response.data.data.factory));
        dispatch(addLumberQuality(response.data.data.lumberQuality));
        dispatch(setMachine(response.data.data.machine));
        dispatch(setMaterialCheckout(response.data.data.materialCheckouts));
        dispatch(setMaterialManagement(response.data.data.materialManagement));
        dispatch(setMaterialData(response.data.data.material));
        dispatch(setMaterialSupplier(response.data.data.materialSupplier));
        dispatch(setProcessing(response.data.data.processing));
        dispatch(setMaterialData(response.data.data.material));
        dispatch(setProcessManagements(response.data.data.process));
        dispatch(setSalesCustomer(response.data.data.salesCustomer));
        dispatch(setSalesData(response.data.data.sales));
        dispatch(setZNumberData(response.data.data.zNumber));
        // setData(response.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { isLoading, error };
};
