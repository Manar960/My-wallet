import Singin from './Componants/Singin';
import Singup from './Componants/Signup';
import Toggle from './Componants/Toggle';
import '../../assets/styles/Login/Login.css';
import { useState } from 'react';

const LoginPage = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="body">
      <div className={`container  ${active ? 'active' : ''}`} id="container">
        <Singin />
        <Singup />
        <Toggle setActive={setActive} />
      </div>
    </div>
  );
}

export default LoginPage;
