import React from 'react'
import { AppBar, Toolbar, Typography, Button, useTheme } from '@mui/material'
import { useAuth0 } from '@auth0/auth0-react'

const Navbar = () => {
    const theme = useTheme()
    const { isAuthenticated, logout, loginWithRedirect } = useAuth0()

    return (
        <AppBar position="static" sx={{ backgroundColor: theme.palette.background.default, boxShadow: 'none' }}>
            <Toolbar>
                <Typography variant="h6" style={{ color: theme.palette.secondary.main }}>
                    Package
                </Typography>
                <Typography variant="h6" style={{ color: theme.palette.primary.main }}>
                    Watch
                </Typography>
                <div style={{ marginLeft: 'auto' }}>
                    {!isAuthenticated && (
                        <Button
                            color="inherit"
                            sx={{ color: theme.palette.common.black }}
                            onClick={() => loginWithRedirect()}
                        >
                            Get Started
                        </Button>
                    )}
                    {isAuthenticated ? (
                        <Button
                            color="inherit"
                            sx={{ color: theme.palette.common.black }}
                            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                        >
                            Log out
                        </Button>
                    ) : (
                        <Button
                            color="inherit"
                            sx={{ color: theme.palette.common.black }}
                            onClick={() => loginWithRedirect()}
                        >
                            Login
                        </Button>
                    )}
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
