import MenuItem from './components/MenuItem';
import logo from '../../../assets/images/logo.png';
import ButtomImg from './components/ButtomImg';
const Sidebar = () => {
  const items = [
    { icon: '➡️', label: 'Dashboard', to: '/dashboard' },
    { icon: '☰', label: 'Transactions', to: '/dashboard/transactions' },
    { icon: '⬆️', label: 'Cards' },
    { icon: '☰', label: 'Reports' },
    { icon: '…', label: 'Calendar' },
    { icon: '☰', label: 'Settings' },
    { icon: '…', label: 'Chat' }
  ];
  return (
    <aside className="sidebar bg-white position-relative d-flex align-items-start rounded-4 m-2 flex-column pe-4">
      <div className="header ps-3 mt-3">
        <img src={logo} alt="" />
        <span className="description-header fw-bold">Finarium</span>
      </div>
      <main className="first-header">
        {items.map((item, index) => (
          <MenuItem key={index} icon={item.icon} name={item.label} to={''} />
        ))}
      </main>
      <ButtomImg />
    </aside>
  );
};

export default Sidebar;
