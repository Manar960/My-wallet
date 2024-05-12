import * as Yup from 'yup';

export const TransactionSchema = Yup.object({
  name: Yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
  category: Yup.string().required('Category is required'),
  date: Yup.string().required('Date is required'),
  amount: Yup.number().required('Amount is required').positive('Amount must be positive')
});
export const LoginSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  UserType: Yup.string().required('Please choose one of these choice ')
});

