
import { Outlet } from 'react-router-dom';
import '../assets/styles/App.css'

const MasterLayout = () => {

  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MasterLayout;
