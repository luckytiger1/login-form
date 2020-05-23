import React, { useState } from 'react';
import { connect } from 'react-redux';
import SignUp from './SignUp';
import useFields from '../../hooks/useFieldshook';
import { signUpStart } from '../../redux/actions/signUp';

function SignUpContainer({ signUpHandler }: any) {
  const [fields, handleFieldsChange] = useFields({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errorConfirmPass, setErrorConfirmPass] = useState(false);

  const validateConfirmPassword = () => {
    const { password, confirmPassword } = fields;
    return confirmPassword.length > 0 && password !== confirmPassword;
  };

  const validatePassword = () => {
    const { password } = fields;

    return password.length < 6 && password.length > 0;
  };

  const checkEmptyFields = ({ firstName, lastName, email, password }: any) => {
    return (
      firstName.trim().length &&
      lastName.trim().length &&
      email.trim().length &&
      password.trim().length
    );
  };

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    const { firstName, lastName, email, password } = fields;
    if (
      validateConfirmPassword() ||
      !checkEmptyFields(fields) ||
      validatePassword()
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
