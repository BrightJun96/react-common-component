import { ChangeEvent, useState } from 'react';
import { STextField } from './styles';
import { TextFiledProps } from './types';

export default function TextField(props: TextFiledProps): JSX.Element {
  const initialAttributes = {
    readOnly: props.readonly ?? false,
    type: props.type ?? 'text',
  };
  const initialValue = props.initialValue ?? '';

  const [value, setValue] = useState(initialValue);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;
  }

  return <STextField.Input {...initialAttributes} value={value} onChange={handleChange} />;
}
