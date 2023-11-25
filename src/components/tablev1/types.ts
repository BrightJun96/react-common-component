import { CSSObject } from 'styled-components';

// style
export interface THProps {
  th_style: CSSObject;
}

export interface TBProps {
  tb_style: CSSObject;
}

// data
export default interface tableData {
  id: number;
  author: string;
  content: string;
  category: string;

  // RTable에서 배열의 인덱스로 tableData 값을 사용할 때, 아래 설정이 없으면 에러
  // arrayIndex
  [key: string]: string | number;
}

export interface IColumn {
  label: string;
  keyValue: string;
  Cell: (data: { data: string }) => JSX.Element;
}

export interface IRTable {
  data: tableData[];
  columns: IColumn[];
  styles: { [key: string]: CSSObject };
}
