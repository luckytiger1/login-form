import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/selectors/users.selector';
import ProfilePage from './ProfilePage';
import NoAccessPage from '../NoAccessPage/NoAccessPage';

const ProfilePageContainer = ({ currentUser }: any) => {
  return currentUser ? (
    <ProfilePage currentUser={currentUser} />
  ) : (
    <NoAccessPage />
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(ProfilePageContainer);
