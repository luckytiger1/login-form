import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import ProfileInput from '../ProfileInput/ProfileInput';
import useStyles from './styles';

const ProfilePage = ({
  currentUser,
  handleSignOut,
  handleFieldsChange,
  newData,
  handleSaveSubmit,
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
            // defaultValue={currentUser.firstName}
            label="First Name"
            handleFieldsChange={handleFieldsChange}
            value={newData.newFirstName}
          />
          <ProfileInput
            id="newLastName"
            // defaultValue={currentUser.lastName}
            label="Last Name"
            handleFieldsChange={handleFieldsChange}
            value={newData.newLastName}
          />
        </div>
        <ProfileInput
          id="newEmail"
          //   defaultValue={currentUser.email}
          label="Email"
          handleFieldsChange={handleFieldsChange}
          value={newData.newEmail}
        />
        <ProfileInput
          id="newPassword"
          //   defaultValue=""
          label="Password"
          handleFieldsChange={handleFieldsChange}
          value={newData.newPassword}
        />
        <ProfileInput
          id="newConfirmPassword"
          //   defaultValue=""
          label="Confirm Password"
          handleFieldsChange={handleFieldsChange}
          value={newData.newConfirmPassword}
        />
      </div>
      <div className={classes.buttonsContainer}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<SaveIcon />}
          onClick={handleSaveSubmit}
        >
          Save changes
        </Button>
        <Button
          variant="contained"
          color="primary"
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
