import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

interface ProfileInputProps {
  label: string;
  value: string;
  id: string;
  handleFieldsChange: () => void;
  error?: any;
  helperText: string;
  type?: string;
}

const ProfileInput: React.FC<ProfileInputProps> = ({
  label,
  value,
  id,
  handleFieldsChange,
  error,
  helperText,
  type,
}) => {
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
