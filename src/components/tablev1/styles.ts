import styled, { css } from 'styled-components';
import { TBProps, THProps } from './types';

export const TableStyles = {
  TableComponent: styled.table`
    border: 1px solid black;

    // global table column
    & td,
    & th {
      padding: 10px 20px;
      border: 1px solid black;
    }
  `,
  // 테이블 헤더, 속성 이름 row
  THeader: styled.thead<THProps>`
    border: 1px solid black;
    ${(props) => css`
      ${props.th_style}
    `}
  `,
  // data rows(contents)
  TBody: styled.tbody<TBProps>`
    ${(props) => css`
      ${props.tb_style}
    `}
  `,
  // data column
  Cell: styled.td``,
};
