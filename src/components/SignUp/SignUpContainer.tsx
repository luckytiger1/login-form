import React, { useState } from 'react';
import { connect } from 'react-redux';
import SignUp from './SignUp';
import useFields from '../../hooks/useFieldshook';
import { signUpStart } from '../../redux/actions/signUp';
import {
  validateConfirmPassword,
  checkEmptyFields,
  validatePassword,
} from '../../utils';

function SignUpContainer({ signUpHandler }: any) {
  const [fields, handleFieldsChange] = useFields({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errorConfirmPass, setErrorConfirmPass] = useState(false);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = fields;
    if (
      validateConfirmPassword(password, confirmPassword) ||
      !checkEmptyFields(firstName, lastName, email, password) ||
      validatePassword(password)
    ) {
      setErrorConfirmPass(true);
    } else {
      signUpHandler({ firstName, lastName, email, password });
    }
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setErrorConfirmPass(false);
  };

  return (
    <SignUp
      fields={fields}
      handleFieldsChange={handleFieldsChange}
      validateConfirmPassword={validateConfirmPassword}
      handleSubmit={handleSubmit}
      handleClose={handleClose}
      errorConfirmPass={errorConfirmPass}
      validatePassword={validatePassword}
    />
  );
}

const mapDispatchToProps = {
  signUpHandler: signUpStart,
};

export default connect(null, mapDispatchToProps)(SignUpContainer);
