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
    borderWidth = '1px',
    inputProps


}) {
    return (
        <ThemeProvider theme={muiTheme}>
            <Stack >
                {label && <InputLabel size='15px'>{label}</InputLabel>}
                <OutlinedInput
                    fullWidth
                    error={error}
                    id={id}
                    style={{ color: '#808080' }} // Styles the input text
                    type={type}
                    value={value}
                    name={name}
                    className={styles.main}
                    onBlur={onBlur}
                    disabled={disabled}
                    rowsMax={maxRow}
                    rows={rows}
                    multiline={multiline}
                    onChange={onChange}
                    placeholder={placeholder}
                    inputProps={{
                        ...inputProps,
                        sx: {
                            '&::placeholder': {
                                color: '#808080', // Custom placeholder color
                                opacity: 1, // Ensures visibility (default opacity might be less)
                            },
                        },
                    }}
                    endAdornment={endIcon}
                    startAdornment={startIcon}
                    size="small"
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
