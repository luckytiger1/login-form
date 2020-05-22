import React from 'react';
import SignUp from './SignUp';
import useFields from '../../hooks/useFieldshook';

function SignUpContainer() {
  const [fields, handleFieldsChange] = useFields({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  return <SignUp fields={fields} handleFieldsChange={handleFieldsChange} />;
}

export default SignUpContainer;
