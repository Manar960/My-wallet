import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowUp } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { PiListDashesFill } from 'react-icons/pi';

interface MenuItem {
  icon: React.ReactNode;
  label: string;
}

const Menu: React.FC = () => {
  const menuItems: MenuItem[] = [
    { icon: <FaArrowRight />, label: 'Send money' },
    { icon: <PiListDashesFill />, label: 'Statements' },
    { icon: <FaArrowUp />, label: 'Top up' },
    { icon: <BsThreeDots />, label: 'More' }
  ];

  return (
    <nav className="menu bg-white d-flex shadow-sm">
      {menuItems.map((item, index) => (
        <a
          key={index}
          href="#"
          className="menu-item d-flex align-items-center flex-column justify-content-evenly text-decoration-none">
          <div className="square fw-bold">
            <span>{item.icon}</span>
          </div>
          <span className="menu-item-label">{item.label}</span>
        </a>
      ))}
    </nav>
  );
};

export default Menu;
