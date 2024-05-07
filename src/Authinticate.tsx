import React, { ReactNode } from 'react';
import { useAppStore } from './context/app-store';

interface AuthorizeProps {
  allowedRoles: string[];
  children: ReactNode;
}

const Authorize: React.FC<AuthorizeProps> = ({ allowedRoles, children }) => {
  const { userType } = useAppStore();
  const isAllowed = allowedRoles.includes(userType ?? '');
  return isAllowed ? <>{children}</> : null;
};

export default Authorize;
