import React from 'react';
import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

export default function AlertMessage({
  errorConfirmPass,

  message,
}: any) {
  return (
    <Snackbar open={errorConfirmPass} autoHideDuration={1500}>
      <Alert severity="error">{message}</Alert>
    </Snackbar>
  );
}
