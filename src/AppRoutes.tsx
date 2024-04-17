import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import MasterLayout from './layout/MasterLayout';
import { PageNotFound } from './Pages/PageNotFound';
import MonthlyBudget from './Pages/MonthlyBudget/MonthlyBudget';
import LoginPage from './Pages/LoginPage/LoginPage';
import Dashboard from './dashboard/Dashboard';
import PrivateRoute from './PrivateRoute';
import { AppStoreProvider } from './context/app-store';
import TransactionsPage from './dashboard/DashPages/Transaction/TransactionsPage';
const routers = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivateRoute>
        <MasterLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/monthly-Budget',
        element: <MonthlyBudget />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/transaction',
        element: <TransactionsPage />
      }
    ]
  },
  { path: '*', element: <PageNotFound /> },
  { path: '/login', element: <LoginPage /> }
]);

const AppRoutes = () => {
  return (
    <AppStoreProvider>
      <RouterProvider router={routers} />
    </AppStoreProvider>
  );
};

export default AppRoutes;
