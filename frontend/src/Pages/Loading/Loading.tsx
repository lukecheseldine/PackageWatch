import React from 'react'
import { CircularProgress, useTheme } from '@mui/material'

const Loading = () => {
    const theme = useTheme()
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: theme.palette.background.default,
            }}
        >
            <CircularProgress color="primary" />
        </div>
    )
}

export default Loading
