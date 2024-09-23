import React from 'react';
import { Select, MenuItem, FormControl, InputLabel, Stack, ThemeProvider, OutlinedInput } from '@mui/material';
import { muiTheme } from '../../Utils';
import styles from './styles.module.css';

const CustomSelect = ({ label, options, value, onChange, name, error, disabled, placeholder }) => {
    return (
        <ThemeProvider theme={muiTheme}>
            <Stack>
                {label && <InputLabel size='15px'>{label}</InputLabel>}
                <FormControl variant="outlined" className={styles.formControl} fullWidth error={error} disabled={disabled}>
                    <Select
                        value={value}
                        onChange={onChange}
                        input={<OutlinedInput />}
                        placeholder={placeholder}
                        label={label}
                        name={name}
                        className={styles.selectEmpty}
                        fullWidth
                        displayEmpty
                    >

                        <MenuItem value="" disabled>
                            {placeholder}
                        </MenuItem>
                        {options.map((option, index) => (
                            <MenuItem key={index} value={option.value} >
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Stack>
        </ThemeProvider>
    );
};

export default CustomSelect;
