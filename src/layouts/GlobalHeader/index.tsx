import { useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';
import profile from "./Fill.svg";
import { SHeader } from './styles';
export default function GlobalHeader() {
const [open,setOpen] =  useState(false)
  return (
    <SHeader.Container height='40px' boxshadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'>
      <SHeader.Inner>
        <SHeader.Logo to="/">COMPONENT</SHeader.Logo>
        <SHeader.Profile>
          <SHeader.ProfileIMG src={profile} width='25px' height='25px'/>
          <SHeader.ArrowBox
            onClick={() => setOpen((p) => !p)}
            color='white'
          >
            <SlArrowDown/>
          </SHeader.ArrowBox>
        </SHeader.Profile>
      </SHeader.Inner>
      {open?<SHeader.LogoutBox>로그아웃</SHeader.LogoutBox>:null}
    </SHeader.Container>
  );
}
