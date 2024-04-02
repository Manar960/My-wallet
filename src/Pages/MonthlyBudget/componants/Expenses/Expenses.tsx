import EXheader from './componants/EXheader';
import Calender from './componants/Calender';
import Excard from './componants/Excards';
import Footer from '../../../../layout/components/Footer/Footer';

const Expenses = () => {
  return (
    <div
      className="bg-white mt-5 exp "
      style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}}>
      <EXheader />
      <Calender />
      <div className="row mx-2 mt-4">
        <Excard
          name={'Groceries'}
          color={'#2c5fcc'}
          amount={'$86.00'}
          icon={'fas fa-shopping-basket'}
        />
        <Excard
          name={'Restaurants'}
          color={'#3d3ca8'}
          amount={'$86.00'}
          icon={'fas fa-concierge-bell'}
        />
        <Excard name={'Fashion'} color={'#8946c4'} amount={'$86.00'} icon={'fas fa-tshirt'} />
      </div>
      <Footer />
    </div>
  );
};

export default Expenses;
