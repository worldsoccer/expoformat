// 営業データ
export type SalesData = {
  id: number;
  行番号: number;
  登録日: string | null;
  注番: string | null;
  枝番: string | null;
  図番: string | null;
  客先: string | null;
  製品名: string | null;
  材質: string | null;
  処理: string | null;
  数量: string | null;
  金額: string | null;
  納期: string | null;
  完了日: string | null;
};

// z番号データ
export type zNumberData = {
  id: number;
  行番号: number;
  登録日: string | null;
  Z番号: string | null;
  枝番: string | null;
  図番: string | null;
  製品名: string | null;
  材質: string | null;
  処理: string | null;
  数量: string | null;
  金額: string | null;
  納期: string | null;
  完了日: string | null;
};

// 完成工数データ
export type completedWorkData = {
  id: number;
  登録日: string | null;
  注番: string | null;
  枝番: string | null;
  図番: string | null;
  客先: string | null;
  製品名: string | null;
  材質: string | null;
  処理: string | null;
  数量: string | null;
  金額: string | null;
  納期: string | null;
  完了日: string | null;
};

// 材料発注データ
export type materialData = {
  id: number;
  行番号: number;
  番号: string | null;
  図番: string | null;
  品名: string | null;
  材質: string | null;
  規格: string | null;
  厚: string | null;
  幅: string | null;
  長: string | null;
  数量: string | null;
  単価: string | null;
  価格: string | null;
  発注先: string | null;
  納期: string | null;
  備考: string | null;
  手配日: string | null;
};

// 工程管理データ
export type ProcessManagement = {
  管理ID: number;
  関連ID: number;
  関連タイプ: "完成工数" | "Z番号データ" | "営業データ";
  完了済みフラグ: 0 | 1 | 2;
  NCプログラム完了フラグ: 0 | 1 | 2;
  検査完了フラグ: 0 | 1 | 2;
  バリ取り完了フラグ: 0 | 1 | 2;
  不良フラグ: 0 | 1 | 2;
  工程詳細?: ProcessDetail[]; // `工程詳細`は複数の工程詳細を持つことができる
};

export type ProcessDetail = {
  詳細ID: number;
  管理ID: number;
  工程タイプ: "前工程" | "後工程" | "処理" | "焼き" | "他加工";
  他加工: string | null;
  機械ID: number | null;
  処理ID: number | null;
  加工開始: string | null;
  加工終了: string | null;
  加工時間: string | null;
  従業員番号: string | null;
  完了済み: 0 | 1 | 2;
  更新日: string | null;
};

// 機械の詳細
export type Machine = {
  id: number;
  機械名: string;
  工程管理対象: 0 | 1;
  ストロークX: number | null;
  ストロークY: number | null;
  ストロークZ: number | null;
  デカバイス最大幅: number | null;
  バイス最大幅: number | null;
  工具収納本数: number | null;
  最大回転数: number | null;
};

// 工場情報
export type Factory = {
  工場番号: number;
  工場名: string;
};

// 材質
export type LumberQuality = {
  id: number;
  材質: string;
};

// 材料発注先
export type MaterialSupplier = {
  id: number;
  発注先: string;
};

// 処理
export type Processing = {
  id: number;
  処理: string;
};

// 営業客先
export type SalesCustomer = {
  id: number;
  客先: string;
};

// 従業員
export type Employee = {
  従業員番号: string | null;
  従業員名: string | null;
  課名: string | null;
  課名2: string | null;
  管理職: string | null;
  アドレス: string | null;
  パスワード: string | null;
  更新日: string | null;
  アカウントロック: string | null;
  在籍ステータス: "在籍" | "退職" | null;
};

// 材料管理
export type MaterialManagement = {
  材料管理ID: number;
  材料発注ID: number | null;
  工程管理ID: number | null;
  工場番号: number | null;
  エリア: string | null; // char(1)に対応
  指定位置: number | null;
  数量: number;
  在庫ステータス: "未使用" | "使用中" | "加工完了" | "廃棄";
  不良フラグ: boolean;
  再手配フラグ: boolean;
  最終更新日時: string | null; // datetimeに対応
};

// 持出管理
export type MaterialCheckoutManagement = {
  持出番号: number;
  材料管理ID: number | null;
  持出日: string | null; // dateに対応
  使用数: number | null;
  従業員番号: string | null;
  持出理由: string | null;
  返却予定日: string | null; // dateに対応
  返却状況: "未返却" | "返却済" | "返却不要";
  不良処理: string | null;
};
