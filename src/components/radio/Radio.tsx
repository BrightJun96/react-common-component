/** @format */

import React, { useState } from 'react';
import { STextField } from './styles';
import RadioBox from './RadioBox';
import { IRadio } from './types';
import { useHover } from '../../hooks/useHover';

interface IOptions {
  options: IRadio[];
}

const Radio = ({ options }: IOptions) => {
  const [selectValue, setSelectValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectValue(value);
  };

  const { isHover, handleMouseOver, handleMouseOut } = useHover();
  // console.log(isHover);
  return (
    <RadioBox>
      {options.map((op, idx) => {
        // console.log(op.name, isHover);
        return (
          <STextField.Wrap key={op.value + idx}>
            <STextField.radio
              id={op.value}
              type="radio"
              name={op.name}
              value={op.value}
              disabled={op.disabled}
              onChange={handleChange}
              checked={selectValue === op.value}
            />
            <STextField.label
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              $isHover={isHover}
              htmlFor={op.value}
            >
              {op.name}
            </STextField.label>
          </STextField.Wrap>
        );
      })}
    </RadioBox>
  );
};

export default Radio;
