import { useCallback, useEffect, useState } from 'react';

import MenuBox from './MenuBox';
import { IMenuBoxProps } from './types';
import { MenuBoxStyle } from './styles';
import { IOption } from './types';

const MenuButton: React.FC<{ type?: IMenuBoxProps['type']; options: IMenuBoxProps['options'] }> = ({
  type = 'normal',
  options,
}) => {
  const [selected, setSelected] = useState<IOption | IOption[]>(type === 'chip' ? [options[0]] : options[0]);
  const [onMenu, setOnMenu] = useState<boolean>(false);
  const [label, setLabel] = useState<string>('');

  const closeMenu = () => setOnMenu(false);

  const getLabel = useCallback(() => {
    if (Array.isArray(selected)) {
      // chip
      const labels = selected.map((option) => option.label).join(', ');
      setLabel(labels);
    } else {
      // normal
      setLabel(selected.label);
    }
  }, [selected]);

  useEffect(() => {
    getLabel();
  }, [getLabel]);

  return (
    <section style={{ width: 'auto' }}>
      <MenuBoxStyle.Button.Label onClick={() => setOnMenu((prev) => !prev)}>{label}</MenuBoxStyle.Button.Label>
      {onMenu && (
        <MenuBox type={type} options={options} selected={selected} setSelected={setSelected} close={closeMenu} />
      )}
    </section>
  );
};

export default MenuButton;
