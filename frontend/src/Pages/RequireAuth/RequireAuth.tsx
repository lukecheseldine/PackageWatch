import { useAuth0 } from '@auth0/auth0-react'
import { CircularProgress } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from '../Loading/Loading'

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated } = useAuth0()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/')
        }
    }, [isAuthenticated])

    return isAuthenticated ? <>{children}</> : <Loading />
}

export default RequireAuth
