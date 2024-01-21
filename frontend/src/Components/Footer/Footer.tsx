import React from 'react'
import { Typography, Box, useTheme } from '@mui/material'

const Footer = () => {
    const theme = useTheme()

    return (
        <Box display="flex" justifyContent="center" p={1} bgcolor="background.default">
            <Typography variant="body1" color="text.primary">
                A Luke Cheseldine production
            </Typography>
        </Box>
    )
}

export default Footer
