import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import '../assets/styles/App/App.css';

const MasterLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default MasterLayout;
