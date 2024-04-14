import { LuInstagram } from 'react-icons/lu';
import { FaFacebook, FaSquareXTwitter } from 'react-icons/fa6';

const Signup = () => {
  return (
    <div className="form-container sign-up">
      <form>
        <h1>Create Account</h1>
        <span>or use your email for registration</span>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
        <div className="social-icons mt-3 " style={{ fontSize: '25px' }}>
          <FaFacebook style={{ color: '#1877F2', marginRight: '10px' }} />
          <LuInstagram style={{ color: '#F56040', marginRight: '10px' }} />
          <FaSquareXTwitter />
        </div>
      </form>
    </div>
  );
};

export default Signup;
