/** @format */

import styled from 'styled-components';

export const STextField = {
  radio: styled.input.attrs({ type: 'radio' })`
    display: none;
    &:checked + label::before {
      width: 9px;
      height: 9px;
      background-color: #fff;
      border: 6px solid #1d1d1d;
    }
    &:checked:hover + label::before {
      background-color: #e4e4e4;
      border: 6px solid #adadad;
    }
    &:disabled + label::before {
      width: 9px;
      height: 9px;
      background-color: #fff;
      border: 6px solid #e4e4e4;
    }
  `,
  label: styled.label<{ $isHover: boolean }>`
    position: relative;
    padding-left: 30px;
    cursor: pointer;

    &::before {
      // 위치
      content: '';
      position: absolute;
      left: 0;
      top: 2px;
      width: 15px;
      height: 15px;
      border: 2px solid #1a1a1a;
      border-radius: 100%;
    }
    &:hover::before {
      border: 2px solid #7d7d7d;
    }
  `,
  RadioBox: styled.fieldset`
    display: flex;
    flex-direction: row;
    gap: 10px;
  `,
  Wrap: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  `,
};
