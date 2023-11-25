export const colors = {
  Primary: '#8692FF',
  PrimaryHover: '#6673E7',
  Secondary: '##3B3B3B',
  SecondaryHover: 'black',
  Tertiary: '#E4E4E4',
  Teritary: '#Grey3',
};

export interface StyledButtonProps {
  margin?: string;
  padding?: string;
  borderradius?: string;
  background?: string;
  color?: string;
  hovercolor?: string;
  hoverbackground?: string;
}

export interface StyledBorderButtonProps {
  margin?: string;
  padding?: string;
  borderradius?: string;
  border?: string;
  color?: string;
  background?: string;
  hoverBorder?: string;
  hoverbackground?: string;
}
