import { styled } from 'styled-components';
import { StyledButtonProps, StyledBorderButtonProps } from './types';

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '4px 10px'};
  justify-content: center;
  align-items: center;
  background: ${({ background }) => background || 'white'};
  border-radius: ${({ borderradius }) => borderradius || '4px'};
  color: ${({ color }) => color || 'black'};
  text-align: center;

  &:hover {
    color: ${({ hovercolor }) => hovercolor || 'white'};
    background: ${({ hoverbackground }) => hoverbackground || 'gray'};
  }
  &:active {
  }
`;

export const StyledBorderButton = styled.button<StyledBorderButtonProps>`
  display: inline-flex;
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '4px 10px'};
  justify-content: center;
  align-items: center;
  color: ${({ color }) => color || 'black'};
  background: ${({ background }) => background || 'white'};
  border-radius: ${({ borderradius }) => borderradius || '4px'};
  border: ${({ border }) => border || '1px solid black'};
  text-align: center;
  // type: ${({ type }) => type || 'button'};

  &:hover {
    background: ${({ hoverbackground }) => hoverbackground || 'gray'};
  }
  &:active {
  }
`;

export const TitleFont = styled.p`
  margin-top: 20px;
  font-family: Spoqa Han Sans Neo;
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: -0.04em;
  text-align: left;
`;

export const SubFont = styled.span`
  margin-top: 20px;
  font-family: Spoqa Han Sans Neo;
  font-size: 11px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.04em;
  text-align: left;
`;

export const DetailFont = styled.p`
  margin-top: 20px;
  font-family: Spoqa Han Sans Neo;
  font-size: 10px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.04em;
  text-align: left;
`;
