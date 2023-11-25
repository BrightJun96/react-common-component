// 체크박스 옵션에 대한 타입
export interface ICheckBox {
  value: string; // value 값
  label: string; // 라벨 값
  checked: boolean; // 체크 여부
  disabled: boolean; // disabled 여부
}

// state에 대한 타입
export type IData<T> = {
  [key: string]: T[];
};
