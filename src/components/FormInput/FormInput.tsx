import React from 'react';
import { TextField, Grid } from '@material-ui/core';

interface FormInputProps {
  value: string;
  handleFieldsChange: () => void;
  aComplete: string;
  label: string;
  id: string;
  type: string;
  margin?: 'none' | 'dense' | 'normal' | undefined;
  sm?: any;
  error: boolean;
  helperText: string;
}

const FormInput: React.FC<FormInputProps> = ({
  value,
  handleFieldsChange,
  aComplete,
  label,
  id,
  type,
  margin,
  sm,
  error,
  helperText,
}) => {
  return (
    <Grid item xs={12} sm={sm}>
      <TextField
        variant="outlined"
        autoComplete={aComplete}
        name={id}
        required
        fullWidth
        id={id}
        label={label}
        autoFocus
        value={value}
        onChange={handleFieldsChange}
        type={type}
        margin={margin}
        error={error}
        helperText={error && helperText}
      />
    </Grid>
  );
};

export default FormInput;
