import React from 'react'
import { FormHelperText, OutlinedInput, InputLabel, Stack, ThemeProvider } from '@mui/material'
import { muiTheme } from '../../Utils'
import styles from './styles.module.css'
export default function CustomInput({
    startIcon,
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
            {label && <InputLabel size='15px'>{label}</InputLabel>}
            <OutlinedInput
                fullWidth
                error={error}
                id={id}
                type={type}
                value={value}
                name={name}
                className={styles.main}
                onBlur={onBlur}
                disabled={disabled}
                rowsMax={maxRow}
                rows = {rows}
                multiline = {multiline}
                onChange={onChange}
                placeholder={placeholder}
                inputProps={{}}
                endAdornment={endIcon}
                startAdornment={startIcon}
                size="small"
                style={{color:'#0005'}}
                
                
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
