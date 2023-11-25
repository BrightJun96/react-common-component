import React, { Dispatch, SetStateAction } from 'react';
import { ISingleState } from './SingleCheckBoxPage';

interface Props {
  checkName: string;
  handleChange: Dispatch<SetStateAction<ISingleState>>;
  data: ISingleState;
}

const CheckBox = (p: Props) => {
  const { checkName, handleChange, data } = p;

  // const [option,setOption] = useState({checked:false,label:"테스트",value:"test"})

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, checked, name } = e.target as HTMLInputElement;

    // setOption((o) => ({...o,checked,value}))
    handleChange((p) => ({ ...p, [name]: { ...p[name], checked, value } }));
  }

  console.log('data :', data);

  // useEffect(() => {
  //     handleChange((p) => ({
  //         ...p, [checkName]: {
  //             checked: option.checked,
  //             value:option.value
  //     }}))
  // },[option])

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name={checkName}
          value={data[checkName].value}
          checked={data[checkName].checked}
          onChange={onChange}
        />
        {data[checkName].label}
      </label>
    </div>
  );
};

export default CheckBox;
