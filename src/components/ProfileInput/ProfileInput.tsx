import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const ProfileInput = ({ label, value, id, handleFieldsChange }: any) => {
  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        id={id}
        label={label}
        value={value}
        onChange={handleFieldsChange}
      />
    </FormControl>
  );
};

export default ProfileInput;
