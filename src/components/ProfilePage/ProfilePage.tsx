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

const ProfilePage = ({ currentUser, handleSignOut }: any) => {
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
            id="firstName"
            value={currentUser.firstName}
            label="First Name"
          />
          <ProfileInput
            id="lastName"
            value={currentUser.lastName}
            label="Last Name"
          />
        </div>
        <ProfileInput id="email" value={currentUser.email} label="Email" />
        <ProfileInput id="password" defaultValue="" label="Password" />
        <ProfileInput id="confirmPassword" value="" label="Confirm Password" />
      </div>
      <div className={classes.buttonsContainer}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<SaveIcon />}
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
