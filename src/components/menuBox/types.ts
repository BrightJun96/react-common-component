export interface IOption {
  id: number;
  label: string;
  value: string;
}
export interface IMenuBoxProps {
  options: IOption[];
  type?: 'normal' | 'chip';
  selected: IOption | IOption[];
  setSelected: React.Dispatch<React.SetStateAction<IOption | IOption[]>>;
  close?: () => void;
}
