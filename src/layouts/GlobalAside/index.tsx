import { SideNav } from '../../components/side-navigation';
import { SAside, SNav } from './styles';

export default function GlobalAside() {
  return (
    <SAside.Container>
      <SAside.Inner>
        <SNav.Root>
          <SideNav />
        </SNav.Root>
      </SAside.Inner>
    </SAside.Container>
  );
}
