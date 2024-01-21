import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Box } from '@mui/material'
import { useAuth0 } from '@auth0/auth0-react'
import RequireAuth from './Pages/RequireAuth/RequireAuth'
import Loading from './Pages/Loading/Loading'

function App() {
    const { isLoading } = useAuth0()

    if (isLoading) {
        return <Loading />
    }

    return (
        <Router>
            <Box display="flex" flexDirection="column" height="100vh">
                <Navbar />
                <Box flex="1" display={'flex'}>
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route
                            path="/home"
                            element={
                                <RequireAuth>
                                    <Home />
                                </RequireAuth>
                            }
                        ></Route>
                    </Routes>
                </Box>
                <Footer />
            </Box>
        </Router>
    )
}

export default App
