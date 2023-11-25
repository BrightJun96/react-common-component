import { SContents, SSection } from './styles';
import { DisplaySectionPops } from './types';

export default function DisplaySection(props: DisplaySectionPops) {
  return (
    <SSection.Container>
      <SSection.Top>
        <SSection.Title>{props.title}</SSection.Title>
        <SSection.Description>{props.description}</SSection.Description>
      </SSection.Top>
      <SContents>{props.children && props.children}</SContents>
    </SSection.Container>
  );
}
