import React from 'react';
import { createStructuredSelector } from 'reselect';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';

const ProfilePage = () => {
  return (
    <div>
      <Typography component="h1">Profile Page</Typography>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(ProfilePage);
