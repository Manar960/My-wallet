import ButtomImg from './components/ButImg';
import logo from '../../../assets/images/logo.png';
import { IoIosClose } from 'react-icons/io'; 
import { BiTransferAlt } from 'react-icons/bi';
import { HiOutlineCreditCard } from 'react-icons/hi';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { HiOutlineCalendar } from 'react-icons/hi';
import { MdInsertChartOutlined } from 'react-icons/md';
import { PiChatCircleDots } from 'react-icons/pi';
import { TbSettingsExclamation } from 'react-icons/tb';
import MenuItem from '../../../dashboard/components/Sidebar/components/MenuItem';
const AppSideBar = () => {
  const items = [
    { icon: <MdInsertChartOutlined />, label: 'Dashboard', to: '/dashboard' },
    { icon: <BiTransferAlt />, label: 'Transactions', to: '/transaction' },
    { icon: <HiOutlineCreditCard />, label: 'Cards', to: '#' },
    { icon: <HiOutlineDocumentText />, label: 'Reports', to: '#' },
    { icon: <HiOutlineCalendar />, label: 'Calendar', to: '#' },
    { icon: <TbSettingsExclamation />, label: 'Settings', to: '#' },
    { icon: <PiChatCircleDots />, label: 'Chat', to: '#' }
  ];

  const closeNav = () => {
    const element = document.getElementById('mySidenav');
    if (element) {
      element.style.width = '0';
    }
  };

  return (
    <div id="mySidenav" className="sidenav">
      <aside className="sidebar position-relative d-flex align-items-start rounded-4 flex-column">
        <div className="header ps-3 mt-3">
          <img src={logo} alt="Logo" />
          <span className="description-header fw-bold">Finarium</span>
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
            <IoIosClose />
          </a>
        </div>
        <main className="first-header">
          {items.map((item, index) => (
            <MenuItem key={index} icon={item.icon} name={item.label} to={item.to}  />
          ))}
        </main>
        <ButtomImg />
      </aside>
    </div>
  );
};

export default AppSideBar;
