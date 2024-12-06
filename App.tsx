import { store } from "./store";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { Loading } from "@/components/loading/loading";
import { RootNavigator } from "@/navigations/root_navigator";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
        <RootNavigator />
        <Toast position={"bottom"} />
      </Suspense>
    </Provider>
  );
}
