import styled from 'styled-components';
import { UploadLabelProps } from './types';

export const SDropField = {
  FileUploadContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  FileInput: styled.input`
    display: none;
  `,

  UploadLabel: styled.label<UploadLabelProps>`
    width: 125px;
    height: 100px;
    background-color: #f6f6f6;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 13px;
    color: #333;
    user-select: none;
    &:hover {
      border: ${(props) => (props.selectedImage ? null : '1px solid black')};
      opacity: ${(props) => (props.selectedImage ? 0.5 : null)};
    }
  `,
  UploadedImage: styled.img`
    max-width: 100%;
    max-height: 100%;
  `,
};
export const PictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PictureFont = styled.p``;

export const TrashContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Button = styled.button`
  cursor: wait;
  border: none;
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  background: none;
  padding: 0;
  svg {
    height: 1em;
  }
`;
export const SubFont = styled.span`
  margin-top: 20px;
  font-family: Spoqa Han Sans Neo;
  font-size: 13px;
  font-weight: 400;
  color: #7d7d7d;
  line-height: 16px;
  letter-spacing: -0.04em;
  text-align: left;
`;
