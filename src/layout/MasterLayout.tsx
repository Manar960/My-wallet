import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import '../assets/styles/App/App.css';
import Sidebar from '../dashboard/components/Sidebar/Sidebar';

const MasterLayout = () => {
  return (
    <>
      <div
        className="d-flex h-100"
        style={{
          backgroundColor: '#f7ebfe',
          minHeight: '100vh'
        }}>
        <Sidebar />
        <div>
          <Outlet />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MasterLayout;
