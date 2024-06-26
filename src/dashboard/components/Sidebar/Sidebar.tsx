import MenuItem from './components/MenuItem';
import logo from '../../../assets/images/logo.png';
import ButtomImg from '../../../layout/components/Aside/components/ButImg';
import { BiTransferAlt } from 'react-icons/bi';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { HiOutlineCalendar } from 'react-icons/hi';
import { MdInsertChartOutlined } from 'react-icons/md';
import { PiChatCircleDots } from 'react-icons/pi';
import { TbSettingsExclamation } from 'react-icons/tb';
import { TbCategory2 } from 'react-icons/tb';

const Sidebar = () => {
  const items = [
    { icon: <MdInsertChartOutlined />, label: 'Dashboard', to: '/dashboard' },
    { icon: <BiTransferAlt />, label: 'Transactions', to: '/transaction' },
    { icon: <TbCategory2 />, label: 'Categories', to: '/categories' },
    { icon: <HiOutlineDocumentText />, label: 'Reports', to: '#' },
    { icon: <HiOutlineCalendar />, label: 'Calendar', to: '#' },
    { icon: <TbSettingsExclamation />, label: 'Settings', to: '#' },
    { icon: <PiChatCircleDots />, label: 'Chat', to: '#' }
  ];

  return (
    <aside
      id="sidebar"
      className="sidebar bg-white position-relative d-flex align-items-start rounded-4 m-2 flex-column pe-4 shadow-sm ">
      <div className="header ps-4 my-3">
        <img src={logo} alt="" />
        <span className="description-header fw-bold">Finarium</span>
      </div>
      <main className="first-header">
        {items.map((item, index) => (
          <MenuItem key={index} icon={item.icon} name={item.label} to={item.to} />
        ))}
      </main>
      <ButtomImg />
    </aside>
  );
};

export default Sidebar;
