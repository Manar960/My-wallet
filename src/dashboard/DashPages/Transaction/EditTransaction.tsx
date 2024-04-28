import { useParams, useNavigate } from 'react-router-dom';
import TransactionForm from './TransactionForm';
import TransactionService, { Transaction } from '../../transactions-api';

const EditTransactionPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const transaction = TransactionService.getTransaction(Number(id));

  const onSaveButtonClicked = (updatedTransaction: Transaction) => {
    TransactionService.updateTransaction(updatedTransaction);
    setTimeout(() => {
      navigate('/transaction');
    }, 2000);
  }; 

  return <TransactionForm transaction={transaction} onSaveButtonClicked={onSaveButtonClicked} />;
};

export default EditTransactionPage;
