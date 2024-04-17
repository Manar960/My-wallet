import Sidebar from "../../components/Sidebar/Sidebar";
import TransactionsList from "./TransactionsList";

const TransactionsPage = () => {
  return (
    <div className="container-fluid " style={{ backgroundColor: '#f7ebfe' }}>
      <div className="row h-100">
        <div className="col-lg-2 col-sm-3">
          <Sidebar />
        </div>

        <div className="col-lg-10 col-sm-6">
          <TransactionsList />
        </div>
      </div>
    </div>
  );
}

export default TransactionsPage