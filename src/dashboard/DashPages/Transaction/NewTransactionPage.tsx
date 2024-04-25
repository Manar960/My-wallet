import { useFormik } from 'formik';
import { BiSolidMessageSquareAdd } from 'react-icons/bi';
import { TransactionSchema } from '../../../context/Transaction';
import TransactionService from '../../transactions-api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

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
  const isSubmitDisabled = !formik.dirty || !formik.isValid;
  const SuccessAdding = () => toast.success('Added Successfully');
  const categories = ['Supermarket', 'Personal', 'Home', 'Entertainment'];

  return (
    <div className="tran d-inline-flex container-fluid">
      <form onSubmit={formik.handleSubmit} className="transaction card">
        <div className="avatar d-flex justify-content-center align-items-center">
          <BiSolidMessageSquareAdd style={{ color: 'white', width: '50px', height: '50px' }} />
        </div>
        <div className="main">
          <div className="felid d-flex flex-column">
            <InputText
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formik.values.name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <span className="errorMsg">
              {formik.errors.name && <small>{formik.errors.name}</small>}
            </span>
          </div>
          <div className="felid d-flex flex-column">
            <Dropdown
              id="category"
              name="category"
              placeholder="Category"
              value={formik.values.category}
              options={categories.map((category) => ({ label: category, value: category }))}
              onChange={(e) => formik.setFieldValue('category', e.value)}
              onBlur={formik.handleBlur}
              style={{
                height: '47px',
                borderRadius: '15px',
                alignItems: 'center',
                backgroundColor: '#e6f9f1',
                paddingLeft: '10px'
              }}
            />
            <span className="errorMsg">
              {formik.errors.category && <small>{formik.errors.category}</small>}
            </span>
          </div>
          <div className="felid d-flex flex-column">
            <Calendar
              id="date"
              name="date"
              placeholder="Date"
              value={formik.values.date ? new Date(formik.values.date) : null}
              onChange={(e) => formik.setFieldValue('date', e.value)}
              onBlur={formik.handleBlur}
              dateFormat="dd/mm/yy"
              showTime
            />
            <span className="errorMsg">
              {formik.errors.date && <small>{formik.errors.date.toString()}</small>}
            </span>
          </div>
          <div className="felid d-flex flex-column">
            <InputText
              type="number"
              id="amount"
              name="amount"
              placeholder="Amount"
              value={formik.values.amount.toString()}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              style={{ backgroundColor: '#e6f9f1' }}
            />
            <span className="errorMsg">
              {formik.errors.amount && <small>{formik.errors.amount}</small>}
            </span>
          </div>
        </div>
        <button
          type="submit"
          className="button d-inline-flex align-items-center justify-content-center mt-3 mb-4"
          style={{
            background: 'linear-gradient(90deg, #937bff, #d7a0f7)',
            color: 'white',
            boxShadow: '0 0 20px #d7a0f7'
          }}
          disabled={isSubmitDisabled}
          onClick={SuccessAdding}>
          Add New Transaction
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default NewTransactionPage;
