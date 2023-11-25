import styled from 'styled-components';

export const UICheckBox = {
  Wrapper: styled.div<{
    wrapperwidth?: number;
    itemgap?: number;
    flexdirection?: string;
  }>`
    display: flex;
    flex-direction: ${(props) => props.flexdirection || 'row'};
    gap: ${(props) => `${props.itemgap}px` || '10px'};
    width: ${(props) => `${props.wrapperwidth}px` || '100%'};
  `,
  Label: styled.label<{
    labelcolor?: string;
    fontSize?: number;
  }>`
    display: flex;
    align-items: center;
    color: ${(props) => props.labelcolor || '#3B3B3B'};
    font-size: ${(props) => `${props.fontSize}px` || '12px'};
    cursor: pointer;
  `,
  Check: styled.input.attrs({ type: 'checkbox' })<{
    boxsize?: number;
    checkedcolor?: string;
  }>`
    cursor: pointer;
    width: ${(props) => `${props.boxsize}px` || '12px'};
    height: ${(props) => `${props.boxsize}px` || '12px'};
    accent-color: ${(props) => props.checkedcolor || '#3B3B3B'};
  `,
  Text: styled.p`
    margin-left: 5px;
  `,
};
