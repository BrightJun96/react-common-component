import { useState } from 'react';

import CheckBox from './CheckBox';

export interface ISingleState {
  agree: {
    checked: boolean;
    value: string;
    label: string;
  };
}

const SingleCheckBoxPage = () => {
  const [value, setValue] = useState({ agree: { checked: false, value: 'agree', label: '동의' } });

  return (
    <div>
      <CheckBox checkName="agree" handleChange={setValue} data={value} />
    </div>
  );
};

export default SingleCheckBoxPage;
