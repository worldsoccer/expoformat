/**
 * ユーザー情報
 */
export type AuthState = {
  isLoanching: boolean;
  isLoading: boolean;
  error: string | null;
  token: string | null;
  従業員番号: string | null;
  従業員名: string | null;
  パスワード: string | null;
  アドレス: string | null;
  課名: string | null;
  課名2: string | null;
  工程管理: number | null;
};
