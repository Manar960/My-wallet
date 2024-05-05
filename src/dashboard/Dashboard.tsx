import DashboardPage from './components/MainContant/DashboardPage';
import Rightsidebar from './components/Rightsidebar/Rightsidebar';
import '../assets/styles/App/App.css';
const Dashboard = () => {
  return (
    <div className="d-flex ">
      <div>
        <DashboardPage />
      </div>
      <div className=' bg-white'>
        <Rightsidebar />
      </div>
    </div>
  );
};

export default Dashboard;
