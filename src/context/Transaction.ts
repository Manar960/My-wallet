import * as Yup from 'yup';

export const TransactionSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  category: Yup.string().required('Category is required'),
  date: Yup.string().required('Date is required'),
  amount: Yup.number()
    .required('Amount is required')
    .positive('Amount must be positive')
    .integer('Amount must be an integer')
});
