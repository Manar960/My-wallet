import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../../context/app-store';

const Logout: React.FC = () => {
  const navigate = useNavigate();
  const { setUsername, setUserType } = useAppStore();

  const logout = () => {
    setUsername('');
    setUserType('');
    navigate('/login');
  };

  return (
    <li className="dropdown-item" onClick={logout}>
      Logout
    </li>
  );
};

export default Logout;
