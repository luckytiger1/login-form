import React from 'react';
import { TextField, Grid } from '@material-ui/core';

const FormInput = ({
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
}: any) => {
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
