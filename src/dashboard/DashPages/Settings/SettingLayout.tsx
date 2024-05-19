import SettingSideBar from './components/SettingSideBar';
import { Outlet } from 'react-router-dom'; // Import Outlet

const SettingLayout = () => {
  return (
    <div className="SettingLayout container-fluid bg-white my-2 rounded-4 ms-1 rounded-4 p-4">
      <div className="row h-100">
        <div className="col-lg-4">
          <SettingSideBar />
        </div>
        <div className="col-lg-8 rounded-4 ps-1" >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SettingLayout;
