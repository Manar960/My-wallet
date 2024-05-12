import { Navigate, Route, Routes } from 'react-router-dom';
import MasterLayout from './layout/MasterLayout';
import Dashboard from './dashboard/Dashboard';
import TransactionsPage from './dashboard/DashPages/Transaction/TransactionsPage';
import TransactionForm from './dashboard/DashPages/Transaction/TransactionForm';
import EditTransactionPage from './dashboard/DashPages/Transaction/EditTransaction';
import Categories from './Categories/Categories';

const PrivateRoute = () => {
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="transaction" element={<TransactionsPage />} />
        <Route path="transaction/:id" element={<EditTransactionPage />} />

        <Route
          path="transaction/new"
          element={
            <TransactionForm
              transaction={undefined}
              onSaveButtonClicked={function (): void {
                throw new Error('Function not implemented.');
              }}
            />
          }
        />
        <Route path="categories" element={<Categories />} />

        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Route>
    </Routes>
  );
};

export default PrivateRoute;
