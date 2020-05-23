import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const ProfileInput = ({ label, value, id }: any) => {
  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput id={id} defaultValue={value} label={label} />
    </FormControl>
  );
};

export default ProfileInput;
