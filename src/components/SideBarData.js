import { FaCartPlus, FaEnvelopeOpenText } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { IoIosPaper, IoMdPeople, IoMdHelpCircle } from 'react-icons/io';

const SideBarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIosPaper />,
    cName: 'nav-text',
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaCartPlus />,
    cName: 'nav-text',
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoMdPeople />,
    cName: 'nav-text',
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaEnvelopeOpenText />,
    cName: 'nav-text',
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoMdHelpCircle />,
    cName: 'nav-text',
  },
];

export default SideBarData;
