import Sidebar from './components/Sidebar/Sidebar';
import '../assets/styles/App/App.css';
import { Outlet } from 'react-router-dom';
const DashboardLayout = () => {
  return (
    <div className="container-fluid " style={{ backgroundColor: '#f7ebfe' }}>
      <div className="row h-100">
        <div className="col-lg-2 col-sm-3">
          <Sidebar />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
