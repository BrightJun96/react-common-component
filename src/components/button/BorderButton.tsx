import React from 'react';
import { TitleFont, DetailFont, SubFont, StyledButton, StyledBorderButton } from './styles';

export default function BorderButton() {
  return (
    <div>
      <div>
        <TitleFont>Standard Button</TitleFont>
        <DetailFont>
          스탠다드 버튼은 배경색이 fill로 채워진 형태의 버튼이며 사용자가 버튼을 클릭했을 때 이에 따른 액션이 바로
          나타납니다. Hover와 Pressed 상태의 디자인은 같습니다.
        </DetailFont>
        <DetailFont>Primary</DetailFont>
        <SubFont>Enabled && Hover/Pressed</SubFont>
        <StyledButton
          padding="4px 10px"
          margin="24px"
          color="white"
          background="#8692FF"
          hovercolor="white"
          hoverbackground="#6673E7"
        >
          버튼
        </StyledButton>
        <StyledButton
          padding="6px 12px"
          margin="24px"
          color="white"
          background="#8692FF"
          hovercolor="white"
          hoverbackground="#6673E7"
        >
          버튼
        </StyledButton>
        <StyledButton
          padding="8px 14px"
          margin="24px"
          color="white"
          background="#8692FF"
          hovercolor="white"
          hoverbackground="#6673E7"
        >
          버튼
        </StyledButton>
        <DetailFont>Secondary</DetailFont>
        <SubFont>Enabled && Hover/Pressed</SubFont>
        <StyledButton
          padding="4px 10px"
          margin="24px"
          color="white"
          background="#3B3B3B"
          hovercolor="white"
          hoverbackground="black"
        >
          버튼
        </StyledButton>
        <StyledButton
          padding="6px 12px"
          margin="24px"
          color="white"
          background="#3B3B3B"
          hovercolor="white"
          hoverbackground="black"
        >
          버튼
        </StyledButton>
        <StyledButton
          padding="8px 14px"
          margin="24px"
          color="white"
          background="#3B3B3B"
          hovercolor="white"
          hoverbackground="black"
        >
          버튼
        </StyledButton>
      </div>
      <div>
        <TitleFont>Outline Button</TitleFont>
        <DetailFont>
          아웃라인 버튼은 버튼의 배경색이 없고 stroke가 할당된 형태의 버튼이며 사용자가 버튼을 클릭했을 때 이에 따른
          액션이 바로 나타납니다. Hover와 Pressed 상태의 디자인은 같습니다.
        </DetailFont>
        <SubFont>Enabled && Hover/Pressed</SubFont>
        <StyledBorderButton
          padding="4px 10px"
          margin="24px"
          color="#8692FF"
          border="1px solid #8692FF"
          hoverbackground="#F6F6F6"
        >
          버튼
        </StyledBorderButton>
        <StyledBorderButton
          padding="6px 12px"
          margin="24px"
          color="#8692FF"
          border="1px solid #8692FF"
          hoverbackground="#F6F6F6"
        >
          버튼
        </StyledBorderButton>
        <StyledBorderButton
          padding="8px 14px"
          margin="24px"
          color="#8692FF"
          border="1px solid #8692FF"
          hoverbackground="#F6F6F6"
        >
          버튼
        </StyledBorderButton>

        <DetailFont>Secondary</DetailFont>
        <SubFont>Enabled && Hover/Pressed</SubFont>
        <StyledBorderButton
          padding="4px 10px"
          margin="24px"
          color="#3B3B3B"
          border="1px solid #3B3B3B"
          hoverbackground="#F6F6F6"
        >
          버튼
        </StyledBorderButton>
        <StyledBorderButton
          padding="6px 12px"
          margin="24px"
          color="#3B3B3B"
          border="1px solid #3B3B3B"
          hoverbackground="#F6F6F6"
        >
          버튼
        </StyledBorderButton>
        <StyledBorderButton
          padding="8px 14px"
          margin="24px"
          color="#3B3B3B"
          border="1px solid #3B3B3B"
          hoverbackground="#F6F6F6"
        >
          버튼
        </StyledBorderButton>

        <DetailFont>Teritary</DetailFont>
        <SubFont>Enabled && Hover/Pressed</SubFont>
        <StyledBorderButton
          padding="4px 10px"
          margin="24px"
          color="#2E2E2E"
          border="1px solid #E4E4E4"
          hoverbackground="#F6F6F6"
        >
          버튼
        </StyledBorderButton>
        <StyledBorderButton
          padding="6px 12px"
          margin="24px"
          color="#2E2E2E"
          border="1px solid #E4E4E4"
          hoverbackground="#F6F6F6"
        >
          버튼
        </StyledBorderButton>
        <StyledBorderButton
          padding="8px 14px"
          margin="24px"
          color="#2E2E2E"
          border="1px solid #E4E4E4"
          hoverbackground="#F6F6F6"
        >
          버튼
        </StyledBorderButton>
      </div>
    </div>
  );
}
