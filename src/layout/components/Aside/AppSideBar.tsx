import MenuItem from './components/MenuItem';
import ButtomImg from './components/ButImg';
import logo from '../../../assets/images/logo.png';
import { IoIosClose } from 'react-icons/io';

const AppSideBar = () => {
  const items = [
    { icon: '➡️', label: 'Dashboard', to: '/dashboard' },
    { icon: '☰', label: 'Transactions', to: '/transaction' },
    { icon: '⬆️', label: 'Cards', to: '#' },
    { icon: '☰', label: 'Reports', to: '#' },
    { icon: '…', label: 'Calendar', to: '#' },
    { icon: '☰', label: 'Settings', to: '#' },
    { icon: '…', label: 'Chat', to: '#' }
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
