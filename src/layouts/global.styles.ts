import styled from 'styled-components';

export const SGlobalLayout = {
  Wrapper: styled.div`
    z-index: 10;
    width: 100%;
    height: 100%;
    min-height: 100vh;
  `,
  Inner: styled.div`
    padding: 40px 0 0 350px;
  `,
};

export const SGlobalMain = {
  Container: styled.main`
    z-index: 20;
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 80px);

    & h1 {
      font-size: 40px;
      font-weight: bolder;
    }
    & h2 {
      font-size: 32px;
      font-weight: bolder;
    }
    & h3 {
      font-size: 22px;
    }
  `,
  Inner: styled.div`
    width: 100%;
    height: 100%;
    padding: 8px 20px;
  `,
};
