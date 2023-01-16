import { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './Content.module.css';

const RegisterForm = () => {
  const history = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const rePasswordInputRef = useRef();
  const companyNameInputRef = useRef();
  const businessTypeInputRef = useRef();
  

  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: Add validation

    setIsLoading(true);
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyChHdlXDWxN7-pF4iNlEDp4NZfDlZfeTlQ';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  };

  return (
    <section className={classes.register}>
      <h1>'Sign Up'</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='repassword'>Re-Password</label>
          <input
            type='password'
            id='repassword'
            required
            ref={rePasswordInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='companyName'>Comapay Name</label>
          <input
            type='text'
            id='companyName'
            required
            ref={companyNameInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='businessType'>Business Type</label>
          <input
            type='text'
            id='businessType'
            required
            ref={businessTypeInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='c'>City</label>
          <input
            type='password'
            id='repassword'
            required
            ref={rePasswordInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Re-Password</label>
          <input
            type='password'
            id='repassword'
            required
            ref={rePasswordInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Re-Password</label>
          <input
            type='password'
            id='repassword'
            required
            ref={rePasswordInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Re-Password</label>
          <input
            type='password'
            id='repassword'
            required
            ref={rePasswordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button> Create Account </button>
          )}
          {isLoading && <p>Sending request...</p>}
        </div>
      </form>
    </section>
  );
};

export default RegisterForm;
