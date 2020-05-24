import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import SignIn from './SignIn';
import useFields from '../../hooks/useFieldshook';
import { signInStart } from '../../redux/actions/signIn';
import { selectError } from '../../redux/selectors/users.selector';
import { validateEmail, validatePassword } from '../../utils';

const SignInContainer = ({ signInStartHandle, error }: any) => {
  const [loginFields, handleFieldsChange] = useFields({
    email: '',
    password: '',
  });

  const handleSubmit = (event: React.SyntheticEvent) => {
    const { email, password } = loginFields;
    event.preventDefault();
    if (validateEmail(email) && !validatePassword(password)) {
      signInStartHandle(loginFields);
    }
  };

  return (
    <SignIn
      loginFields={loginFields}
      handleFieldsChange={handleFieldsChange}
      handleSubmit={handleSubmit}
      error={error}
      validateEmail={validateEmail}
      validatePassword={validatePassword}
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
