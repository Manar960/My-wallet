import { BiTransferAlt } from 'react-icons/bi';
import { MdInsertChartOutlined } from 'react-icons/md';
import { TbSettingsExclamation } from 'react-icons/tb';
import { TbCategory2 } from 'react-icons/tb';
import MenuItem from '../../../components/Sidebar/components/MenuItem';

const SettingSideBar = () => {
  
  const items = [
    { icon: <MdInsertChartOutlined />, label: 'My Profile', to: 'settings/currency' },
    { icon: <BiTransferAlt />, label: 'Security', to: 'settings/currency' },
    { icon: <TbCategory2 />, label: 'Currency', to: 'currency' },
    { icon: <TbSettingsExclamation />, label: 'Delete Account', to: 'settings/currency' }
  ];

  return (
    <aside
      id="sidebar"
      className="sidebar position-relative d-flex align-items-start rounded-4 m-2 flex-column  me-5 h-100"
      style={{ border: '1px solid #e6e4e4' }}>
      <div className="header ps-4 my-3">
        <span className="description-header fw-bold ms-3">Settings</span>
      </div>
      <main className="first-header" style={{ fontSize: '15px' }}>
        {items.map((item, index) => (
          <MenuItem key={index} icon={''} name={item.label} to={item.to} onClick={undefined} />
        ))}
      </main>
    </aside>
  );
};

export default SettingSideBar;
