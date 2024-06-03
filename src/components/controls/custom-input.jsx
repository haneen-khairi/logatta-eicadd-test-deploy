import React from 'react';
import {
  FormControl,
  TextField,
  FormLabel,
  InputAdornment,
  FormHelperText,
} from '@mui/material';

function CustomInput({
  label,
  placeholder,
  register,
  name,
  errors,
  touchedFields,
  type,
  id,
  otherProps,
  labelEnd,
  disabled,
  value,
  corporate,
}) {
  const styles = {
    'input': {
      border: "none",
      '&::placeholder': {
        color: corporate ? "#000" : '#9598AE',
        fontWeight: corporate ? "600" :  "400"
      }
    }
  };
  return (
    <FormControl sx={{...styles,width:"100%"}}>
      <TextField
        sx={{
          borderRadius: '20px',
          backgroundColor: corporate ? 'rgba(255, 255, 255, 0.58)' : 'white',
          height: type === 'textarea' ? 'auto' : 'auto',
          '& textarea': { height: '6rem !important' },
          width:"100%"
        }}
        id={id}
        label={placeholder ? '' : label}
        placeholder={placeholder}
        variant='outlined'
        disabled={disabled}
        value={value}
        type={type}
        error={Boolean(errors[name] && touchedFields[name])}
        {...otherProps}
        {...register(name)}
        InputProps={{
          endAdornment: labelEnd && (
            <InputAdornment position='start'>{labelEnd}</InputAdornment>
          ),
        }}
      />
      {Boolean(errors[name] && touchedFields[name]) && (
        <FormHelperText sx={{ color: 'red' }} id={name}>
          {errors[name]?.message}
        </FormHelperText>
      )}
    </FormControl>
  );
}

export default CustomInput;
