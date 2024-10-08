import React from 'react';
import { Button, ThemeProvider } from '@mui/material'
import { bgColor, muiTheme } from '../../Utils';
import styles from './styles.module.css'

export default function CustomButton({
    text,
    disabled,
    fullWidth,
    size,
    type,
    onClick,
    variant = "contained",
    color,
    loading = false,
    startIcon,
    className
}) {
    return (
        <ThemeProvider theme={muiTheme}>
             <Button
                disableElevation
                disabled={disabled}
                fullWidth={fullWidth}
                size={size}
                onClick={onClick}
                type={type}
                variant={variant}
                color={color}
                startIcon={startIcon}
                className={`${className} ${styles.main}`}
            >
                {text}
            </Button>
            
        </ThemeProvider>

    )

    
}

