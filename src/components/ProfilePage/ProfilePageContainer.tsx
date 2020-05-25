import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useHistory } from 'react-router';
import { selectCurrentUser } from '../../redux/selectors/users.selector';
import ProfilePage from './ProfilePage';
import NoAccessPage from '../NoAccessPage/NoAccessPage';
import { signOutStart } from '../../redux/actions/signOut';
import useFields from '../../hooks/useFieldshook';
import {
  updateProfile,
  updatePassword,
} from '../../redux/actions/updateProfile';
import {
  validateEmail,
  validateName,
  validateConfirmPassword,
  validatePassword,
} from '../../utils';

interface ProfilePageContainerProps {
  currentUser: any;
  signOutHandle: () => void;
  handleProfileChange: (newData: any) => void;
  handlePasswordChange: (newData: any) => void;
}

const ProfilePageContainer: React.FC<ProfilePageContainerProps> = ({
  currentUser,
  signOutHandle,
  handleProfileChange,
  handlePasswordChange,
}) => {
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

  const handleOtherInfoChange = () => {
    const { newEmail, newFirstName, newLastName } = newData;
    if (
      (currentUser.email !== newEmail ||
        currentUser.firstName !== newFirstName ||
        currentUser.lastName !== newLastName) &&
      newFirstName.trim().length &&
      newLastName.trim().length &&
      newEmail.trim().length &&
      !validateEmail(newEmail) &&
      !validateName(newFirstName) &&
      !validateName(newLastName)
    ) {
      handleProfileChange(newData);
    }
  };

  const handlePasswordUpdate = () => {
    const { newPassword, newConfirmPassword } = newData;
    if (newPassword.length > 0) {
      if (
        !validateConfirmPassword(newPassword, newConfirmPassword) &&
        !validatePassword(newPassword)
      ) {
        handlePasswordChange(newData);
      }
    }
  };

  return currentUser ? (
    <ProfilePage
      currentUser={currentUser}
      handleSignOut={handleSignOut}
      handleFieldsChange={handleFieldsChange}
      newData={newData}
      handlePasswordUpdate={handlePasswordUpdate}
      handleOtherInfoChange={handleOtherInfoChange}
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
  handlePasswordChange: updatePassword,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfilePageContainer);
