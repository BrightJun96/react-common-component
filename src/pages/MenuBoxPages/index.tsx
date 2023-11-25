import { useState } from 'react';

import { MenuBox, MenuButton } from '../../components/menuBox';
import { IOption } from '../../components/menuBox/types';

const options: IOption[] = [
  { id: 0, label: '선택', value: 'option0' },
  { id: 1, label: '옵션1', value: 'option1' },
  { id: 2, label: '옵션2', value: 'option2' },
  { id: 3, label: '옵션3', value: 'option3' },
  { id: 4, label: '옵션4', value: 'option4' },
];

const MenuBoxPages = (): JSX.Element => {
  const [normalSelected, setNormalSelected] = useState<IOption | IOption[]>(options[0]);
  const [chipSelected, setChipSelected] = useState<IOption | IOption[]>([options[0]]);

  return (
    <section style={{ width: '90vw' }}>
      <h1>MenuBox</h1>
      <div style={{ display: 'grid', gap: '10px', gridTemplateColumns: '50% 50%' }}>
        <div>
          <h3>Normal</h3>
          <MenuBox options={options} selected={normalSelected} setSelected={setNormalSelected} />
          선택한 항목: {JSON.stringify(normalSelected)}
        </div>
        <div>
          <h3>Chip</h3>
          <MenuBox options={options} type="chip" selected={chipSelected} setSelected={setChipSelected} />
          선택한 항목: {JSON.stringify(chipSelected)}
        </div>
      </div>
      <div style={{ display: 'grid', gap: '10px', gridTemplateColumns: '50% 50%', marginTop: '50px' }}>
        <div>
          <h3>Normal</h3>
          <MenuButton options={options} />
        </div>
        <div>
          <h3>Chip</h3>
          <MenuButton type="chip" options={options} />
        </div>
      </div>
    </section>
  );
};

export default MenuBoxPages;
