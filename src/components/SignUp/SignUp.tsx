import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import FormInput from '../FormInput/FormInput';
import useStyles from '../../customStyle';
import FormTitle from '../FormTitle/FormTitle';
import {
  validateConfirmPassword,
  validatePassword,
  validateEmail,
  validateName,
} from '../../utils';

const SignUp = ({
  fields,
  handleFieldsChange,
  handleSubmit,
  errorForm,
  handleClose,
}: any) => {
  const classes = useStyles(3)();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Snackbar open={errorForm} autoHideDuration={1500} onClose={handleClose}>
        <Alert severity="error">Please fill out the form!</Alert>
      </Snackbar>
      <div className={classes.paper}>
        <FormTitle classId={classes.avatar} title="Sign up" />
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <FormInput
              label="First Name"
              id="firstName"
              aComplete="fname"
              type="text"
              fields={fields.firstName}
              handleFieldsChange={handleFieldsChange}
              sm={6}
              error={
                validateName(fields.firstName) && fields.firstName.length > 0
              }
              helperText="Please enter a valid first name."
            />
            <FormInput
              label="Last Name"
              id="lastName"
              aComplete="lname"
              type="text"
              fields={fields.lastName}
              handleFieldsChange={handleFieldsChange}
              sm={6}
              error={
                validateName(fields.lastName) && fields.lastName.length > 0
              }
              helperText="Please enter a valid last name."
            />
            <FormInput
              label="Email Address"
              id="email"
              aComplete="email"
              type="text"
              fields={fields.email}
              handleFieldsChange={handleFieldsChange}
              error={validateEmail(fields.email) && fields.email.length > 0}
              helperText="Please enter a valid email address."
            />
            <FormInput
              label="Password"
              id="password"
              aComplete="current-password"
              type="password"
              fields={fields.password}
              handleFieldsChange={handleFieldsChange}
              error={
                validatePassword(fields.password) && fields.password.length > 0
              }
              helperText="Minimum six characters, at least one letter and one number."
            />
            <FormInput
              label="Confirm Password"
              id="confirmPassword"
              aComplete="current-password"
              type="password"
              error={validateConfirmPassword(
                fields.password,
                fields.confirmPassword,
              )}
              helperText="Please make sure your passwords match."
              fields={fields.confirmPassword}
              handleFieldsChange={handleFieldsChange}
            />
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/signin">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignUp;
