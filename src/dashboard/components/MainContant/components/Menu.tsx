import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { PiListDashesFill } from 'react-icons/pi';
import { Dialog } from 'primereact/dialog';
import TransactionForm from '../../../DashPages/Transaction/TransactionForm';
import Authorize from '../../../../Authinticate';

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  role: string;
}

const Menu: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const handleSendMoneyClick = () => {
    setVisible(true);
  };

  const handleStatementsClick = () => {
    console.log('Statements clicked');
  };

  const handleTopUpClick = () => {
    console.log('Top up clicked');
  };

  const handleMoreClick = () => {
    console.log('More clicked');
  };

  const menuItems: MenuItem[] = [
    {
      icon: <FaArrowRight />,
      label: 'Add Transaction',
      onClick: handleSendMoneyClick,
      role: 'Admin'
    },
    {
      icon: <PiListDashesFill />,
      label: 'Statements',
      onClick: handleStatementsClick,
      role: 'Normal User'
    },
    { icon: <FaArrowUp />, label: 'Top up', onClick: handleTopUpClick, role:  'Normal User' },
    { icon: <BsThreeDots />, label: 'More', onClick: handleMoreClick, role:  'Normal User' }
  ];

  return (
    <nav className="menu bg-white d-flex shadow-sm">
      {menuItems.map((item, index) => (
          <a
            href="#"
            onClick={item.onClick}
            className="menu-item d-flex align-items-center flex-column justify-content-evenly text-decoration-none">
            <div className="square fw-bold">
              <span>{item.icon}</span>
            </div>
            <span className="menu-item-label">{item.label}</span>
          </a>
      ))}
      <Dialog
        visible={visible}
        style={{
          width: 'auto'
        }}
        onHide={() => setVisible(false)}>
        <div style={{ margin: '20px auto' }}>
          <TransactionForm
            transaction={undefined}
            onSaveButtonClicked={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>
      </Dialog>
    </nav>
  );
};

export default Menu;
