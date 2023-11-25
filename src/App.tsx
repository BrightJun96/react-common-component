import { Outlet } from 'react-router-dom';
import GlobalAside from './layouts/GlobalAside';
import GlobalFooter from './layouts/GlobalFooter';
import GlobalHeader from './layouts/GlobalHeader';
import { SGlobalLayout as SLayout, SGlobalMain as SMain } from './layouts/global.styles';

export default function App(): React.ReactElement {
  return (
    <SLayout.Wrapper>
      <GlobalHeader />
      <GlobalAside />
      {/* <SideNav/> */}
      <SLayout.Inner>
        <SMain.Container>
          <SMain.Inner>
            <Outlet />
          </SMain.Inner>
        </SMain.Container>
        <GlobalFooter />
      </SLayout.Inner>
    </SLayout.Wrapper>
  );
}
