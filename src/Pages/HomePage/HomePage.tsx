import Mobsidebar from '../../layout/components/Aside/Mobsidebar';
import Footer from '../../layout/components/Footer/Footer';
import Header from '../../layout/components/Header/Header';
import Balance from './componants/Balance';
import Barchart from './componants/Barchart';
import MainActivity from './componants/MainActivity';
import Thisweek from './componants/Thisweek';

const HomePage = () => {
  return (
    <div className="container-fluid mobile px-4 ">
      <Mobsidebar />
      <Header />
      <Balance />
      <Thisweek />
      <Barchart />
      <MainActivity />
      <Footer />
    </div>
  );
};

export default HomePage;
