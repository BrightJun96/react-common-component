import styled from 'styled-components';

export const SFooter = {
  Container: styled.footer`
    z-index: 30;
    position: relative;
    width: 100%;
    height: 40px;
    padding: 8px 20px;
    border-top: 1px solid ${({ theme }) => theme.color.gray._4};
  `,
  Bottom: styled.div`
    text-align: right;
  `,
  Copyright: styled.span`
    color: ${({ theme }) => theme.color.text.main};
  `,
};
