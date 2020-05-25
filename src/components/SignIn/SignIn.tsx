import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import useStyles from '../../customStyle';
import FormInput from '../FormInput/FormInput';
import FormTitle from '../FormTitle/FormTitle';
import AlertMessage from '../AlertMessage/AlertMessage';
import { validatePassword, validateEmail } from '../../utils';

interface SignInProps {
  loginFields: any;
  handleFieldsChange: () => void;
  handleSubmit: (event: React.SyntheticEvent) => void;
  errorForm: boolean;
  handleClose: (event?: React.SyntheticEvent, reason?: string) => void;
}

const SignIn: React.FC<SignInProps> = ({
  loginFields,
  handleFieldsChange,
  handleSubmit,
  errorForm,
  handleClose,
}) => {
  const classes = useStyles(1)();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <AlertMessage
        errorConfirmPass={errorForm}
        message="Please fill out the form!"
        handleClose={handleClose}
      />
      <div className={classes.paper}>
        <FormTitle classId={classes.avatar} title="Sign in" />
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <FormInput
            label="Email Address"
            id="email"
            aComplete="email"
            type="text"
            value={loginFields.email}
            handleFieldsChange={handleFieldsChange}
            margin="normal"
            error={
              validateEmail(loginFields.email) && loginFields.email.length > 0
            }
            helperText="Please enter a valid email address."
          />
          <FormInput
            label="Password"
            id="password"
            aComplete="current-password"
            type="password"
            value={loginFields.password}
            handleFieldsChange={handleFieldsChange}
            margin="normal"
            error={
              validatePassword(loginFields.password) &&
              loginFields.password.length > 0
            }
            helperText="Minimum six characters, at least one letter and one number."
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/signup">Don&apos;t have an account? Sign Up</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignIn;
