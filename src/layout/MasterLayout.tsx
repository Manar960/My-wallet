import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import '../assets/styles/App/App.css';
import Sidebar from '../dashboard/components/Sidebar/Sidebar';

const MasterLayout = () => {
  return (
    <>
      <div className="d-flex h-100">
        <Sidebar />

        <div className="container-fluid " style={{ backgroundColor: '#f7ebfe' }}>
          <Outlet />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MasterLayout;
