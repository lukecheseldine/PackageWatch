import React, { useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

const VerifyEmail = () => {
    const { user } = useAuth0()
    const navigate = useNavigate()

    useEffect(() => {
        if (user?.email_verified) {
            navigate('/home')
        }
    }, [user])

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Typography variant="h1">Please check your email for verification link</Typography>
        </Box>
    )
}
export default VerifyEmail
