import { HiMiniBars2 } from 'react-icons/hi2';
import { useUsername } from '../../../context/app-store';

const Header = () => {
  const openNav = () => {
    const element = document.getElementById('mySidenav');
    if (element) {
      element.style.width = '250px';
    }
  };
  const { username } = useUsername();
  return (
    <header className="mobile-header profile-img mt-3 d-flex justify-content-between align-items-center">
      <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={openNav}>
        <HiMiniBars2 />
      </span>
      <h5 className="fw-bold">Home</h5>
      <div className="username text-center">
        <img
          src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Abdullah"
          alt=""
          className="profile-img"
        />
        <h6>{username}</h6>
      </div>
    </header>
  );
};

export default Header;
