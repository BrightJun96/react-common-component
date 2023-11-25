import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { IValue } from '../CheckBoxPage';
import { ICheckBox } from '../types';

/*
Feature
1. 컴포넌트 내부에서 체크박스 옵션 상태값을 선언
2. 컴포넌트 내부에서 알아서 체크된 value값만 추출하여 상위 컴포넌트에서 state
3. 체크된 values값을 할당하기 위해서 , 상위 컴포넌트에서 props로 values값을 할당해주면 됨.
4. options를 초기화해야하는 초기화 버튼이 있다고 했을 때, 상위 컴포넌트에서 처리 불가능(options 상태값이 컴포넌트 내부에 있기 때문)

*/

interface Props {
  data: ICheckBox[];
  groupName?: string;
  handleChange: Dispatch<SetStateAction<IValue>>;
  values?: string[];
}

const CheckBoxGroupV2 = (p: Props) => {
  const { data, groupName, handleChange, values } = p;
  const [options, setOptions] = useState(data);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, checked } = e.target as HTMLInputElement;

    setOptions(options.map((o) => ({ ...o, checked: o.value === value ? checked : o.checked })));
  }

  useEffect(() => {
    if (!values) return;

    if (values.length > 0) {
      setOptions(options.map((o) => (values.includes(o.value) ? { ...o, checked: true } : { ...o })));
    } else {
      setOptions(data);
    }
  }, []);

  useEffect(() => {
    if (!groupName) {
      return;
    }
    handleChange((p) => ({
      ...p,
      [groupName]: options.reduce((acc, o) => (o.checked ? [...acc, o.value] : acc), [] as string[]),
    }));
  }, [options]);

  return (
    <div>
      {options.map((o, i) => (
        <label key={i}>
          <input type="checkbox" name={groupName} value={o.value} onChange={onChange} checked={o.checked} />
          {o.label}
        </label>
      ))}
    </div>
  );
};

export default CheckBoxGroupV2;
