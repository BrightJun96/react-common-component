import { useState } from 'react';
import CheckBoxGroupV2 from './CheckBoxGroupV2';

export interface IValue {
  food: string[];
}

const CheckBoxPageV2 = () => {
  const FOOD = [
    { label: '피자', value: 'pizza', checked: false },
    { label: '치킨', value: 'chicken', checked: false },
    { label: '햄버거', value: 'hamburger', checked: false },
  ];

  const [value, setValue] = useState<IValue>({
    food: [] as string[],
  });

  // async function createOrder() {
  //     await api.post("/order/create", {
  //         food: value.food
  //     })
  // }

  return (
    <>
      <CheckBoxGroupV2 data={FOOD} groupName="food" handleChange={setValue} values={['pizza']} />
    </>
  );
};

export default CheckBoxPageV2;
