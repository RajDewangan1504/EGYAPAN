import React from 'react'
import {Typography} from '@mui/material'

export default function CustomTypo({
    component,
    to,
    variant,
    sx,
    color,
    children,
    href,
    target,
    underline,
    gutterBottom = false,
    ...rest
}) {
    return (
        <Typography
            sx={sx}
            component={component}
            to={to}
            variant={variant}
            color={color}
            href = {href}
            taregt = {target}
            underline = {underline}
            gutterBottom = {gutterBottom}
            {...rest}
        >
            {children}
        </Typography>
    )
}
