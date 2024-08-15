import React from 'react'
import {Typography} from '@mui/material'
import { bgColor } from '../../Utils'

export default function CustomTypo({
    component,
    to,
    variant,
    sx,
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
