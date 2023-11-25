import { STextField } from './styles';
import { TextFiledProps } from './types';

export default function TextField(props: TextFiledProps): JSX.Element {
  console.log(props);
  return <STextField.Input />;
}
