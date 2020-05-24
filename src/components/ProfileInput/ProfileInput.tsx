import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

const ProfileInput = ({
  label,
  value,
  id,
  handleFieldsChange,
  error,
  helperText,
  type,
}: any) => {
  return (
    <FormControl variant="outlined">
      <TextField
        id={id}
        label={label}
        value={value}
        onChange={handleFieldsChange}
        error={error}
        helperText={error && helperText}
        variant="outlined"
        type={type}
      />
    </FormControl>
  );
};

export default ProfileInput;
