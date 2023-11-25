import { SSelectField } from './styles';
import { IProps } from './types';
import { useHover } from '../../hooks/useHover';

export default function DropdownList(props: IProps) {
  // hover
  const { isHover, handleMouseOver, handleMouseOut } = useHover();

  return (
    <>
      <SSelectField.Dropdown id="list" $onSearch={props.onList}>
        {props.options.map((item) => {
          if (props.input) {
            return item.label.includes(props.query) ? (
              <SSelectField.Item
                $hover={isHover}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                onClick={props.clickFn}
                key={`${item.label}`}
                value={item.value}
              >
                <p>{item.label}</p>
              </SSelectField.Item>
            ) : null;
          } else {
            return (
              <SSelectField.Item
                $hover={isHover}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                onClick={props.clickFn}
                key={`${item.label}`}
                value={item.value}
              >
                <p>{item.label}</p>
              </SSelectField.Item>
            );
          }
        })}
      </SSelectField.Dropdown>
    </>
  );
}
