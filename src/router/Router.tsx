/** @format */
import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import CheckBoxPage from '../components/checkbox/CheckBoxPage';
import { SideNav } from '../components/side-navigation';
import StandardButton from '../pages/buttons/StandardButton';
import TextFieldPage from '../pages/inputPages/TextFieldPage';
import RadioNormal from '../pages/radio/RadioNormal';
import { DropDownSelect } from '../pages/selects/DropDownSelect';
import TablePage from '../pages/tablePages/TablePage';
import TablePagesV1 from '../pages/tablev1/TablePagesV1';
import MenuBoxPages from '../pages/MenuBoxPages';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'textfield',
        element: <TextFieldPage />,
      },
      { path: 'select', element: <DropDownSelect /> },
      { path: 'radio', element: <RadioNormal /> },
      {
        path: 'buttons',
        element: <StandardButton />,
      },
      {
        path: 'checkbox',
        element: <CheckBoxPage />,
      },
      {
        path: 'tablev1',
        element: <TablePagesV1 />,
      },
      {
        path: 'side-navigation',
        element: <SideNav />,
      },
      { path: 'table', element: <TablePage /> },
      {
        path: 'menuBox',
        element: <MenuBoxPages />,
      },
    ],
  },
]);

export default Router;
