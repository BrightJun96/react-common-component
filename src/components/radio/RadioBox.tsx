/** @format */

import React from 'react';
import { STextField } from './styles';
interface IBox {
  children: React.ReactNode;
}

export default function RadioBox({ children }: IBox) {
  return <STextField.RadioBox>{children}</STextField.RadioBox>;
}
