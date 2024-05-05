import { HiMiniBars2 } from 'react-icons/hi2';

const Header = () => {
  const openNav = () => {
    const element = document.getElementById('sidebar');
    if (element) {
      element.style.width = '250px';
    }
  };
  return (
    <header className="mobile-header profile-img mt-3 d-flex justify-content-between align-items-center">
      <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={openNav}>
        <HiMiniBars2 />
      </span>

    </header>
  );
};

export default Header;
