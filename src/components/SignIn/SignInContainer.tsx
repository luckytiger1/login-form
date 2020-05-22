import React from 'react';
import SignIn from './SignIn';
import useFields from '../../hooks/useFieldshook';

const SignInContainer = () => {
  const [loginFields, handleFieldsChange] = useFields({
    email: '',
    password: '',
  });

  return (
    <SignIn loginFields={loginFields} handleFieldsChange={handleFieldsChange} />
  );
};

export default SignInContainer;
