import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import FormInput from '../FormInput/FormInput';
import useStyles from '../../customStyle';
import FormTitle from '../FormTitle/FormTitle';

const SignUp = ({ fields, handleFieldsChange }: any) => {
  const classes = useStyles(3)();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <FormTitle classId={classes.avatar} title="Sign in" />
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <FormInput
              label="First Name"
              id="firstName"
              aComplete="fname"
              type="text"
              fields={fields.firstName}
              handleFieldsChange={handleFieldsChange}
              sm={6}
            />
            <FormInput
              label="Last Name"
              id="lastName"
              aComplete="lname"
              type="text"
              fields={fields.lastName}
              handleFieldsChange={handleFieldsChange}
              sm={6}
            />
            <FormInput
              label="Email Address"
              id="email"
              aComplete="email"
              type="text"
              fields={fields.email}
              handleFieldsChange={handleFieldsChange}
            />
            <FormInput
              label="Password"
              id="password"
              aComplete="current-password"
              type="password"
              fields={fields.password}
              handleFieldsChange={handleFieldsChange}
            />
            <FormInput
              label="Confirm Password"
              id="confirmPassword"
              aComplete="current-password"
              type="password"
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
