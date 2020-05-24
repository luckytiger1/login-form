import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useHistory } from 'react-router';
import { selectCurrentUser } from '../../redux/selectors/users.selector';
import ProfilePage from './ProfilePage';
import NoAccessPage from '../NoAccessPage/NoAccessPage';
import { signOutStart } from '../../redux/actions/signOut';
import useFields from '../../hooks/useFieldshook';
import { updateProfile } from '../../redux/actions/updateProfile';
import { checkEmptyFields } from '../../utils';

const ProfilePageContainer = ({
  currentUser,
  signOutHandle,
  handleProfileChange,
}: any) => {
  const [newData, handleFieldsChange] = useFields({
    newFirstName: currentUser.firstName,
    newLastName: currentUser.lastName,
    newEmail: currentUser.email,
    newPassword: '',
    newConfirmPassword: '',
  });

  const history = useHistory();

  const handleSignOut = () => {
    signOutHandle();
    history.push('/signin');
  };

  const handleSaveSubmit = () => {
    const { newEmail, newFirstName, newLastName } = newData;
    if (
      (currentUser.email !== newEmail ||
        currentUser.firstName !== newFirstName ||
        currentUser.lastName !== newLastName) &&
      checkEmptyFields(newFirstName, newLastName, newEmail)
    ) {
      handleProfileChange(newData);
    }
    // if (currentUser.firstName !== newFirstName) {
    //   handleFirstNameChange(newFirstName);
    // }
  };

  return currentUser ? (
    <ProfilePage
      currentUser={currentUser}
      handleSignOut={handleSignOut}
      handleFieldsChange={handleFieldsChange}
      newData={newData}
      handleSaveSubmit={handleSaveSubmit}
    />
  ) : (
    <NoAccessPage />
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = {
  signOutHandle: signOutStart,
  handleProfileChange: updateProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfilePageContainer);
