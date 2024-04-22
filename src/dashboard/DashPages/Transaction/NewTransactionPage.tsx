import { useFormik } from 'formik';
import { BiSolidMessageSquareAdd } from 'react-icons/bi';
import { TransactionSchema } from '../../../context/Transaction';
import TransactionService from '../../transactions-api';
const TransactionValue = {
  id: 0,
  name: '',
  category: '',
  date: '',
  amount: 0
};
const NewTransactionPage = () => {
  const formik = useFormik({
    initialValues: TransactionValue,
    validationSchema: TransactionSchema,
    onSubmit: (values) => {
      const transactions = TransactionService.getAllTransactions();
      const maxId =
        transactions.length > 0
          ? Math.max(...transactions.map((transaction) => transaction.id))
          : 0;
      const newTransaction = { ...values, id: maxId + 1 };
      TransactionService.addTransaction(newTransaction);
      formik.resetForm();
    }
  });

  return (
    <div className="tran d-inline-flex container-fluid">
      <form onSubmit={formik.handleSubmit} className="transaction card">
        <div className="avatar d-flex justify-content-center align-items-center">
          <BiSolidMessageSquareAdd style={{ color: 'white', width: '50px', height: '50px' }} />
        </div>
        <div className="main">
          <div className="felid d-flex flex-column">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formik.values.name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <span>{formik.errors.name && <small>{formik.errors.name}</small>}</span>
          </div>
          <div className="felid d-flex flex-column">
            <input
              type="text"
              id="category"
              name="category"
              placeholder="Category"
              value={formik.values.category}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <span>{formik.errors.category && <small>{formik.errors.category}</small>}</span>
          </div>
          <div className="felid d-flex flex-column">
            <input
              type="datetime-local"
              id="date"
              name="date"
              placeholder="Date"
              value={formik.values.date}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <span>{formik.errors.date && <small>{formik.errors.date}</small>}</span>
          </div>
          <div className="felid d-flex flex-column">
            <input
              type="number"
              id="amount"
              name="amount"
              placeholder="Amount"
              value={formik.values.amount}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <span>{formik.errors.amount && <small>{formik.errors.amount}</small>}</span>
          </div>
        </div>
        <button
          type="submit"
          className="button d-inline-flex align-items-center justify-content-center mt-3 mb-4"
          style={{
            background: 'linear-gradient(90deg, #937bff, #d7a0f7)',
            color: 'white',
            boxShadow: '0 0 20px #d7a0f7'
          }}>
          Add New Transaction
        </button>
      </form>
    </div>
  );
};

export default NewTransactionPage;
