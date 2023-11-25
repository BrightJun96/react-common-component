import { useState } from 'react';
// import CheckBoxGroup from './CheckBoxGroup';
import { CheckBox } from '.';
import { ICheckBox, IData } from './types';

const FOOD: ICheckBox[] = [
  { label: '피자', value: 'pizza', checked: true, disabled: true },
  { label: '치킨', value: 'chicken', checked: false, disabled: false },
  { label: '햄버거', value: 'hamburger', checked: false, disabled: true },
];

const AGREE = [{ label: '동의', value: 'agree', checked: false, disabled: false }];

const CheckBoxPage = () => {
  const [data, setData] = useState<IData<ICheckBox>>({
    food: FOOD,
    agree: AGREE,
  });

  // option값중 values값만 추출하기 위한 함수
  //     function substractValues(data:ICheckBox[]) {

  //         data.reduce((acc,o) => o.checked?[...acc,o.value]:acc,[] as string[] )

  // }

  // 서버로 체크박스 values값만 보내고 싶을 때...
  // async function createOrder() {
  //     await api.post("/order/create", {
  //         food: substractValues(data.food)
  //     })
  // }

  console.log('data :', data);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
      }}
    >
      <div>
        <h1 style={{ margin: 10 }}>여러개 사용시</h1>
        <CheckBox data={data} setData={setData} groupName="food" />
      </div>
      <div>
        <h1 style={{ margin: 10 }}>단일 사용시</h1>
        <CheckBox data={data} setData={setData} groupName="agree" />
      </div>
    </div>
  );
};

export default CheckBoxPage;
