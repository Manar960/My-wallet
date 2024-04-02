import '../../../assets/styles/App.css'
import { HiMiniBars2 } from 'react-icons/hi2';

const Header = () => {
  function openNav() {
    const element = document.getElementById('mySidenav');
    if (element) {
      element.style.width = '250px'; 
    }
  }

  return (
    <header className="mobile-header profile-img mt-3 d-flex justify-content-between align-items-center">
      <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={openNav}>
        <HiMiniBars2 />
      </span>
      <h5 className="fw-bold">Home</h5>
      <img
        src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Abdullah"
        alt=""
        className="profile-img"
      />
    </header>
  );
};

export default Header;
