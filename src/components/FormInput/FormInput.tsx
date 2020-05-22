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
      />
    </Grid>
  );
};

export default FormInput;
