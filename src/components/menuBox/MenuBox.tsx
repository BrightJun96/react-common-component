import { IMenuBoxProps, IOption } from './types';
import { MenuBoxStyle } from './styles';

import { AiOutlineCheck } from 'react-icons/ai';

const MenuBox: React.FC<IMenuBoxProps> = ({ options, type = 'normal', selected, setSelected, close }) => {
  const handleClick = (option: IOption) => {
    // normal - IOption {}
    // chip - IOption []

    if (Array.isArray(selected)) {
      // chip
      const selectedArray: IOption[] = [...selected];
      const hasOptionIndex = selectedArray?.findIndex((selectedOption) => selectedOption.id === option.id);

      if (hasOptionIndex >= 0) {
        // 옵션이 이미 선택 되어 있으면, 선택 배열에서 제거
        selectedArray.splice(hasOptionIndex, 1);

        // 선택 배열의 길이가 0이면 '선택' 옵션으로 초기화
        if (selectedArray.length === 0) {
          return setSelected([options[0]]);
        }
      } else {
        // 선택되지 않은 옵션 추가

        // 옵션을 추가하면 id===0인 '선택' 옵션 제거
        const zeroOptionIdx = selectedArray.findIndex((opt) => opt.id === 0);
        if (zeroOptionIdx >= 0) {
          selectedArray.splice(zeroOptionIdx, 1);
        }

        selectedArray.push(option);
      }
      // '선택' 옵션을 선택하면, 옵션 초기화
      if (option.id === 0) {
        !!close && close();
        return setSelected([options[0]]);
      }

      setSelected(selectedArray);
    } else {
      // normal type
      setSelected(option);
      !!close && close();
    }
  };
  return (
    <MenuBoxStyle.Box.List>
      {options.map((option: IOption) => (
        <MenuBoxStyle.Box.Item
          key={option.id}
          $isSelected={Array.isArray(selected) && selected?.findIndex((chip) => chip.id === option.id) >= 0}
          onClick={() => handleClick(option)}
        >
          <span>{option.label}</span>
          {type === 'chip' && option.id !== 0 && <AiOutlineCheck />}
        </MenuBoxStyle.Box.Item>
      ))}
    </MenuBoxStyle.Box.List>
  );
};

export default MenuBox;
