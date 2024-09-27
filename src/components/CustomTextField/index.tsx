import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

const CustomTextField = React.forwardRef<HTMLDivElement, TextFieldProps>(
  (props, ref) => {
    return <TextField {...props} ref={ref} />;
  }
);

export default CustomTextField;
