import React, { useState } from 'react';
import Illustration_Text from './Illustration_Text';
import plan from '../../../assets/images/plan.png';
import money from '../../../assets/images/Illustration.png';
interface ToggleProps {
  setActive: (isActive: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ setActive }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleLoginClick = () => {
    setActive(false);
  };

  const handleRegisterClick = () => {
    setActive(true);
  };

  return (
    <div className="toggle-container">
      <div className={`toggle ${isSignUp ? 'right-panel-active' : ''}`}>
        <div className="toggle-panel toggle-left">
          <Illustration_Text
            imageUrl={money}
            title="Save Money "
            textLines={['Track your transaction easily,', 'with categories and financial report ']}
          />
          <button className="hidden" id="login" onClick={handleLoginClick}>
            Sign In
          </button>
        </div>
        <div className="toggle-panel toggle-right">
          <Illustration_Text
            imageUrl={plan}
            title="Planning ahead"
            textLines={['Setup your budget for each category', 'so you in control']}
          />
          <button className="hidden" id="register" onClick={handleRegisterClick}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
