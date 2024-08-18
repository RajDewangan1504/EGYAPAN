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
    fontSize,
    fontWeight,
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
            fontSize={fontSize}
            fontWeight={fontWeight}
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
