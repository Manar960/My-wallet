import MenuItem from './components/MenuItem';
import logo from '../../../assets/images/logo.png';
import ButtomImg from '../../../layout/components/Aside/components/ButImg';
const Sidebar = () => {
  const items = [
    { icon: '➡️', label: 'Dashboard', to: '/dashboard' },
    { icon: '☰', label: 'Transactions', to: '/transaction' },
    { icon: '⬆️', label: 'Cards', to: '#' },
    { icon: '☰', label: 'Reports', to: '#' },
    { icon: '…', label: 'Calendar', to: '#' },
    { icon: '☰', label: 'Settings', to: '#' },
    { icon: '…', label: 'Chat', to: '#' }
  ];
  return (
    <aside className="sidebar bg-white position-relative d-flex align-items-start rounded-4 m-2 flex-column pe-4">
      <div className="header ps-3 mt-3">
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
