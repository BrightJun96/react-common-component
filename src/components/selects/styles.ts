import styled from 'styled-components';

export const SSelectField = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    label {
      font-size: x-large;
      font-weight: bolder;
      margin-bottom: 10px;
    }
  `,
  searchBox: styled.div`
    width: 100%;
  `,
  inputBox: styled.div`
    border: 1px solid #eaeaea;
    padding: 4px 12px;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    label {
      display: flex;
      flex-direction: row;
      margin: 0;
    }
    svg {
      cursor: pointer;
    }
  `,
  searchInput: styled.input<{ $input: boolean }>`
    width: 90%;
    height: 100%;
    &::placeholder {
      color: #a1a1a1;
      color: ${(props) => (props.$input ? '#000' : '#a1a1a1')};
    }
  `,
  // input창에 포커스가 가면 이렇게 됨

  // prettier-ignore
  Dropdown: styled.ul<{ $onSearch?: boolean }>`
    display: ${(props) => (props.$onSearch  ? "flex" : "none")};
    border: 1px solid #eaeaea;
    border-radius: 4px;
    flex-direction: column;
   
    height: max-content;
    max-height: 130px;
    margin-top: 5px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    `,
  // prettier-ignore
  Item: styled.li<{ $hover: boolean}>`
    width: 100%;
    height: 40px;
    padding: 10px 12px;

    span {
      font-size: 14px;
    }

    &:hover {
      background-color: ${(props) => (props.$hover ? "#eaeaea" : "")};
    }
  `,
};
