import { Navigate, Route, Routes } from 'react-router-dom';
import MasterLayout from './layout/MasterLayout';
import Dashboard from './dashboard/Dashboard';
import TransactionsPage from './dashboard/DashPages/Transaction/TransactionsPage';

const PrivateRoute = () => {
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="transaction" element={<TransactionsPage />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Route>
    </Routes>
  );
};

export default PrivateRoute;
