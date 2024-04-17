import Sidebar from '../../components/Sidebar/Sidebar';
import TransactionsList from './TransactionsList';

const TransactionsPage = () => {
  return (
    <div className="container-fluid " style={{ backgroundColor: '#f7ebfe' }}>
      <div className="row h-100">
        <TransactionsList />
      </div>
    </div>
  );
};

export default TransactionsPage;
