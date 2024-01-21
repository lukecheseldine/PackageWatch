import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useAuth0 } from '@auth0/auth0-react'

const Landing = () => {
    const theme = useTheme()
    const { loginWithRedirect } = useAuth0()

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.background.default,
                textAlign: 'center',
                padding: '100px',
                flex: 1,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="h1" component="h1" gutterBottom color={theme.palette.secondary.main}>
                    Package
                </Typography>
                <Typography variant="h1" component="h1" gutterBottom color={theme.palette.primary.main}>
                    Watch
                </Typography>
            </Box>

            <Typography variant="h5" gutterBottom>
                Automatic package delivery notifications for your household.
            </Typography>
            <Grid container justifyContent="center" spacing={2} sx={{ paddingTop: '40px' }}>
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ width: '200px', height: '50px', fontSize: '1.2rem' }}
                        onClick={() => loginWithRedirect()}
                    >
                        Get Started
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        onClick={() => loginWithRedirect()}
                        variant="contained"
                        sx={{
                            background: theme.palette.common.white,
                            color: theme.palette.common.black,
                            width: '100px',
                            height: '50px',
                            fontSize: '1.2rem',
                            '&:hover': {
                                backgroundColor: theme.palette.grey[200],
                            },
                        }}
                    >
                        Login
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Landing
