import React from 'react';
import ReactDOM from 'react-dom/client';
// THEMES
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/globalStyle';
import GlobalTheme from './theme/globalTheme';
// ROUTER
import { RouterProvider } from 'react-router-dom';
import router from './router/Router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={GlobalTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
