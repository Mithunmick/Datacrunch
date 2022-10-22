import React, { useState } from 'react';
import useInputState from '../utills/Hook';
//import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [value, onChangeHandler, reset] = useInputState('');
  //const navigate = useNavigate();
  console.log({ value });

  const [emailAlert, setEmailAlert] = useState('');
  const [passwordAlert, setPasswordAlert] = useState('');

  const loginCredentials = () => {
    setEmailAlert('');
    setPasswordAlert('');
    const { email, password } = value;
    if (email !== 'john@gmail.com') {
      setEmailAlert('Please Enter valid Email Address');
    }
    if (password !== 'christina') {
      setPasswordAlert(' please enter correct password');
    }

    reset('');

    if (password === 'christina' && email === 'john@gmail.com') {
      setEmailAlert('');
      setPasswordAlert('');
      //navigate('/');
    }
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    loginCredentials();
  };

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-4'>
          <div className='mainform mt-3'>
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  name='email'
                  className='form-control'
                  id='email'
                  value={value.email || ''}
                  onChange={onChangeHandler}
                ></input>
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  name='password'
                  className='form-control'
                  id='password'
                  value={value.password || ''}
                  onChange={onChangeHandler}
                ></input>
              </div>

              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </form>

            {emailAlert && <div>{emailAlert}</div>}
            {passwordAlert && <div>{passwordAlert}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
