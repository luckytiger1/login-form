import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

function FormTitle({ title, classId }: any) {
  return (
    <>
      <Avatar className={classId}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        {title}
      </Typography>
    </>
  );
}

export default FormTitle;
