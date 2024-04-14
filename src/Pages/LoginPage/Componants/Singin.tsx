import React, { useState } from 'react';
import { LuInstagram } from 'react-icons/lu';
import { FaFacebook, FaSquareXTwitter } from 'react-icons/fa6';
import { useUsername } from '../../../context/app-store';
import { useNavigate } from 'react-router-dom';
const Signin = () => {
  const { setUsername } = useUsername();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const navigate = useNavigate();
  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nameInput = e.currentTarget.querySelector<HTMLInputElement>('input[type="text"]');
    if (nameInput) {
      const username = nameInput.value.trim();
      if (username) {
        setUsername(username);
        navigate('/');
      } else {
        setErrorMessage('Please write your username');
      }
    }
  };

  return (
    <div className="form-container sign-in">
      <form onSubmit={handleSignIn}>
        <h1>Sign In</h1>
        <span> use your name and password</span>
        <input type="text" placeholder="Name" />
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button type="submit">Sign In</button>
        <div className="social-icons mt-3 " style={{ fontSize: '25px' }}>
          <FaFacebook style={{ color: '#1877F2', marginRight: '10px' }} />
          <LuInstagram style={{ color: '#F56040', marginRight: '10px' }} />
          <FaSquareXTwitter />
        </div>
        <div className="mobile-singup mt-3 d-flex d-lg-none d-md-none">
          <span>or</span>
          <button type="submit">Sign up</button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
