import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SHeader = {
  Container: styled.header<{ height?: string, bgcolor?: string, boxshadow?: string; }>`
    z-index: 40;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: ${(props) => props.height||"40px"};
    background-color: ${({ theme, bgcolor }) => bgcolor || theme.color.solid.black};
    box-shadow:  ${({boxshadow}) => boxshadow || "rgba(0, 0, 0, 0.24) 0px 3px 8px"} ;
  `,
  Inner: styled.div`
    position: relative;
    width: 100%;
    padding: 8px 20px;
    display: flex;
    justify-content: space-between;
  `,
  Logo: styled(Link)`
    display: block;
    width: 90px;
    height: 24px;
    background-color: ${({ theme }) => theme.color.gray._1};
    text-indent: -9999px;

    img {
      width: 100%;
    }
  `,
  Profile: styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
  `,
  ProfileIMG: styled.img<{
    width?: string;
    height?: string;
  }>`
  width: ${({ width }) => width || "25px"};
  height: ${({ height }) => height || "25px"};
  `
  ,
  ArrowBox: styled.button<{color?:string}>`
    color: ${({color}) => color||"white" };
  `,
  LogoutBox: styled.button`
    position: fixed;
    z-index: 41;
    top: 35px;
    right: 20px;
    width: 80px;
    height: 40px;
    border-radius: 4px;
    background-color: white;
    border:1px solid var(--Grey4, #E4E4E4);
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.08);
    color: black;
    &:hover{
    background-color:  ${({ theme }) => theme.color.gray._5};
    /* opacity: 0.9; */
    }
  `
};
