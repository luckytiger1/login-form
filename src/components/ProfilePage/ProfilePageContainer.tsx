import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useHistory } from 'react-router';
import { selectCurrentUser } from '../../redux/selectors/users.selector';
import ProfilePage from './ProfilePage';
import NoAccessPage from '../NoAccessPage/NoAccessPage';
import { signOutStart } from '../../redux/actions/signOut';

const ProfilePageContainer = ({ currentUser, signOutHandle }: any) => {
  const history = useHistory();
  const handleSignOut = () => {
    signOutHandle();
    history.push('/signin');
  };
  return currentUser ? (
    <ProfilePage currentUser={currentUser} handleSignOut={handleSignOut} />
  ) : (
    <NoAccessPage />
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = {
  signOutHandle: signOutStart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfilePageContainer);
