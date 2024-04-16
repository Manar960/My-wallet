import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import MasterLayout from './layout/MasterLayout';
import { PageNotFound } from './Pages/PageNotFound';
import MonthlyBudget from './Pages/MonthlyBudget/MonthlyBudget';
import LoginPage from './Pages/LoginPage/LoginPage';
import { UsernameProvider } from './context/app-store';
import Dashboard from './dashboard/Dashboard';
import TransactionsPage from './dashboard/DashPages/Transaction/TransactionsPage';
import DashboardLayout from './dashboard/DashboardLayout';
import PrivateRoute from './PrivateRoute';
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
        path: 'dashboard/',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />
          },
          {
            path: 'transaction',
            element: <TransactionsPage />
          }
        ]
      }
    ]
  },
  { path: '*', element: <PageNotFound /> },
  { path: '/login', element: <LoginPage /> }
]);

const AppRoutes = () => {
  return (
    <UsernameProvider>
      <RouterProvider router={routers} />
    </UsernameProvider>
  );
};

export default AppRoutes;
