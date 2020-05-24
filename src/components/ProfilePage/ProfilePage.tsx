import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import ProfileInput from '../ProfileInput/ProfileInput';
import useStyles from './styles';
import {
  validateEmail,
  validateName,
  validatePassword,
  validateConfirmPassword,
} from '../../utils';

const ProfilePage = ({
  currentUser,
  handleSignOut,
  handleFieldsChange,
  newData,
  handleOtherInfoChange,
  handlePasswordUpdate,
}: any) => {
  console.log(currentUser);

  const classes = useStyles();
  return (
    <Container component="main" maxWidth="sm">
      <Typography variant="h3">
        <Box textAlign="center">Personal Info</Box>
        <Divider />
      </Typography>
      <div className={classes.root}>
        <Avatar
          alt="Profile Pic"
          className={`${classes.purple} ${classes.large}`}
        >
          <Typography variant="h4">{`${currentUser.firstName[0]}${currentUser.lastName[0]}`}</Typography>
        </Avatar>
      </div>
      <div className={classes.profileFields}>
        <div className={classes.nameFields}>
          <ProfileInput
            id="newFirstName"
            label="First Name"
            handleFieldsChange={handleFieldsChange}
            value={newData.newFirstName}
            error={
              validateName(newData.newFirstName) &&
              newData.newFirstName.length > 0
            }
            helperText="Please enter a valid first name."
          />
          <ProfileInput
            id="newLastName"
            label="Last Name"
            handleFieldsChange={handleFieldsChange}
            value={newData.newLastName}
            error={
              validateName(newData.newLastName) &&
              newData.newLastName.length > 0
            }
            helperText="Please enter a valid last name."
          />
        </div>
        <ProfileInput
          id="newEmail"
          label="Email"
          handleFieldsChange={handleFieldsChange}
          value={newData.newEmail}
          error={validateEmail(newData.newEmail) && newData.newEmail.length > 0}
          helperText="Please enter a valid email address."
        />
        <ProfileInput
          id="newPassword"
          label="Password"
          handleFieldsChange={handleFieldsChange}
          value={newData.newPassword}
          error={
            newData.newPassword.length > 0
              ? validatePassword(newData.newPassword) &&
                newData.newPassword.length > 0
              : null
          }
          helperText="Minimum six characters, at least one letter and one number."
          type="password"
        />
        <ProfileInput
          id="newConfirmPassword"
          label="Confirm Password"
          handleFieldsChange={handleFieldsChange}
          value={newData.newConfirmPassword}
          error={
            newData.newPassword.length > 0 &&
            newData.newConfirmPassword.length > 0
              ? validateConfirmPassword(
                  newData.newPassword,
                  newData.newConfirmPassword,
                )
              : null
          }
          helperText="Please make sure your passwords match."
          type="password"
        />
      </div>
      <div className={classes.buttonsContainer}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<SaveIcon />}
          onClick={handleOtherInfoChange}
        >
          Update other info
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<VpnKeyIcon />}
          onClick={handlePasswordUpdate}
        >
          Update Password
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          className={classes.button}
          startIcon={<ExitToAppIcon />}
          onClick={handleSignOut}
        >
          Sign out
        </Button>
      </div>
    </Container>
  );
};

export default ProfilePage;
