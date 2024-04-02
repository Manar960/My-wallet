import MenuItem from './components/Mitem';
import ButtomImg from './components/ButImg';
import '../../../assets/styles/App.css';
import logo from '../../../assets/images/logo.png';
import { IoIosClose } from 'react-icons/io';

const Mobsidebar = () => {
  const items = [
    { icon: '➡️', label: 'Dashboard' },
    { icon: '☰', label: 'Transactions' },
    { icon: '⬆️', label: 'Cards' },
    { icon: '☰', label: 'Reports' },
    { icon: '…', label: 'Calendar' },
    { icon: '☰', label: 'Settings' },
    { icon: '…', label: 'Chat' }
  ];
  function closeNav() {
    const element = document.getElementById('mySidenav');
    if (element) {
      element.style.width = '0';
    }
  }

  return (
    <div id="mySidenav" className="sidenav">
      <aside className="sidebar position-relative d-flex align-items-start rounded-4 flex-column">
        <div className="header ps-3 mt-3">
          <img src={logo} />
          <span className="description-header fw-bold">Finarium</span>
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
            <IoIosClose />
          </a>
        </div>
        <main className="first-header">
          {items.map((item, index) => (
            <MenuItem key={index} icon={item.icon} name={item.label} />
          ))}
        </main>
        <ButtomImg />
      </aside>
    </div>
  );
};

export default Mobsidebar;
