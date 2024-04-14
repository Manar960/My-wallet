import MainContant from './components/MainContant/MainContant';
import Secsidebar from './components/Rightsidebar/Rightsidebar';
import Sidebar from './components/Sidebar/Sidebar';
import '../assets/styles/App/App.css'
const Dashboard = () => {
  return (
    <div className="container-fluid ">
      <div className="row h-100">
        <div className="col-lg-2 col-sm-3">
          <Sidebar />
        </div>

        <div className="col-lg-7 col-sm-6">
          <MainContant />
        </div>

        <div className="col-lg-3 bg-white col-sm-3">
          <Secsidebar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
