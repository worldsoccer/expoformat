import { useSelector, useDispatch } from "react-redux";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  selectLogin,
} from "../slices/loginSlice";
import { useState } from "react";
import axios from "axios";
import { API_KEY } from "@/constants/url";
import Toast from "react-native-toast-message";

// import { mApiPstSrvr } from "../api/account/apiPstSrvr";

export const useAuth = () => {
  const loginState = useSelector(selectLogin); // ユーザー情報
  const dispatch = useDispatch(); // 状態を更新

  const [uid, setUid] = useState(""); // ユーザーバックエンド側id
  const [username, setUserName] = useState(""); // ユーザー名
  const [address, setAddress] = useState(""); // アドレス
  const [password, setPassword] = useState(""); // パスワード
  const [email, setEmail] = useState(""); // メールアドレス
  const [isLogin, setIsLogin] = useState(true); // ログイン管理
  const [authErr, setAuthErr] = useState(""); // エラー情報
  const [accountOk, setAccountOk] = useState(false); // ログイン管理
  const [userId, setUserId] = useState("");
  const [resetOk, setResetOk] = useState(false);

  /**
   * ユーザー検索
   * (パスワードを忘れた場合が押された時)
   */
  const mSearchUser = async () => {
    try {
      const apiUrl = `${API_KEY}/account/userSearch`;

      setAuthErr("");
      dispatch(loginStart());
      // console.log("A: 呼ばれた");
      const response = await axios.post(
        apiUrl,
        {
          username: username,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // CORSで認証情報を送る場合
        },
      );
      // console.log("B: response", response.data);
      if (response && response.data.success) {
        setUserId(response.data.userId);
        setAccountOk(true);
        // 成功時のToast通知
        Toast.show({
          type: "success",
          text1: "ユーザー検索成功",
          text2: "アカウントが見つかりました。",
        });
      } else {
        setAuthErr("アカウントが存在しません。");
        mInitalUser();
        dispatch(logout());
        // エラー時のToast通知
        Toast.show({
          type: "error",
          text1: "エラー",
          text2: "アカウントが存在しません。",
        });
      }
    } catch (err: any) {
      console.error("Axios error:", err);
      setAuthErr("サーバーエラーが発生しました。");
      mInitalUser();
      dispatch(logout());
      // サーバーエラー時のToast通知
      Toast.show({
        type: "error",
        text1: "サーバーエラー",
        text2: "問題が発生しました。もう一度お試しください。",
      });
    }
  };

  /**
   * ユーザー検索で名前がありリセットボタンが押された時
   */
  const mPassReset = async () => {
    try {
      const apiUrl = `${API_KEY}/account/resetPassword`;

      const response = await axios.post(
        apiUrl,
        {
          userId: userId,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // CORSで認証情報を送る場合
        },
      );
      // console.log("A: response", response);
      if (response && response.data.success) {
        setAccountOk(false);
        setResetOk(true);
        Toast.show({
          type: "success",
          text1: "パスワードリセット成功",
          text2: "パスワードをリセットしました。",
        });
      } else {
        setAuthErr("パスワードリセット失敗。");
        mInitalUser();
        dispatch(logout());
        Toast.show({
          type: "error",
          text1: "エラー",
          text2: "パスワードリセットできませんでした。",
        });
      }
    } catch (err: any) {
      console.error("Axios error:", err);
      setAuthErr("サーバーエラーが発生しました。");
      mInitalUser();
      dispatch(logout());
      // サーバーエラー時のToast通知
      Toast.show({
        type: "error",
        text1: "サーバーエラー",
        text2: "問題が発生しました。もう一度お試しください。",
      });
    }
  };

  /**
   * 概要: backend側へのログイン処理
   * 引数:
   * 戻り値:
   * 詳細: response の res.Login が true であれば Redux でユーザー状態を更新
   */
  const mLogin = async () => {
    try {
      const apiUrl = `${API_KEY}/account/login`;

      setAuthErr("");
      dispatch(loginStart());
      const response = await axios.post(
        apiUrl,
        {
          address: address,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // CORSで認証情報を送る場合
        },
      );
      // console.log("A", response.data.data.token);
      if (response.data.data.token) {
        // console.log("B", response.data.data.token);
        dispatch(loginSuccess(response.data.data));
        Toast.show({
          type: "success",
          text1: "ログイン成功",
          text2: "ログインできました。",
        });
      } else {
        setAuthErr("アカウントが存在しません。");
        mInitalUser();
        dispatch(loginFailure("アカウントが存在しません。"));
        Toast.show({
          type: "error",
          text1: "ログイン失敗",
          text2: "ログインできませんでした。",
        });
      }
    } catch (err: any) {
      setAuthErr(err.message);
      mInitalUser();
      dispatch(loginFailure(err.message));
      Toast.show({
        type: "error",
        text1: "サーバーエラー",
        text2: "問題が発生しました。もう一度お試しください。",
      });
    }
  };

  /**
   * 概要: backend側へのログアウト処理
   * 引数:
   * 戻り値:
   * 詳細: ユーザー状態を更新
   */
  const mSignOut = async () => {
    try {
      const apiUrl = `${process.env.API_URL2}/account/login`;
      setAuthErr("");
      const response = await axios.post(
        apiUrl,
        { token: loginState.token },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );
      const res = response.data;
      if (res.logout === true) {
        dispatch(logout());
        // Alert.alert("ログアウトしました");
        Toast.show({
          type: "success",
          text1: "ログアウト成功",
          text2: "ログアウト成功しました。",
        });
      } else {
        setAuthErr("ログアウトに失敗しました。");
        Toast.show({
          type: "error",
          text1: "ログアウト失敗",
          text2: "ログアウトできませんでした。",
        });
      }
    } catch (err: any) {
      setAuthErr(err.message);
      mInitalUser();
      dispatch(logout());
      Toast.show({
        type: "error",
        text1: "サーバーエラー",
        text2: "問題が発生しました。もう一度お試しください。",
      });
    }
  };

  // モード切り替え
  const mToggleMode = () => {
    setIsLogin(!isLogin);
    setAuthErr("");
  };

  // 変数初期化
  const mInitalUser = () => {
    setUid("");
    setUserName("");
    setPassword("");
    setEmail("");
  };

  return {
    uid,
    username,
    password,
    email,
    isLogin,
    authErr,
    address,
    setAddress,
    setUid,
    setUserName,
    setPassword,
    setEmail,
    setAuthErr,
    mLogin,
    // mRegister,
    mSignOut,
    mToggleMode,
    accountOk,
    setAccountOk,
    mSearchUser,
    mPassReset,
    resetOk,
    setResetOk,
  };
};
