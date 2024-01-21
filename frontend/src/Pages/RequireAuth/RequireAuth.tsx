import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from '../Loading/Loading'

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated, user } = useAuth0()
    const navigate = useNavigate()

    useEffect(() => {
        console.log(isAuthenticated)
        if (!isAuthenticated) {
            navigate('/')
            return
        }
        if (!user?.email_verified) {
            navigate('/verify-email')
            return
        }
    }, [isAuthenticated, user])

    return isAuthenticated ? <>{children}</> : <Loading />
}

export default RequireAuth
