import React from 'react';
import { LuInstagram } from 'react-icons/lu';
import { FaFacebook, FaTwitterSquare } from 'react-icons/fa';
import { useAppStore } from '../../../context/app-store';
import { useNavigate } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';
import { useFormik } from 'formik';
import { LoginSchema } from '../../../context/AppSchema';
import { InputText } from 'primereact/inputtext';
import { FaSquareXTwitter } from 'react-icons/fa6';

const LoginValue = {
  name: '',
  UserType: ''
};

const Signin = () => {
  const { setUsername, setUserType } = useAppStore();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: LoginValue,
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      setUsername(values.name);
      setUserType(values.UserType);
      navigate('/');
    }
  });

  const UserTypeOptions = ['Admin', 'Normal User'];
  const isSubmitDisabled = !formik.dirty || !formik.isValid;

  return (
    <div className="form-container sign-in">
      <form onSubmit={formik.handleSubmit}>
        <h1 className='mb-4'>Sign In</h1>
        <div className="main">
          <div className="felid d-flex flex-column">
            <InputText
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formik.values.name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              style={{
                height: '45px'
              }}
            />
            <span className="errorMsg">
              {formik.touched.name && formik.errors.name && <small>{formik.errors.name}</small>}
            </span>
          </div>
          <div className="felid d-flex flex-column mb-3">
            <Dropdown
              id="UserType"
              name="UserType"
              placeholder="UserType"
              value={formik.values.UserType}
              options={UserTypeOptions.map((UserType) => ({ label: UserType, value: UserType }))}
              onChange={(e) => formik.setFieldValue('UserType', e.value)}
              onBlur={formik.handleBlur}
              style={{
                height: '45px',
                borderRadius: '15px',
                alignItems: 'center'
              }}
            />
            <span className="errorMsg">
              {formik.touched.UserType && formik.errors.UserType && (
                <small>{formik.errors.UserType}</small>
              )}
            </span>
          </div>
        </div>
        <button type="submit" disabled={isSubmitDisabled}>
          Sign In
        </button>
        <div className="social-icons mt-1 " style={{ fontSize: '25px' }}>
          <FaFacebook style={{ color: '#1877F2', marginRight: '10px' }} />
          <LuInstagram style={{ color: '#F56040', marginRight: '10px' }} />
          <FaSquareXTwitter />
        </div>
        <div className="mobile-signup mt-3 d-flex d-lg-none d-md-none">
          <span>or</span>
          <button type="submit" disabled={isSubmitDisabled}>
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
