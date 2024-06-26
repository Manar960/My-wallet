import AppSideBar from '../../layout/components/Aside/AppSideBar';
import Header from '../../layout/components/Header/Header';
import Balance from './componants/Balance';
import Barchart from './componants/Barchart';
import MainActivity from './componants/MainActivity';
// import ThisWeek from './componants/Thisweek';

const HomePage = () => {
  return (
    <div className=" mobile px-4">
      <AppSideBar />
      <Header />
      <Balance />
      {/* <ThisWeek /> */}
      <Barchart />
      <MainActivity />
    </div>
  );
};

export default HomePage;
