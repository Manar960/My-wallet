import DashboardPage from './components/MainContant/DashboardPage';
import Secsidebar from './components/Rightsidebar/Rightsidebar';
import Sidebar from './components/Sidebar/Sidebar';
import '../assets/styles/App/App.css';
const Dashboard = () => {
  return (
    <div className="d-flex">
      <div>
        <DashboardPage />
      </div>
      <div>
        <Secsidebar />
      </div>
    </div>
  );
};

export default Dashboard;
