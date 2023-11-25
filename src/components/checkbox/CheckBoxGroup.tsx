import { Dispatch, SetStateAction } from 'react';
import { UICheckBox } from './styles';
import { ICheckBox, IData } from './types';

/*
Feature
1. 상위 컴포넌트에서 체크박스 옵션 상태값을 선언
2. values값을 추출하기 위해서는 특정 로직으로 구현하여 추출해야함.
3. 체크된 values값을 할당하기 위해서 처음 체크박스에 대한 옵션값을 줄 때, options에서 checked 값을 할당해주면 됨.
4. options를 초기화해야하는 초기화 버튼이 있다고 했을 때, 상위 컴포넌트에서 처리 가능
*/

interface Props<T extends ICheckBox> {
  data: IData<T>;
  setData: Dispatch<SetStateAction<IData<T>>>;
  groupName?: string;
}

// 유동적으로 넘겨줄 값이 있다면 props로 전달
const stylesOption = {
  flexdirection: 'column', // 체크박스 나열 방향
  itemgap: 10, // 체큽박스간 간격
  wrapperwidth: 1000, // 체크박스 컨테이너 너비
  labelcolor: '#3B3B3B', // 라벨 색상
  fontsize: 12, // 라벨 사이즈
  boxsize: 20, // 체크박스 사이즈
  checkedcolor: 'teal', // 체크되었을 때, 색상
};

function CheckBoxGroup<T extends ICheckBox>(p: Props<T>) {
  const { data, setData, groupName} = p;

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, checked, name } = e.target as HTMLInputElement;

    setData((p) => ({
      ...p,
      [name]: data[name].map((o) => ({ ...o, checked: o.value === value ? checked : o.checked })),
    }));
  }


  return (
    <UICheckBox.Wrapper
      itemgap={stylesOption.itemgap}
      wrapperwidth={stylesOption.wrapperwidth}
      flexdirection={stylesOption.flexdirection}
    >
      {groupName&&data.hasOwnProperty(groupName)
        ? data[groupName].map((o, i) => (
            <UICheckBox.Label key={i} fontSize={stylesOption.fontsize} labelcolor={stylesOption.labelcolor}>
              <UICheckBox.Check
                name={groupName}
                value={o.value}
                onChange={onChange}
                checked={o.checked}
                boxsize={stylesOption.boxsize}
                checkedcolor={stylesOption.checkedcolor}
                disabled={o.disabled}
              />
              <UICheckBox.Text>{o.label}</UICheckBox.Text>
            </UICheckBox.Label>
          ))
        : null}
    </UICheckBox.Wrapper>
  );
}

export default CheckBoxGroup;
