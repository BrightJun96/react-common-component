export interface TextFiledProps {
  defaultValue: string;
  readonly: boolean;
  onChange: (value: string) => void;
}

export interface IRadio {
  name: string;
  value: string;
  defaultChecked: boolean;
  disabled: boolean;
}
