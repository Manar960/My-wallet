import AppSideBar from '../../layout/components/Aside/AppSideBar';
import Footer from '../../layout/components/Footer/Footer';
import Header from '../../layout/components/Header/Header';
import Balance from './componants/Balance';
import Barchart from './componants/Barchart';
import MainActivity from './componants/MainActivity';
import ThisWeek from './componants/ThisWeek';


const HomePage = () => {
  return (
    <div className="container-fluid mobile px-4 ">
      <AppSideBar />
      <Header />
      <Balance />
      <ThisWeek/>
      <Barchart />
      <MainActivity />
      <Footer />
    </div>
  );
};

export default HomePage;
