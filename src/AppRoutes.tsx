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
const routers = createBrowserRouter([
  {
    path: '/',
    element: <MasterLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/monthly-Budget',
        element: <MonthlyBudget />
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
