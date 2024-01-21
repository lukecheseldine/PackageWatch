import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Box, useTheme } from '@mui/material'
import { useAuth0 } from '@auth0/auth0-react'
import RequireAuth from './Pages/RequireAuth/RequireAuth'
import Loading from './Pages/Loading/Loading'
import VerifyEmail from './Pages/VerifyEmail/VerifyEmail'
import GroupDetail from './Pages/GroupDetail/GroupDetail'
import Settings from './Pages/Settings/Settings'

function App() {
    const { isLoading } = useAuth0()
    const theme = useTheme()

    if (isLoading) {
        return <Loading />
    }

    return (
        <Router>
            <Box display="flex" flexDirection="column" height="100vh">
                <Navbar />
                <Box sx={{ flex: 1, display: 'flex', backgroundColor: theme.palette.background.default }}>
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route
                            path="/home"
                            element={
                                <RequireAuth>
                                    <Home />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="/verify-email"
                            element={
                                <RequireAuth>
                                    <VerifyEmail />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="/group/:groupName"
                            element={
                                <RequireAuth>
                                    <GroupDetail />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="/settings"
                            element={
                                <RequireAuth>
                                    <Settings />
                                </RequireAuth>
                            }
                        />
                    </Routes>
                </Box>
                <Footer />
            </Box>
        </Router>
    )
}

export default App
