export interface IProps {
  options: IOptions[];
  onList: boolean;
  clickFn: (e: React.MouseEvent<HTMLLIElement>) => void;
  query: string;
  input: boolean;
  id?: string;
}
export interface IProps2 {
  options: IOptions[];
  onList: boolean;
  clickFn: (e: React.MouseEvent<HTMLLIElement>) => void;
  query: string;
  input: boolean;
  id?: string;
}
export interface IOptions {
  label: string;
  value: string;
}
export interface IDropDown {
  id: string;
  input: boolean;
  isOpen: boolean;
  selectValue: string;
}
