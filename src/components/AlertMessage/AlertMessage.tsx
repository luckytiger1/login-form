import React from 'react';
import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

interface AlertMessageProps {
  errorConfirmPass: boolean;
  handleClose: (event?: React.SyntheticEvent, reason?: string) => void;
  message: string;
}

const AlertMessage: React.FC<AlertMessageProps> = ({
  errorConfirmPass,
  handleClose,
  message,
}) => {
  return (
    <Snackbar
      open={errorConfirmPass}
      autoHideDuration={1500}
      onClose={handleClose}
    >
      <Alert severity="error">{message}</Alert>
    </Snackbar>
  );
};

export default AlertMessage;
