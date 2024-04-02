import MainContant from "./components/MainContant/MainContant";
import Secsidebar from "./components/Secsidebar/Secsidebar";
import Sidebar from "./components/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="container-fluid d-none d-sm-block">
      <div className="row h-100">
        <div className="col-lg-2 col-sm-3">{
        <Sidebar />
        }</div>

        <div className="col-lg-7 col-sm-6">{
            <MainContant/>
        }</div>

        <div className="col-lg-3 bg-white col-sm-3">{
            <Secsidebar />
        }</div>
      </div>
    </div>
  );
};

export default Dashboard;
