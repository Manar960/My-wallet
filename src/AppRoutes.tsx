import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage';
import PrivateRoute from './PrivateRoute';
import { useAppStore } from './context/app-store';

const AppRoutes = () => {
  const { username } = useAppStore();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Outlet />}>
          {username ? (
            <Route path="/*" element={<PrivateRoute />} />
          ) : (
            <>
              <Route path="login" element={<LoginPage />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
