/** @format */

import { useRef, useState } from 'react';
import Dropdown from '../../components/selects/Dropdown';
import useOutSideClose from '../../components/selects/hooks/useOutSideClose';

interface IDropDown {
  id: string;
  input: boolean;
  isOpen: boolean;
}
// 옵션값
const options = [
  { label: '이옵션1', value: '1' },
  { label: '김옵션2', value: '2' },
  { label: '박옵션3', value: '3' },
  { label: '고옵션4', value: '4' },
  { label: '정옵션4', value: '5' },
  { label: '서옵션4', value: '6' },
  { label: '오옵션4', value: '7' },
];
export const DropDownSelect = () => {
  // 드롭박스값
  const [items, setItems] = useState<IDropDown[]>([{ id: '11', input: true, isOpen: false }]);
  const outSideRef = useRef(null);
  const handleOpen = (id: string) => {
    setItems((prevItems) => {
      return prevItems.map((item) => (item.id === id ? { ...item, isOpen: !item.isOpen } : item));
    });
  };
  const outSideClose = () => {
    console.log('close');
    setItems((prevItems) => {
      return prevItems.map((item) => {
        return { ...item, isOpen: false };
      });
    });
  };

  useOutSideClose(outSideRef, outSideClose);
  return (
    <div ref={outSideRef}>
      <label
        style={{
          fontSize: 'x-large',
          fontWeight: 'bolder',
          marginBottom: '30px',
        }}
        htmlFor="list"
      >
        DropDownsss
      </label>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {items?.map((item) => {
          return (
            <div key={item.id}>
              <Dropdown
                onClickFn={() => handleOpen(item.id)}
                input={item.input}
                option={options}
                isOpen={item.isOpen}
                id={item.id}
                onCloseFn={outSideClose}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
