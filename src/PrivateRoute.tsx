import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useUsername } from './context/app-store';

interface PrivateRouteProps {
  children: ReactNode;
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { username } = useUsername();
  if (!username) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export default PrivateRoute;
