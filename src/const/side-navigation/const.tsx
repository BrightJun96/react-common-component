import { AiFillCheckCircle, AiOutlineTable, AiOutlineMenu } from 'react-icons/ai';
import { BiRadioCircleMarked, BiSelectMultiple, BiSolidNavigation, BiTable } from 'react-icons/bi';
import { BsChatLeftTextFill } from 'react-icons/bs';
import { MdTouchApp } from 'react-icons/md';

export const menus = [
  {
    depth1: 'CHECKBOX', // 상위 뎁스 TEXT
    icon: <AiFillCheckCircle />, // ICON
    depth2: [
      // 하위 뎁스 TEXT
      { name: 'CHECKBOX', path: '/checkbox' },
    ],
    open: false, // 여닫기 여부
  },
  {
    depth1: 'SIDENAVIGATION',
    icon: <BiSolidNavigation />,
    depth2: [{ name: 'SIDENAVIGATION', path: '/side-navigation' }],
    open: false,
  },
  {
    depth1: 'TEXT FIELD',
    icon: <BsChatLeftTextFill />,
    depth2: [{ name: 'TEXT FIELD', path: '/textfield' }],
    open: false,
  },
  {
    depth1: 'SELECT',
    icon: <BiSelectMultiple />,
    depth2: [{ name: 'SELECT', path: '/select' }],
    open: false,
  },
  {
    depth1: 'BUTTON',
    icon: <MdTouchApp />,
    depth2: [{ name: 'BUTTON', path: '/buttons' }],
    open: false,
  },
  {
    depth1: 'RADIO',
    icon: <BiRadioCircleMarked />,
    depth2: [{ name: 'RADIO', path: '/radio' }],
    open: false,
  },
  {
    depth1: 'TABLE',
    icon: <AiOutlineTable />,
    depth2: [{ name: 'TABLE', path: '/table' }],
  },
  {
    depth1: 'TABLEV1',
    icon: <BiTable />,
    depth2: [{ name: 'TABLEV1', path: '/tablev1' }],
  },
  {
    depth1: 'MENUBOX',
    icon: <AiOutlineMenu />,
    depth2: [{ name: 'MENUBOX', path: '/menuBox' }],
    open: false,
  },
];
