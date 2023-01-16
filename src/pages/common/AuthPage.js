import React, { useEffect } from 'react';
import AuthForm from '../../components/Auth/AuthForm';

const AuthPage = () => {
  useEffect(() => {
    document.title = "Login";
  }, []);
  return <AuthForm />;
};

export default AuthPage;
