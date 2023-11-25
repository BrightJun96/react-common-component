/** @format */

import React from 'react';
import Radio from '../../components/radio/Radio';

type TRadio = {
  name: string;
  value: string;
  defaultChecked: boolean;
  disabled: boolean;
};

//prettier-ignore
const Radios3: TRadio[] = [
  { name: "나비 케이타",value: "FcHospital",defaultChecked: true,disabled: false},
  { name: "에릭 다이어", value: "subiMote",defaultChecked: false,disabled: true},
  { name: "해리 맥과이어",value: "subitheMote", defaultChecked: false, disabled: false },
  { name: "삼비 로콩가",  value: "GyandMote", defaultChecked: false, disabled: false },
];
const RadioNormal = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ fontSize: '40px', fontWeight: 'bolder' }}>RADIO</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Radio options={Radios3} />
      </div>
    </div>
  );
};

export default RadioNormal;
