import { useFormik } from 'formik';
import { BiSolidMessageSquareAdd } from 'react-icons/bi';
import { TransactionSchema } from '../../../context/AppSchema';
import TransactionService, { Transaction } from '../../transactions-api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import 'primereact/resources/primereact.min.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoriesService from '../../../Categories/category-api';

const TransactionValue = {
  id: 0,
  name: '',
  category: '',
  date: '',
  amount: 0
};
interface TransactionFormProps {
  transaction?: Transaction;
  onSaveButtonClicked: (transaction: Transaction) => void;
}
const TransactionForm: React.FC<TransactionFormProps> = ({ transaction, onSaveButtonClicked }) => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: transaction || TransactionValue,
    validationSchema: TransactionSchema,
    onSubmit: (values) => {
      if (transaction) {
        onSaveButtonClicked(values);
        toast.success('Transaction Updated successfully');
      } else {
        TransactionService.addTransaction(values);
        formik.resetForm();
        toast.success('Transaction added successfully');
        setTimeout(() => {
          navigate('/transaction');
        }, 2000);
      }
    }
  });

  useEffect(() => {
    formik.resetForm({ values: transaction });
  }, [transaction]);

  const isSubmitDisabled = !formik.dirty || !formik.isValid;
  const categories = CategoriesService.getAllCategories();
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
              options={categories.map((category) => ({
                label: category.name,
                value: category.name
              }))}
              onChange={(e) => formik.setFieldValue('category', e.value)}
              onBlur={formik.handleBlur}
              style={{
                height: '47px',
                borderRadius: '15px',
                alignItems: 'center',
                backgroundColor: '#d2d9f4',
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
              style={{ backgroundColor: '#d2d9f4' }}
            />
            <span className="errorMsg">
              {formik.errors.amount && <small>{formik.errors.amount}</small>}
            </span>
          </div>
        </div>
        <button
          type="submit"
          className="button d-inline-flex align-items-center justify-content-center mt-2 mb-4"
          style={{
            background: 'linear-gradient(90deg, #937bff, #d7a0f7)',
            color: 'white',
            boxShadow: '0 0 20px #d7a0f7'
          }}
          disabled={isSubmitDisabled}>
          {transaction ? 'Update Transaction' : 'Add New Transaction'}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default TransactionForm;
