import { HTMLInputTypeAttribute } from 'react';

export interface TextFiledProps {
  initialValue?: string;
  readonly?: boolean;
  type?: HTMLInputTypeAttribute;
  onChange: (value: string) => void;
}
