import  { useState } from 'react';
import { Button } from 'primereact/button';
import TransactionService, { Transaction } from '../../../transactions-api';

const RecentActivity = () => {
  const [showTopAmount, setShowTopAmount] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const recentTransactions = TransactionService.getMostRecentTransactions();
  const topAmountTransactions = TransactionService.getTopTransactionsByAmount();

  useState(() => {
    setTransactions(showTopAmount ? topAmountTransactions : recentTransactions);
  });

  const handleToggleClick = () => {
    setShowTopAmount(!showTopAmount);
    setTransactions(showTopAmount ? recentTransactions : topAmountTransactions);
  };

  return (
    <section className="activity p-4 mt-2 d-flex flex-column">
      <div className="header d-flex justify-content-between align-items-start mb-3">
        <h6 className="mt-1"> {showTopAmount ? 'Top Transactions' : 'Recent Transactions'}</h6>
        <Button
          style={{ borderRadius: '15px', fontSize: '13px', padding: '5px' }}
          onClick={handleToggleClick}>
          {showTopAmount ? 'Recent Trans' : 'Top Amount'}
        </Button>
      </div>
      {transactions.map((transaction, index) => (
        <div key={index} className=" mb-3">
          <article className="d-flex flex-row justify-content-between">
            <div className="img-name d-flex flex-row">
              <article className="w-item" style={{ width: '55px' }}>
                <img
                  src={`https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=${encodeURIComponent(
                    transaction.name
                  )}`}
                  alt="Avatar"
                />
              </article>
              <div className="name px-3 align-items-end">
                <h5 className="fs-6">{transaction.name}</h5>
                <h6 style={{ fontSize: '12px' }}>
                  {new Date(transaction.date).toLocaleDateString()}
                </h6>
              </div>
            </div>
            <h5 className="fs-6 d-flex align-items-end">{transaction.amount}</h5>
          </article>
        </div>
      ))}
    </section>
  );
};

export default RecentActivity;
