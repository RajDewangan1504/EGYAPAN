import React from 'react'
import { FormHelperText, OutlinedInput, InputLabel, Stack, ThemeProvider } from '@mui/material'
import { muiTheme } from '../../Utils'

export default function CustomInput({
    id,
    name,
    label,
    error,
    disabled,
    errorMessage,
    placeholder,
    type,
    value,
    onBlur,
    onChange,
    endIcon,
    maxRow = 1,
    rows = 1,
    multiline = false,
    borderWidth = '1px'
}) {
    return (
      <ThemeProvider theme={muiTheme}>
        <Stack >
            {label && <InputLabel >{label}</InputLabel>}
            <OutlinedInput
                fullWidth
                error={error}
                id={id}
                type={type}
                value={value}
                name={name}
                onBlur={onBlur}
                disabled={disabled}
                rowsMax={maxRow}
                rows = {rows}
                multiline = {multiline}
                onChange={onChange}
                placeholder={placeholder}
                inputProps={{}}
                endAdornment={endIcon}
                
            />
            {error && (
                <FormHelperText error>
                    {errorMessage}
                </FormHelperText>
            )}
        </Stack>
        </ThemeProvider>
    )
}
