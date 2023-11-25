import styled from 'styled-components';

export const MenuBoxStyle = {
  Button: {
    Label: styled.div`
      padding: 10px 14px;
      border: 1px solid grey;
      border-radius: 4px;
    `,
  },
  Box: {
    List: styled.ul`
      padding: 4px 0;
      border: 1px solid grey;
      border-radius: 4px;
    `,
    Item: styled.li<{ $isSelected: boolean }>`
      min-width: auto;
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 10px 12px;

      & span {
        color: black;
        font-size: 15px;
        font-weight: 500;
      }
      & svg {
        height: 0.9em;
        visibility: ${(props) => (props.$isSelected ? 'visible' : 'hidden')};
      }

      &:hover {
        background: grey;
      }
    `,
  },
};
