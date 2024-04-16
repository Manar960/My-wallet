
import MainContant from './components/MainContant/MainContant';
import Secsidebar from './components/Rightsidebar/Rightsidebar';

const Dashboard = () => {
  return (
    <>
      <div className="col-lg-7 col-sm-6">
        <MainContant />
      </div>

      <div className="col-lg-3 bg-white col-sm-3">
        <Secsidebar />
      </div>
    </>
  );
};

export default Dashboard;
