import MenuItem from './components/MenuItem';
import logo from '../../../assets/images/logo.png';
import ButtomImg from '../../../layout/components/Aside/components/ButImg';
import { BiTransferAlt } from 'react-icons/bi';
import { MdInsertChartOutlined } from 'react-icons/md';
import { TbSettingsExclamation } from 'react-icons/tb';
import { TbCategory2 } from 'react-icons/tb';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../../context/app-store';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

const Sidebar = () => {
  const navigate = useNavigate();
  const { setUsername, setUserType } = useAppStore();
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const logout = () => {
    setUsername('');
    setUserType('');
    navigate('/login');
  };
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const items = [
    { icon: <MdInsertChartOutlined />, label: 'Dashboard', to: '/dashboard' },
    { icon: <BiTransferAlt />, label: 'Transactions', to: '/transaction' },
    { icon: <TbCategory2 />, label: 'Categories', to: '/categories' },
    { icon: <TbSettingsExclamation />, label: 'Settings', to: '/settings' },
    { icon: <RiLogoutCircleLine />, label: 'Logout', to: '/login', onClick: logout }
  ];

  return (
    <>
      <span className="menu-toggle d-sm-none p-2" onClick={toggleSidebar}>
        <FaBars />
      </span>
      <aside
        id="sidebar"
        className="sidebar bg-white position-relative d-flex align-items-start rounded-4 m-2 flex-column pe-4 shadow-sm d-none d-sm-flex">
        <div className="header ps-4 my-3">
          <img src={logo} alt="" />
          <span className="description-header fw-bold">Finarium</span>
        </div>
        <main className="first-header">
          {items.map((item, index) => (
            <MenuItem
              key={index}
              icon={item.icon}
              name={item.label}
              to={item.to}
              onClick={item.label === 'Logout' ? logout : undefined}
            />
          ))}
        </main>
        <ButtomImg />
      </aside>
    </>
  );
};

export default Sidebar;
