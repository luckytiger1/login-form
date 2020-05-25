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

interface SignUpContainerProps {
  signUpHandler: (data: any) => void;
}

const SignUpContainer: React.FC<SignUpContainerProps> = ({ signUpHandler }) => {
  const [fields, handleFieldsChange] = useFields({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errorForm, setErrorForm] = useState(false);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = fields;
    if (
      validateConfirmPassword(password, confirmPassword) ||
      !checkEmptyFields(firstName, lastName, email, password) ||
      validatePassword(password)
    ) {
      setErrorForm(true);
    } else {
      signUpHandler({ firstName, lastName, email, password });
    }
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setErrorForm(false);
  };

  return (
    <SignUp
      fields={fields}
      handleFieldsChange={handleFieldsChange}
      handleSubmit={handleSubmit}
      handleClose={handleClose}
      errorForm={errorForm}
    />
  );
};

const mapDispatchToProps = {
  signUpHandler: signUpStart,
};

export default connect(null, mapDispatchToProps)(SignUpContainer);
