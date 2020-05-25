import React, { useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import SignIn from './SignIn';
import useFields from '../../hooks/useFieldshook';
import { signInStart } from '../../redux/actions/signIn';
import { selectError } from '../../redux/selectors/users.selector';
import { validateEmail, validatePassword } from '../../utils';

interface SignInContainerProps {
  signInStartHandle: (loginFields: object) => void;
}

const SignInContainer: React.FC<SignInContainerProps> = ({
  signInStartHandle,
}) => {
  const [loginFields, handleFieldsChange] = useFields({
    email: '',
    password: '',
  });

  const [errorForm, setErrorForm] = useState(false);

  const handleSubmit = (event: React.SyntheticEvent) => {
    const { email, password } = loginFields;
    event.preventDefault();

    console.log(loginFields);
    if (!validateEmail(email) && !validatePassword(password)) {
      signInStartHandle(loginFields);
    } else {
      setErrorForm(true);
    }
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setErrorForm(false);
  };

  return (
    <SignIn
      loginFields={loginFields}
      handleFieldsChange={handleFieldsChange}
      handleSubmit={handleSubmit}
      handleClose={handleClose}
      errorForm={errorForm}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  error: selectError,
});

const mapDispatchToProps = {
  signInStartHandle: signInStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
