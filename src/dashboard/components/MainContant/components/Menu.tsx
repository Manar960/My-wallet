import React from 'react';

interface MenuItem {
  icon: string;
  label: string;
}

const Menu: React.FC = () => {
  const menuItems: MenuItem[] = [
    { icon: '\u2192', label: 'Send money' },
    { icon: '\u9776', label: 'Statements' },
    { icon: '\u2191', label: 'Top up' },
    { icon: '\u2026', label: 'More' }
  ];

  return (
    <nav className="menu bg-white d-flex">
      {menuItems.map((item, index) => (
        <a
          key={index}
          href="#"
          className="menu-item d-flex align-items-center flex-column justify-content-evenly text-decoration-none">
          <div className="square text-center fw-bold">
            <span>{item.icon}</span>
          </div>
          <span className="menu-item-label">{item.label}</span>
        </a>
      ))}
    </nav>
  );
};

export default Menu;
