/* eslint-disable react-hooks/rules-of-hooks */
/** @format */

import React, { useEffect, useRef, useState } from 'react';
import { SSelectField } from './styles';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import DropdownList from './DropdownList';
import { IOptions } from './types';
// import useDropdown from "./hooks/useDropdown";
// import useOutSideClose from "./hooks/useOutSideClose";

// 임시 데이터

interface IDrop {
  input: boolean;
  isOpen: boolean;
  option: IOptions[];
  id?: string;
  onClickFn: (id: string) => void;
  onCloseFn: () => void;
}

export default function Dropdown({ id, option, input, isOpen, onClickFn, onCloseFn }: IDrop) {
  const outSideRef = useRef(null);
  const [query, setQuery] = useState<{ value: string }>({
    value: '',
  });

  useEffect(() => {}, []);
  // Click Open Options
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery({
      value: e.currentTarget.value,
    }); // 오픈 함수
  };

  const selectItem = (e: React.MouseEvent<HTMLLIElement>) => {
    const { textContent } = e.currentTarget;
    setQuery({ value: textContent as string });
    onCloseFn();
  };

  return (
    <SSelectField.Container ref={outSideRef}>
      <SSelectField.inputBox>
        <label htmlFor="list-choice">
          <SSelectField.searchInput
            onClick={() => onClickFn(id as string)}
            readOnly={!input ? true : false}
            $input={!input}
            list="list"
            id={id} // 검색어 필터링
            name="value"
            value={query.value ?? ''}
            onChange={handleChange}
            placeholder="옵션 선택"
          />
        </label>

        <button onClick={() => onClickFn(id as string)}>
          {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </button>
      </SSelectField.inputBox>
      {isOpen ? (
        <DropdownList
          id={id?.toString()}
          input={input} // 인풋
          query={query.value ?? ''} // 검색어 필터링
          options={option} // 옵션리스트
          clickFn={selectItem} // 아이템 클릭시 발동하는 이벤트 함수
          onList={isOpen as boolean} // 리스트를 클릭해서 열고 닫을때 필요한 변수
        />
      ) : null}
      {/* 데이터 리스트 */}
    </SSelectField.Container>
  );
}
