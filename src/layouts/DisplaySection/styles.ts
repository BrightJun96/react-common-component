import styled, { css } from 'styled-components';

export const SSection = {
  Container: styled.section`
    display: flex;
    flex-direction: column;
    gap: 48px;
    width: 100%;
  `,
  Top: styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
  `,
  Title: styled.h2`
    font-size: 40px;
  `,
  Description: styled.p`
    font-size: 10px;
  `,
};

const tableCss = css`
  width: 100%;

  thead {
    tr {
      th {
        padding: 20px 0;
        border-bottom: 1px solid ${({ theme }) => theme.color.gray._4};
        text-align: left;
      }
    }
  }

  tbody {
    tr {
      td {
        padding: 16px 0;
      }
    }
  }
`;

export const SContents = styled.div`
  /* 하위 테이블에 대해서만 스타일링 적용 */
  > table {
    ${tableCss}
  }
`;
