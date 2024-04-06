import EXheader from './componants/ExpensesHeader';
import ExpensesCalender from './componants/ExpensesCalender';
import Footer from '../../../../layout/components/Footer/Footer';
import ExpensesCards from './componants/ExpensesCards';

const Expenses = () => {
  return (
    <div
      className="bg-white mt-5 exp "
      style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}>
      <EXheader />
      <ExpensesCalender />
      <div className="row mx-2 mt-4">
        <ExpensesCards
          name={'Groceries'}
          color={'#2c5fcc'}
          amount={'$86.00'}
          icon={'fas fa-shopping-basket'}
        />
        <ExpensesCards
          name={'Restaurants'}
          color={'#3d3ca8'}
          amount={'$86.00'}
          icon={'fas fa-concierge-bell'}
        />
        <ExpensesCards
          name={'Fashion'}
          color={'#8946c4'}
          amount={'$86.00'}
          icon={'fas fa-tshirt'}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Expenses;
